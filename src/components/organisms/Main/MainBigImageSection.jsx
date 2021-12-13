import React from 'react';
import styled from '@emotion/styled';
import Dim from '../../atoms/Common/Dim';
import MainBigImage from '../../atoms/Main/MainBigImage';
import MainBigTitle from '../../atoms/Main/MainBigTitle';
import MainFirstTitles from '../../mocules/Main/MainFirstTitles';

function MainBigImageSection(props) {
  return (
    <MainBigSectionContainer>
      <MainBigImage />
      <Dim />
      <MainFirstTitles />
    </MainBigSectionContainer>
  );
}

export default MainBigImageSection;

const MainBigSectionContainer = styled.section`
  height: 100vh;
  position: relative;
`;
