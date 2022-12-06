import { motion } from 'framer-motion';
import styles from './index.module.css';
import SpeakIcon from '/public/imagev3/main/speaker.svg';
import BottomContactButton from '../layout/BottomContactButton';
import useGetCurrentSize from '../../../hooks/useGetCurrentSize';
import InfiniteLooper from '../util/InfinityLooper';

const DATA = [
  {
    title: 'Speaker',
    icon: ''
  },
  {
    title: 'Speaker',
    icon: ''
  },
  {
    title: 'Speaker',
    icon: ''
  },
  {
    title: 'Speaker',
    icon: ''
  },
  {
    title: 'Speaker',
    icon: ''
  },
  {
    title: 'Speaker',
    icon: ''
  },
  {
    title: 'Speaker',
    icon: ''
  },
  {
    title: 'Speaker',
    icon: ''
  },
  {
    title: 'Speaker',
    icon: ''
  },
  {
    title: 'Speaker',
    icon: ''
  },
  {
    title: 'Speaker',
    icon: ''
  },
  {
    title: 'Speaker',
    icon: ''
  },
  {
    title: 'Speaker',
    icon: ''
  },
  {
    title: 'Speaker',
    icon: ''
  },
  {
    title: 'Speaker',
    icon: ''
  }
];

const MainExtensions = () => {
  const currentSize = useGetCurrentSize();

  return (
    <>
      <motion.section
        className={`mt-[131px] px-[16px] large:mt-[300px] large:px-[317px] large:flex large:items-center large:flex-col large:px-[unset]`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div
          className={`gray2 b2-bold-small medium:b2-bold-medi medium:text-center large:b2-bold-large `}
        >
          Extensions
        </div>
        <h2
          className={`text-white h1-bold-small medium:h1-medium-medi medium:text-center large:h1-large`}
        >
          {'Present the New\nSleep Data-based Lifestyle'}
        </h2>
        <div
          className={`mt-[32px] flex gap-[12px] w-full overflow-scroll medium:mt-[56px]`}
        >
          <InfiniteLooper
            speed={10}
            direction={'right'}
          >
            {DATA.map((el, idx) => {
              return (
                <div
                  className={`flex flex-col items-center `}
                  key={idx}
                >
                  <div
                    className={`w-[124px] h-[124px] flex items-center justify-center ${styles.mainExtensionBoxGradient} medium:w-[183px] medium:h-[183px] large:w-[224px] large:h-[224px] `}
                  >
                    <div
                      className={`w-[34px] h-[42px] large:w-[50px] large:h-[91px] flex items-center justify-center`}
                    >
                      <SpeakIcon />
                    </div>
                  </div>
                  <div
                    className={`mt-[8px] gray1 b1-small medium:caption-medi`}
                  >
                    {el.title}
                  </div>
                </div>
              );
            })}
          </InfiniteLooper>
        </div>
      </motion.section>
      <BottomContactButton />
    </>
  );
};

export default MainExtensions;
