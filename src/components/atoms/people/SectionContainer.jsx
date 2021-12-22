import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function SectionContainer({ children }) {
  return <Section>{children}</Section>;
}

export default SectionContainer;

const Section = styled.section`
  padding-bottom: 128px;
  ${mp[1]} {
    padding-bottom: 139px;
  }

  ${mp[1]} {
    padding-bottom: 280px;
  }
`;
