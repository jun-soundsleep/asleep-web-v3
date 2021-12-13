import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

function NavBarItem({ item, margin, on, href }) {
  return (
    <NavBarContainer margin={margin} on={on}>
      <Link href={href}>
        <a>{item}</a>
      </Link>
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
  color: ${({ on }) => (on ? ' var(--black)' : 'var(--brown-grey-three)')};
`;
