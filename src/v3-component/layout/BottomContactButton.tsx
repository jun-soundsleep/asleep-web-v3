import React from 'react';
import styles from '../MainPage/index.module.css';
import { motion } from 'framer-motion';

const BottomContactButton = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center pb-[48px] w-full mt-[173px] ${styles.mainExtensionBottomGradient} medium:pb-[63px] large:pb-[140px]`}
    >
      <div className={`flex flex-col items-center justify-center `}>
        <h1 className={`h1-small text-center medium:h1-medi large:h1-large`}>
          {'Build With\nSleeptack API'}
        </h1>
        <motion.button
          className={`bg-[#3C41EA] px-[33px] py-[10px] mt-[24px] b1-medium-small medium:b2-medium-medi medium:px-[37px] medium:py-[12px] medium:mt-[48px] large:sub-large`}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          whileTap={{ scale: 1.2 }}
        >
          Contact Us
        </motion.button>
      </div>
    </div>
  );
};

export default BottomContactButton;
