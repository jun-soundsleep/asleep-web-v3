import React from 'react';
import styled from '@emotion/styled';

function TempC({ forwardedRef }) {
  return <Container ref={forwardedRef} />;
}

const Container = styled.div`
  height: 50vh;
  background-color: blue;
`;

export default TempC;
