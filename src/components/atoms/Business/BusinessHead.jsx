import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function BusinessHead({ margin, item }) {
  return <BusinessHeadContainer margin={margin}>{item}</BusinessHeadContainer>;
}

export default BusinessHead;

const BusinessHeadContainer = styled.h1`
  margin: ${({ margin }) => margin && margin};
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: -1.6px;
  text-align: center;
  color: var(--text-in-light-text-10);

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
