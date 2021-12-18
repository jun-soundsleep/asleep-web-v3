import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function CompanySubtitle({ item }) {
  return <Container>{item}</Container>;
}

export default CompanySubtitle;

const Container = styled.h2`
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: -0.72px;
  text-align: center;
  color: var(--text-in-light-text-05);

  ${mp[1]} {
    font-size: 36px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: -1.62px;
  }
`;
