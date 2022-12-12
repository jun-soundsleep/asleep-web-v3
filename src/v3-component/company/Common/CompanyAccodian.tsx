import { FC, useEffect, useState } from 'react';
import { useToggle } from 'react-use';
import PlusButton from '/public/imagev3/icon/plus.svg';
import MinusButton from '/public/imagev3/icon/minus.svg';
import { AnimatePresence, motion } from 'framer-motion';
import useGetCurrentSize from '../../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../../styles/device';

type AccodianDataType = {
  title: string;
  description: string[];
  image: string;
};

type AccodianSectionType = {
  data: AccodianDataType[];
};

const CompanyAccodian: FC<AccodianSectionType> = ({ data }) => {
  const [currentTab, setCurrentTab] = useState<null | string>(null);
  const currentSize = useGetCurrentSize();
  const isLarge = currentSize === deviceType.large;

  const getItem = () => {
    return data.map((el, idx) => {
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
    });
  };

  const getLargeItem = () => {
    return (
      <div
        className={`large:flex large:gap-[251px] large:justify-between large:w-full`}
      >
        <div>
          {data.map((el, idx) => {
            return (
              idx < 3 && (
                <SubSection
                  idx={idx}
                  key={idx}
                  title={el.title}
                  description={el.description}
                  setCurrentTab={setCurrentTab}
                  currentTab={currentTab}
                />
              )
            );
          })}
        </div>
        <div>
          {data.map((el, idx) => {
            return (
              idx > 2 && (
                <SubSection
                  idx={idx}
                  key={idx}
                  title={el.title}
                  description={el.description}
                  setCurrentTab={setCurrentTab}
                  currentTab={currentTab}
                />
              )
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className={`mt-[32px] large:flex large:gap-[38px] large:items-start large:pb-[164px]`}
      >
        <div className={`w-full`}>{isLarge ? getLargeItem() : getItem()}</div>
      </div>
    </>
  );
};

export default CompanyAccodian;

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
        } h-[62px] border-b-[1px] border-[#626262] large:min-w-[512px] large:mt-[unset]`}
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
              {description.map((el, idx) => {
                return (
                  <div className={`flex gap-[5px]`}>
                    <div>{idx + 1}.</div>
                    <div key={idx}>{el}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
