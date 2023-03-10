import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { mp } from '../../../../styles/device';
function NavBarItem({ item, margin, on, href }) {
  return (
    <NavBarContainer margin={margin} on={on}>
      <Link href={href}>{item}</Link>
    </NavBarContainer>
  );
}

export default NavBarItem;

const NavBarContainer = styled.li`
  margin: ${({ margin }) => margin && margin};
  font-family: RedHatDisplay;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: 0.64px;
  text-align: left;
  color: ${({ on }) =>
    on ? ' var(--text-in-light-text-10)' : 'var(--text-in-dark-text-03)'};

  ${mp[0]} {
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8;
    letter-spacing: 0.4px;
    margin: 0 30.5px 0 0;
  }

  ${mp[1]} {
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.72px;
    margin: 0 68px 0 0;
  }
`;
