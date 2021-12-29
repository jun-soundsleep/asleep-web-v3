import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Head from 'next/head';
import Link from 'next/link';
import { mp } from '../../../../styles/device';

function NavAsleepLogo() {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="preload" href={'/images/icon/asleep_logo.svg'} as="image" />
      </Head>
      <Link href={'/'} locale={router.locale}>
        <a>
          <LogoContainer>
            <AsleepLogo />
          </LogoContainer>
        </a>
      </Link>
    </>
  );
}

export default NavAsleepLogo;

const AsleepLogo = styled.div`
  background: url('/images/icon/asleep_logo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  height: 100%;
  width: 100%;
`;

const LogoContainer = styled.div`
  width: 96px;
  height: 17px;

  ${mp[0]} {
    width: 69px;
    height: 15.4px;
  }

  ${mp[1]} {
    width: 140px;
    height: 17px;
  }
`;
