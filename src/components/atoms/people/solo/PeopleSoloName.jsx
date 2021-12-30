import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../../styles/device';

function PeopleSoloName({ item }) {
  return <Container dangerouslySetInnerHTML={{ __html: item }} />;
}

export default PeopleSoloName;

const Container = styled.p`
  word-break: break-word;
  font-size: 16px;
  font-weight: 400;
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
  }

  ${mp[1]} {
    font-size: 24px;
    line-height: 1.58;
    letter-spacing: 0.24px;
  }
`;
