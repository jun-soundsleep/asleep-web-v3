import React from 'react';
import styled from '@emotion/styled';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

function AsleepLayout({ children }) {
  return (
    <>
      <Nav />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  );
}

export default AsleepLayout;

const MainWrapper = styled.main`
  margin-top: 58px;
`;
