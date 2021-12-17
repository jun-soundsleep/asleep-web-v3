import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../../styles/device';

function ModalTitle({ item }) {
  return <Container>{item}</Container>;
}

export default ModalTitle;

const Container = styled.div`
  position: absolute;
  left: 32px;
  bottom: 44px;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: -0.96px;
  text-align: left;
  color: var(--text-in-dark-text-01);

  ${mp[1]} {
    left: 88px;
    bottom: 88px;
    font-size: 46px;
    line-height: 1.3;
    letter-spacing: 0.46px;
    text-align: left;
  }
`;
