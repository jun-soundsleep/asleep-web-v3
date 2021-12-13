import React from 'react';
import styled from '@emotion/styled';

function MainBigSubTitle({ item, margin }) {
  return (
    <MainBigSubTitleContainer margin={margin}>{item}</MainBigSubTitleContainer>
  );
}

export default MainBigSubTitle;

const MainBigSubTitleContainer = styled.h2`
  margin: ${({ margin }) => margin && margin}
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.72px;
  text-align: center;
  color: var(--text-in-light-text-01);
`;
