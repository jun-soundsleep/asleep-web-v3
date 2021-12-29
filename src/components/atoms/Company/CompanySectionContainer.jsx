import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function CompanySectionContainer({ children, background, forwardedRef }) {
  return (
    <Container background={background} ref={forwardedRef}>
      {children}
    </Container>
  );
}

export default CompanySectionContainer;

const Container = styled.section`
  padding: 64px 20px;
  background-color: ${({ background }) => background && background};

  ${mp[0]} {
    padding: 140px 20px;
  }

  ${mp[1]} {
    padding: 200px 20px;
  }
`;
