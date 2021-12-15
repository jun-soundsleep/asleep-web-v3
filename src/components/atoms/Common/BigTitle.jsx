import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function BigTitle({ item, margin, color }) {
  return (
    <BigTitleContainer margin={margin} color={color}>
      {item}
    </BigTitleContainer>
  );
}

export default BigTitle;

const BigTitleContainer = styled.h1`
  margin: ${({ margin }) => margin && margin};
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -1.6px;
  text-align: center;
  color: ${({ color }) => (color ? color : 'var(--text-in-dark-text-00)')};
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
