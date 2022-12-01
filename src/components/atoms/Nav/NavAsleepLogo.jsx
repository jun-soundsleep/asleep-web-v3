import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';
import Image from 'next/image';

function NavAsleepLogo() {
  const router = useRouter();

  return (
    <Link href={'/'} locale={router.locale}>
      <LogoContainer>
        <Image src={'/images/icon/asleep_logo.svg'} priority fill />
      </LogoContainer>
    </Link>
  );
}

export default NavAsleepLogo;

const LogoContainer = styled.div`
  width: 96px;
  height: 17px;
  position: relative;

  ${mp[0]} {
    width: 69px;
    height: 15.4px;
  }

  ${mp[1]} {
    width: 140px;
    height: 17px;
  }
`;
