import React from 'react';
import styled from '@emotion/styled';

function MainSmallTitle({ margin, item, color }) {
  return (
    <MainSmallTitleContainer margin={margin} color={color}>
      {item}
    </MainSmallTitleContainer>
  );
}

export default MainSmallTitle;

const MainSmallTitleContainer = styled.h1`
  margin: ${({ margin }) => margin && margin};
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.96px;
  text-align: center;
  color: ${({ color }) =>
    color ? 'var(--text-in-dark-text-00)' : 'var(--text-in-light-text-10)'};
`;
