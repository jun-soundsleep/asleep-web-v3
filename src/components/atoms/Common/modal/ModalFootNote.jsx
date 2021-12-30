import React from 'react';
import styled from '@emotion/styled';

function ModalFootNote({ item }) {
  return <Container>{item}</Container>;
}

export default ModalFootNote;

const Container = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.63px;
  text-align: left;
  color: var(--text-in-light-text-02);
`;
