import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function PeopleSoloBody({ item }) {
  return <Container dangerouslySetInnerHTML={{ __html: item }} />;
}

export default PeopleSoloBody;

const Container = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.72px;
  text-align: left;
  color: #898989;

  b {
    color: var(--text-in-light-text-10);
  }

  ${mp[0]} {
    max-width: 290px;
  }
  ${mp[1]} {
    max-width: 677px;
    font-size: 24px;
    line-height: 1.58;
    letter-spacing: -1.08px;
  }
`;
