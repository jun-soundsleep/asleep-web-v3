import React from 'react';
import styled from '@emotion/styled';

function MainBigTitle({ item, margin }) {
  return <MainBigTitleContainer margin={margin}>{item}</MainBigTitleContainer>;
}

export default MainBigTitle;

const MainBigTitleContainer = styled.h1`
  margin: ${({ margin }) => margin && margin};
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -1.6px;
  text-align: center;
  color: var(--text-in-dark-text-00);
  z-index: 1000;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;
