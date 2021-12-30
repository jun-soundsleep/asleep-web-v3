import React from 'react';
import styled from '@emotion/styled';

function NavMenuButton({ clickHandler, menuSelected }) {
  return (
    <Image
      src={
        menuSelected
          ? '/images/icon/components-icons-icons-close.svg'
          : '/images/icon/components-icons-icons-menu.svg'
      }
      alt={'navButton'}
      onClick={clickHandler}
    />
  );
}

export default NavMenuButton;

const Image = styled.img`
  cursor: pointer;
`;
