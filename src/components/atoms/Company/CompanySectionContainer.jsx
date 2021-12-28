import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function CompanySectionContainer({ children }) {
  return <Container>{children}</Container>;
}

export default CompanySectionContainer;

const Container = styled.section`
  margin: 64px 0 127px;
  padding: 64px 20px;
  background-color: var(--backgorund-bg-01);

  ${mp[0]} {
    padding: 140px 20px;
  }

  ${mp[1]} {
    padding: 280px 20px;
  }
`;
