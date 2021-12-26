import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../..//../../styles/device';

function AdvisorName({ item }) {
  return <Container dangerouslySetInnerHTML={{ __html: item }} />;
}

export default AdvisorName;

const Container = styled.div`
  margin-top: 13px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.56px;
  text-align: left;
  color: var(--text-in-dark-text-03);

  b {
    font-weight: 800;
    line-height: 1.86;
    letter-spacing: 0.14px;
    color: var(--text-in-light-text-10);
  }

  ${mp[0]} {
    font-size: 13px;
    line-height: 1.62;
    letter-spacing: -0.59px;
  }
  ${mp[1]} {
    font-size: 24px;
    line-height: 1.58;
    letter-spacing: -1.08px;
  }
`;
