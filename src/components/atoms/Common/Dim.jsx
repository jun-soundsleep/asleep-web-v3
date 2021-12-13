import React from 'react';
import styled from '@emotion/styled';

function Dim() {
  return <DimContainer></DimContainer>;
}

export default Dim;

const DimContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: var(--commib-dim);
  background-color: var(--dim-dim-03);
`;
