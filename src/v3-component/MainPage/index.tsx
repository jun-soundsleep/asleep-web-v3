import React from 'react';
import Image from 'next/image';
import MainLayout from '../layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { WEB_ROUTING } from '../../../util/routing';

const MainPage = () => {
  return (
    <MainLayout>
      <div className={`h-screen relative`}>
        <Image
          className={`absolute z-0`}
          src={'/imagev3/main/main_top.png'}
          alt={'main_image'}
          fill
          priority
          quality={100}
        />
        <div
          className={`absolute z-10 top-0 left-0 pt-[48px] px-[16px] title-small`}
        >
          <h1 className={`text-white`}>
            Enter the Bedroom Market with Sleeptrack API
          </h1>
          <h2 className={`b1-small text-[#B6B6B6] mt-[16px]`}>
            Industry leading companies are using Sleeptrack API to understand
            their customers' sleep and create innovative business use cases.
          </h2>
          <motion.button
            className={`mt-[32px] text-white b1-medium-small min-w-[132px] min-h-[47px] flex justify-center items-center bg-[#2E2E2E] bg-opacity-15`}
            whileTap={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link href={WEB_ROUTING.main}>Contact Us</Link>
          </motion.button>
        </div>
      </div>
    </MainLayout>
  );
};

export default MainPage;
