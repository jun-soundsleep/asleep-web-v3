import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function MainBigTitle({ item, margin }) {
  return <MainBigTitleContainer margin={margin}>{item}</MainBigTitleContainer>;
}

export default MainBigTitle;

const MainBigTitleContainer = styled.h1`
  /* min-width: 320px; */
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
  word-break: keep-all;
  white-space: pre-wrap;

  ${mp[0]} {
    font-size: 32px;
    line-height: 1.31;
    letter-spacing: -1.28px;
  }

  ${mp[1]} {
    font-size: 72px;
    line-height: 1.28;
    letter-spacing: -2.88px;
  }
`;
