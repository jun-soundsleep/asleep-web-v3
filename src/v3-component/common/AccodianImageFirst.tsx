import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { useToggle } from 'react-use';
import PlusButton from '/public/imagev3/icon/plus.svg';
import MinusButton from '/public/imagev3/icon/minus.svg';
import AndroidIcon from '/public/imagev3/logo/Google_Play.svg';
import IosIcon from '/public/imagev3/logo/App_Store.svg';
import { AnimatePresence, motion } from 'framer-motion';
import useGetCurrentSize from '../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../styles/device';
import LabelBodySection from './LabelBodySection';

type AccodianDataType = {
  title: string;
  description: string;
  image: string;
};

type AccodianSectionType = {
  data: AccodianDataType[];
  defaultImage: string;
  styleClass?: string;
  head: string;
  description: string;
  appStore?: { androidLink: string; iosLink: string };
};

const AccodianImageFirst: FC<AccodianSectionType> = ({
  data,
  defaultImage,
  styleClass,
  head,
  description,
  appStore
}) => {
  const [currentTab, setCurrentTab] = useState<null | string>(null);
  const currentSize = useGetCurrentSize();
  const isLarge = currentSize === deviceType.large;

  const largeImageIndex = data.findIndex(el => {
    return el.title === currentTab;
  });

  const getImage = () => {
    return (
      <div className={`relative w-full h-[354px] medium:h-[702px]`}>
        <Image
          src={largeImageIndex < 0 ? defaultImage : data[largeImageIndex].image}
          alt={'aasd'}
          fill
        />
      </div>
    );
  };

  const getAppIcon = () => {
    const iconStyle = `w-[78px] h-[26px] medium:w-[112px] medium:h-[32px] `;

    return (
      <>
        {appStore && (
          <div
            className={`flex justify-start gap-[12px] mt-[16px] medium:mt-[32px] large:mt-[24px]`}
          >
            <div className={iconStyle}>
              <a
                href={appStore.androidLink}
                target={'__blank'}
              >
                <AndroidIcon />
              </a>
            </div>
            <div className={iconStyle}>
              <a
                href={appStore.iosLink}
                target={'__blank'}
              >
                <IosIcon />
              </a>
            </div>
          </div>
        )}
      </>
    );
  };

  const getHead = () => {
    return (
      <>
        <LabelBodySection
          head={head}
          description={description}
        />
        {getAppIcon()}
      </>
    );
  };

  return (
    <>
      {!isLarge && getHead()}
      <div
        className={`mt-[32px] large:flex large:gap-[38px] large:items-start large:pb-[164px]`}
      >
        {!isLarge && getImage()}
        <div>
          {isLarge && getHead()}
          {data.map((el, idx) => {
            return (
              <SubSection
                idx={idx}
                key={idx}
                title={el.title}
                description={el.description}
                setCurrentTab={setCurrentTab}
                currentTab={currentTab}
              />
            );
          })}
        </div>
        {isLarge && getImage()}
      </div>
    </>
  );
};

export default AccodianImageFirst;

const SubSection = ({ idx, title, description, currentTab, setCurrentTab }) => {
  const [selected, setSelected] = useToggle(false);
  const buttonStyle = `w-[20px] h-[22px] flex items-center justify-between`;

  const clickHandler = () => {
    setCurrentTab(title);
    setSelected(!selected);
  };

  useEffect(() => {
    if (title !== currentTab) {
      setSelected(false);
    }
  }, [currentTab]);

  return (
    <>
      <div
        className={`flex items-center justify-between ${
          idx === 0 && 'mt-[32px]'
        } h-[62px] border-b-[1px] border-[#626262] large:min-w-[512px]`}
      >
        <h3
          className={`b1-medium-small medium:b1-bold-medi large:sub-bold-large`}
        >
          {title}
        </h3>
        <div onClick={clickHandler}>
          {selected ? (
            <div className={buttonStyle}>
              <MinusButton />
            </div>
          ) : (
            <div className={buttonStyle}>
              <PlusButton />
            </div>
          )}
        </div>
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            className={`pt-[16px]`}
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
          >
            <div
              className={`b1-small medium:b1-medium-medi gray2 large:b2-large`}
            >
              {description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
