import React from 'react';
import GNB from './Navigation/GNB';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <GNB />
      <main className={`bg-[#121212] text-white`}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
