import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function MainSectionContainer({ children, background, forwardedRef }) {
  return (
    <SectionContainer background={background} ref={forwardedRef}>
      {children}
    </SectionContainer>
  );
}

export default MainSectionContainer;

const SectionContainer = styled.section`
  padding: 60px 0px;
  background-color: ${({ background }) => background && background};

  ${mp[0]} {
    padding: 120px 0px;
  }
  ${mp[1]} {
    padding: 240px 0px;
  }
`;
