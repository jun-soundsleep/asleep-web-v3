import React from 'react';
import GNB from './Navigation/GNB';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <GNB />
      <main
        className={`bg-[#121212] text-white pt-[calc(var(--gnb-height)+var(--cesAlert-height))] medium:pt-[calc(var(--gnb-height-medi)+var(--cesAlert-height-medi))] large:pt-[calc(var(--gnb-height-large)+var(--cesAlert-height-medi))]`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
