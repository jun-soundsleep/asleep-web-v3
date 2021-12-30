import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function MainBigSubTitle({ item, margin }) {
  return (
    <MainBigSubTitleContainer margin={margin}>{item}</MainBigSubTitleContainer>
  );
}

export default MainBigSubTitle;

const MainBigSubTitleContainer = styled.h2`
  max-width: 270px;

  margin: ${({ margin }) => (margin ? margin : '0 auto')};
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.72px;
  text-align: center;
  word-break: keep-all;
  white-space: pre-wrap;
  color: var(--text-in-light-text-01);

  ${mp[0]} {
    max-width: unset;
    font-size: 16px;
    line-height: 1.56;
    letter-spacing: -0.72px;
  }

  ${mp[1]} {
    font-size: 30px;
    line-height: 1.8;
    letter-spacing: -1.62px;
  }
`;
