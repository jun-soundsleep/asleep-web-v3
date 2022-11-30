import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function NavAsleepLogo() {
  const router = useRouter();

  return <>
    <Link href={'/'} locale={router.locale}>

      <LogoContainer>
        <AsleepLogo />
      </LogoContainer>

    </Link>
  </>;
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
