import React, { useState } from 'react';
import Head from 'next/head';

function NavMenuButton({ clickHandler, menuSelected }) {
  // const [selected, setSelected] = useState(false);

  return (
    <>
      <Head>
        <link
          rel="preload"
          href={'/images/icon/components-icons-icons-menu.svg'}
          as="image"
        />
      </Head>
      <img
        src={
          menuSelected
            ? '/images/icon/components-icons-icons-close.svg'
            : '/images/icon/components-icons-icons-menu.svg'
        }
        alt={'navButton'}
        onClick={clickHandler}
      />
    </>
  );
}

export default NavMenuButton;
