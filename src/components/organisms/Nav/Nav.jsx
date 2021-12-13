import React, { useState } from 'react';
import styled from '@emotion/styled';
import NavAsleepLogo from '../../atoms/Nav/NavAsleepLogo';
import NavMenuButton from '../../atoms/Nav/NavMenuButton';
import NavBarItem from '../../atoms/Nav/NavBarItem';
import NavLanguageChangeButton from '../../atoms/Nav/NavLanguageChangeButton';
import { useMediaQuery } from 'react-responsive';
import { MXFlexCenteringSB } from '../../mixin/MXFlex';
import { mp } from '../../../../styles/device';

function Nav() {
  const [menuSelected, setMenuSelected] = useState(false);

  console.log(menuSelected);
  const mobileMenuClickHandler = () => {
    setMenuSelected(!menuSelected);
  };
  const largeView = useMediaQuery({ query: '(min-width: 1920px)' });
  console.warn(largeView);

  return (
    <>
      <LogoContainer menuSelected={menuSelected}>
        <NavLogContainer>
          <NavAsleepLogo />
          <NavMenuButton
            menuSelected={menuSelected}
            clickHandler={mobileMenuClickHandler}
          />
        </NavLogContainer>
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
      <OverTabletNavContainer>
        <OverTabletItemContainer>
          <div>
            <NavAsleepLogo />
          </div>
          <div>
            <ItemListContainer>
              <NavBarItem
                item={'Company'}
                href="company"
                margin={largeView ? '0px 68px 0px 0px' : '0px 30.5px 0px 0px'}
              />
              <NavBarItem
                item={'Technology'}
                href="technology"
                margin={largeView ? '0px 68px 0px 0px' : '0px 30.5px 0px 0px'}
              />
              <NavBarItem
                item={'Business'}
                href="business"
                margin={largeView ? '0px 68px 0px 0px' : '0px 30.5px 0px 0px'}
              />
              <NavBarItem
                item={'People'}
                href="people"
                margin={largeView ? '0px 68px 0px 0px' : '0px 30.5px 0px 0px'}
              />
              <NavBarItem
                item={'News'}
                href="news"
                margin={largeView ? '0px 68px 0px 0px' : '0px 30.5px 0px 0px'}
              />
              <NavLanguageChangeButton margin="0ox" />
            </ItemListContainer>
          </div>
        </OverTabletItemContainer>
      </OverTabletNavContainer>
    </>
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

  ${mp[0]} {
    display: none;
  }
`;

const NavLogContainer = styled(MXFlexCenteringSB)`
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
  overflow: hidden;
`;

const OverTabletNavContainer = styled.nav`
  display: none;

  ${mp[0]} {
    display: block;
    height: 56px;
  }
`;

const OverTabletItemContainer = styled(MXFlexCenteringSB)`
  height: 100%;
  padding: 0px 110px 0px 100px;
  margin: 0 auto;

  //제니 한테 질문
  max-width: 1140px;

  ${mp[1]} {
    max-width: 1500px;
  }
`;

const ItemListContainer = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
