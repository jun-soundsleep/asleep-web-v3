import React from 'react';
import styled from '@emotion/styled';

function MainCardTitle({ item, margin }) {
  return (
    <MainCardTitleContainer margin={margin}>{item}</MainCardTitleContainer>
  );
}

export default MainCardTitle;

const MainCardTitleContainer = styled.div`
  margin: ${({ margin }) => margin && margin};
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.16px;
  text-align: left;
  color: var(--text-in-light-text-10);
`;
