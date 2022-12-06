import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './index.module.css';

import { WEB_ROUTING } from '../../../util/routing';

const MainTop = () => {
  return (
    <div
      className={`${styles.mainImageContainer} relative medium:h-[calc(100vh-var(--gnb-height-medi)-var(--cesAlert-height-medi))] large:h-[calc(100vh-var(--gnb-height---gnb-height-large)-var(--cesAlert-height-medi))]`}
    >
      <Image
        className={`absolute z-0`}
        src={'/imagev3/main/main_top.png'}
        alt={'main_image'}
        fill
        priority
        quality={100}
      />
      <div
        className={`absolute z-10 top-0 left-0 pt-[48px] px-[16px] title-small medium:px-[32px] medium:pt-[70px] large:px-[316px] large:pt-[179px]`}
      >
        <h1
          className={`text-white title-small medium:title-medi large:title-large`}
        >
          Enter the Bedroom Market with Sleeptrack API
        </h1>
        <h2
          className={`b1-small text-[#B6B6B6] mt-[16px] medium:b1-medium-medi large:sub-large large:mt-[24px]`}
        >
          Industry leading companies are using Sleeptrack API to understand
          their customers sleep and create innovative business use cases.
        </h2>
        <motion.button
          className={`mt-[32px] text-white b1-medium-small min-w-[132px] min-h-[47px] flex justify-center items-center bg-[#2E2E2E] bg-opacity-15 medium:b2-medium-medi medium:min-w-[156px] medium:min-h-[55px] large:b2-medium-large large:min-w-[182px] medium:min-h-[64px] medium:mt-[40px] large:mt-[56px]`}
          whileTap={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Link href={WEB_ROUTING.main}>Contact Us</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default MainTop;
