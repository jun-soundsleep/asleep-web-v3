import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function CompanyBodyTitle({ item }) {
  return <Container>{item}</Container>;
}

export default CompanyBodyTitle;

const Container = styled.h1`
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: -0.96px;
  text-align: center;
  color: var(--text-in-light-text-10);
  margin-bottom: 32px;

  ${mp[0]} {
    font-size: 30px;
    line-height: 1.27;
    letter-spacing: -1.2px;
    margin-bottom: 48px;
  }

  ${mp[1]} {
    font-size: 72px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: -2.88px;
    margin-bottom: 120px;
  }
`;
