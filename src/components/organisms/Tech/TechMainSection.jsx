import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';
import TechTitle from '../../atoms/Tech/TechTitle';
import BigArrrowButton from '../../atoms/Common/BigArrrowButton';
import TechSubTitle from '../../mocules/Tech/TechSubTitle';
import TechSubTitleModal from '../../atoms/Tech/TechSubTitleModal';

function TechMainSection({ title, clickListener }) {
  return (
    <MobileTechMainSectionContainer>
      <TechTitle item={'asd'} />
      <BigArrrowButton />
      <TechSubTitle item={'asldkalsdkjalksjd'} />
    </MobileTechMainSectionContainer>
  );
}

export default TechMainSection;

const MobileTechMainSectionContainer = styled.section`
  height: 100vh;
  background-color: var(--backgorund-bg-05);
`;
