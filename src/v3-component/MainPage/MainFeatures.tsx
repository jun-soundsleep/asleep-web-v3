import PlusButton from '/public/imagev3/icon/plus.svg';
import MinusButton from '/public/imagev3/icon/minus.svg';
import { useToggle } from 'react-use';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useGetCurrentSize from '../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../styles/device';

const MAIN_FEATURE_DATA = [
  {
    title: 'Realtime Sleep Tracking',
    description:
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
    image: '/images/main/home_6_l_2x.jpg'
  },
  {
    title: 'Realtime Sleep Tracking2',
    description:
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
    image: '/images/main/home_5_l_2x.jpg'
  },
  {
    title: 'Realtime Sleep Tracking3',
    description:
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
    image: '/images/main/home_7_l_2x.jpg'
  },
  {
    title: 'Realtime Sleep Tracking4',
    description:
      'Provides sleep stage data in three real-time time interval options: 5 minutes, 10 minutes, and 20 minutes.',
    image: '/images/main/home_8_l_2x.jpg'
  }
];

const MainFeatures = () => {
  const [currentTab, setCurrentTab] = useState<null | string>(null);
  const currentSize = useGetCurrentSize();
  const isLarge = currentSize === deviceType.large;

  const largeImageIndex = MAIN_FEATURE_DATA.findIndex(el => {
    return el.title === currentTab;
  });

  return (
    <motion.section
      className={`mt-[131px] px-[16px] medium:px-[32px] large:px-[317px] large:flex large:gap-[96px] large:items-start large:pb-[164px]`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div>
        <div
          className={`gray2 b2-bold-small medium:b2-bold-medi large:b2-bold-large `}
        >
          Features
        </div>
        <h2
          className={`text-white h1-bold-small medium:h1-medium-medi large:h1-large`}
        >
          Sleeptrack API Features
        </h2>
        {MAIN_FEATURE_DATA.map((el, idx) => {
          return (
            <SubSection
              idx={idx}
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
              src={
                MAIN_FEATURE_DATA[largeImageIndex < 0 ? 0 : largeImageIndex]
                  .image
              }
              alt={'aasd'}
              fill
            />
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default MainFeatures;

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
