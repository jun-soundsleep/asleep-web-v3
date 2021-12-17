import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../../styles/device';

function ModalBody({ item }) {
  return <Container dangerouslySetInnerHTML={{ __html: item }} />;
}

export default ModalBody;

const Container = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.63px;
  text-align: left;
  color: var(--text-in-dark-text-03);

  & > b {
    color: var(--text-in-light-text-10);
  }

  ${mp[1]} {
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: 0.24px;
  }
`;
