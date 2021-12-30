import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function AdvisorsTitle({ item }) {
  return <Container>{item}</Container>;
}

export default AdvisorsTitle;

const Container = styled.div`
  margin-top: 64px;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: 0.16px;
  text-align: center;
  color: var(--primary-primary-in-light);

  ${mp[0]} {
    margin-top: unset;
    text-align: left;
  }
  ${mp[1]} {
    font-size: 28px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.64;
    letter-spacing: -1.26px;
  }
`;
