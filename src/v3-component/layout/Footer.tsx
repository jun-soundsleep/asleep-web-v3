import Image from 'next/image';
import React from 'react';
import { useWindowSize } from 'react-use';
import useGetCurrentSize from '../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../styles/device';
import Link from 'next/link';
import { WEB_ROUTING } from '../../../util/routing';
import { FOOTER_SECTION_DATA } from '../../v3-data/footer/FOOTER_DATA';

const FooterSection = ({ data }) => {
  const commonStyle = `caption-small medium:caption-medi large:b3-large hover:underline`;

  return (
    <div className={`mr-[48px] text-[#626262] `}>
      <div className={`b2-bold-small medium:b2-bold-medi large:b2-bold-large`}>
        {data.title}
      </div>
      {data.sub.map((el, idx) => (
        <div
          key={el.id}
          className={`${idx === 0 ? 'mt-[24px]' : 'mt-[8px]'} ${commonStyle}`}
        >
          <Link href={el.to}>{el.title}</Link>
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  const currentSize = useGetCurrentSize();
  const isMedium = currentSize === deviceType.medium;

  return (
    <footer
      className={`
      bg-black 
      px-[16px]
      pt-[64px]
      pb-[20px]
      medium:px-[32px]
      medium:pt-[80px]
      medium:pb-[41px]
      large:px-[316px]
      large:pb-[155px]
    `}
    >
      <div className={`large:flex large:w-full large:justify-between`}>
        <div>
          <Image
            src={'/imagev3/logo/Branding_logo.svg'}
            alt={'branding_logo'}
            width={isMedium ? 80 : 100}
            height={isMedium ? 27 : 35}
          />
          <p
            className={`text-[#B6B6B6] pt-[16px] b1-small medium:b2-small medium:mt-[24px] medium:max-w-[433px] large:b2-large large:mt-[16px] medium:max-w-[518px]`}
          >
            ASLEEP, everyone in my team works towards the samegoal. This enabled
            to ship new — ideas and feel more capable. Podcasting operational
          </p>
        </div>
        <div className={`large:items-start large:flex`}>
          <div className={`mt-[56px] flex medium:mt-[72px] large:mt-[unset]`}>
            <FooterSection data={FOOTER_SECTION_DATA.product} />
            <FooterSection data={FOOTER_SECTION_DATA.asleep} />
          </div>
        </div>
      </div>
      <div className={`mt-[46px] flex large:mt-[72px]`}>
        <a
          href="https://instagram.com/slee.ai?igshid=YmMyMTA2M2Y="
          target={'_blank'}
          rel="noreferrer"
        >
          <Image
            src={'/images/icon/exit.svg'}
            alt={'instagram'}
            width={isMedium ? 28 : 24}
            height={isMedium ? 28 : 24}
          />
        </a>
        <a
          href="https://www.linkedin.com/company/sleepfy/"
          target={'_blank'}
          rel="noreferrer"
        >
          <Image
            src={'/images/icon/exit.svg'}
            alt={'instagram'}
            width={isMedium ? 28 : 24}
            height={isMedium ? 28 : 24}
          />
        </a>
      </div>
      <a
        className={`caption-small underline mt-[16px] text-[#626262] medium:mt-[28px] medium:caption-medi inline-block large:b3-large`}
        href="https://app.catchsecu.com/document/P/7e372ba0ed2a126"
        target={'_blank'}
        rel="noreferrer"
      >
        Privacy & Policy
      </a>
      <address
        className={`caption-small  text mt-[16px] text-[#626262] medium:mt-[12px] medium:caption-medi large:b3-large`}
      >
        420, Teheran-ro, Gangnam-gu, Seoul, Republic of Korea
      </address>
      <hr
        className={`border border-[#212121] border-solid mt-[16px] medium:mt-[56px] medium:mt-[70px]`}
      />
      <div
        className={`caption-small  text mt-[16px] text-[#2E2E2E] medium:caption-medi`}
      >
        Copyright © 2021 ASLEEP All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
