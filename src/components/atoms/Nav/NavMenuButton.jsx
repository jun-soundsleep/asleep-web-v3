import React from 'react';

function NavMenuButton({ clickHandler, menuSelected }) {
  return (
    <img
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
