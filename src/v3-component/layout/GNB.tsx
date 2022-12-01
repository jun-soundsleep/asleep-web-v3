import Image from 'next/image';
import React from 'react';
import useGetCurrentSize from '../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../styles/device';
import Link from 'next/link';
import { WEB_ROUTING } from '../../../util/routing';

const GNB = () => {
  const currentSize = useGetCurrentSize();
  const isMedium = currentSize === deviceType.medium;
  const isLarge = currentSize === deviceType.large;

  return (
    <nav
      className={`h-[46px] bg-black flex px-[16px] items-center justify-between medium:px-[36px] medium:py-[25px] medium:h-[63px] large:h-[90px]`}
    >
      <Link href={WEB_ROUTING.main}>
        <Image
          className={'block'}
          src={'/imagev3/logo/Branding_logo.svg'}
          alt={'branding_logo'}
          width={isLarge ? 104 : isMedium ? 83 : 60}
          height={isLarge ? 35 : isMedium ? 27 : 20}
        />
      </Link>
      <div>
        <button className={`block large:hidden`}>
          <Image
            className={'inline-block'}
            src={'/images/icon/components-icons-icons-menu.svg'}
            alt={'menu'}
            width={isMedium ? 32 : 26}
            height={isMedium ? 32 : 26}
          />
        </button>
        <LargeMenu />
        <ul></ul>
      </div>
    </nav>
  );
};

const LargeMenu = () => {
  return (
    <ul className={`hidden large:flex text-white gap-[80px] items-center`}>
      <li>Sleeptrack API</li>
      <li>Sleeptrack API</li>
      <li>Sleeptrack API</li>
      <li>Sleeptrack API</li>
      <button className={`bg-[#2226c1] py-[13px] px-[24px] b3-bold-large`}>
        Contact Us
      </button>
    </ul>
  );
};

export default GNB;
