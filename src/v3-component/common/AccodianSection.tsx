import React, { FC, useEffect, useState } from 'react';
import useGetCurrentSize from '../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../styles/device';
import WithViewPortOpacity from '../Animation/WithViewPortOpacity';
import Image from 'next/image';
import { useToggle } from 'react-use';
import { AnimatePresence, motion } from 'framer-motion';
import PlusButton from '/public/imagev3/icon/plus.svg';
import MinusButton from '/public/imagev3/icon/minus.svg';

type AccodianDataType = {
  title: string;
  description: string;
  image: string;
};

type AccodianSectionType = {
  data: AccodianDataType[];
  head: string;
  subHead: string;
};

const AccodianSection: FC<AccodianSectionType> = ({ data, head, subHead }) => {
  const [currentTab, setCurrentTab] = useState<null | string>(null);
  const currentSize = useGetCurrentSize();
  const isLarge = currentSize === deviceType.large;

  const largeImageIndex = data.findIndex(el => {
    return el.title === currentTab;
  });

  return (
    <WithViewPortOpacity
      styleClass={`mt-[131px] px-[16px] medium:px-[32px] large:px-[317px] large:flex large:gap-[96px] large:items-start large:pb-[164px]`}
    >
      <>
        <div>
          <div
            className={`gray2 b2-bold-small medium:b2-bold-medi large:b2-bold-large`}
          >
            {head}
          </div>
          <h2
            className={`text-white h1-bold-small medium:h1-medium-medi large:h1-large`}
          >
            {subHead}
          </h2>
          {data.map((el, idx) => {
            return (
              <SubSection
                idx={idx}
                key={idx}
                title={el.title}
                image={el.image}
                description={el.description}
                setCurrentTab={setCurrentTab}
                currentTab={currentTab}
              />
            );
          })}
        </div>
        {isLarge && (
          <div className={`relative w-full h-[711px]`}>
            <div className={`relative w-full h-full `}>
              <Image
                src={data[largeImageIndex < 0 ? 0 : largeImageIndex].image}
                alt={'aasd'}
                fill
                quality={100}
              />
            </div>
          </div>
        )}
      </>
    </WithViewPortOpacity>
  );
};

export default AccodianSection;

const SubSection = ({
  idx,
  title,
  image,
  description,
  currentTab,
  setCurrentTab
}) => {
  const [selected, setSelected] = useToggle(false);
  const currentSize = useGetCurrentSize();
  const isLarge = currentSize === deviceType.large;

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
            {!isLarge && (
              <div className={`relative w-full h-[200px] mt-[16px]`}>
                <Image
                  src={image}
                  alt={'aasd'}
                  fill
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
