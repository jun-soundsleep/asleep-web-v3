import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

function AsleepLayout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default AsleepLayout;
