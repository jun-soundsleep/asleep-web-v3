import React, { useState } from 'react';
import styled from '@emotion/styled';
import NavAsleepLogo from '../../atoms/Nav/NavAsleepLogo';
import NavMenuButton from '../../atoms/Nav/NavMenuButton';
import NavBarItem from '../../atoms/Nav/NavBarItem';
import NavLanguageChangeButton from '../../atoms/Nav/NavLanguageChangeButton';
import { MXFlexCenteringSB } from '../../mixin/MXFlex';

function Nav() {
  const [menuSelected, setMenuSelected] = useState(false);

  console.log(menuSelected);
  const mobileMenuClickHandler = () => {
    setMenuSelected(!menuSelected);
  };

  return (
    <LogoContainer menuSelected={menuSelected}>
      <Temp>
        <NavAsleepLogo />
        <NavMenuButton
          menuSelected={menuSelected}
          clickHandler={mobileMenuClickHandler}
        />
      </Temp>
      <DetailItem menuSelected={menuSelected}>
        <ul>
          <NavBarItem
            item={'Company'}
            margin={'44px 0px 28px 0px'}
            href="company"
          />
          <NavBarItem
            margin={'0px 0px 28px 0px'}
            item={'Technology'}
            href="technology"
          />
          <NavBarItem
            margin={'0px 0px 28px 0px'}
            item={'Business'}
            href="business"
          />
          <NavBarItem
            margin={'0px 0px 28px 0px'}
            item={'People'}
            href="people"
          />
          <NavBarItem margin={'0px 0px 28px 0px'} item={'News'} href="news" />
          <NavLanguageChangeButton />
        </ul>
      </DetailItem>
    </LogoContainer>
  );
}

export default Nav;

const LogoContainer = styled.nav`
  position: fixed;
  height: 58px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: var(--text-in-dark-text-00);
`;

const Temp = styled(MXFlexCenteringSB)`
  height: 58px;
  padding: 0px 20px 0px 20px;
`;

const DetailItem = styled.div`
  position: absolute;
  top: 58px;
  right: 0px;
  left: 0px;
  padding: 0px 0px 0px 47px;
  z-index: 10;
  height: ${({ menuSelected }) => (menuSelected ? '420px' : '0px')};
  transition: background 0.4s ease-in 0s;
  background-color: var(--text-in-dark-text-00);
  // 이거 왜 써야 하는지 생각해보기
  overflow: hidden;
`;
