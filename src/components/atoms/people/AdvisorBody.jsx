import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function AdvisorBody({ item }) {
  return <Container dangerouslySetInnerHTML={{ __html: item }} />;
}

export default AdvisorBody;

const Container = styled.div`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: -0.52px;
  text-align: left;
  color: var(--text-in-light-text-05);

  ${mp[0]} {
  }
  ${mp[1]} {
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: -1.08px;
  }
`;
