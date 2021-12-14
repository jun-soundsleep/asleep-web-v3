import React from 'react';
import styled from '@emotion/styled';

function WhiteDim() {
  return <DimContainer></DimContainer>;
}

export default WhiteDim;

const DimContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: 22px;
  background-color: var(--alpha-alpha-02);
  z-index: var(--commib-dim);
`;
