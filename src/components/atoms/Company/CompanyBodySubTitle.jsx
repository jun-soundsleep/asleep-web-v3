import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function CompanyBodySubTitle({ item }) {
  return <Container>{item}</Container>;
}

export default CompanyBodySubTitle;

const Container = styled.div`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.72px;
  text-align: center;
  color: var(--text-in-light-text-05);

  ${mp[1]} {
    font-size: 36px;
    line-height: 1.67;
    letter-spacing: -1.62px;
  }
`;
