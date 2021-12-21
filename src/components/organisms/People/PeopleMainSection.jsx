import React from 'react';
import styled from '@emotion/styled';
import Dim from '../../atoms/Common/Dim';
import MainFirstTitles from '../../mocules/Main/MainFirstTitles';
import PeopleBigImage from '../../atoms/people/PeopleBigImage';
import PeopleMainTitle from '../../mocules/people/PeopleMainTitle';

function PeopleMainSection({ clickListener }) {
  return (
    <BigSectionContainer>
      <PeopleBigImage />
      <Dim dimColor={'var(--dim-dim-04)'} />
      <PeopleMainTitle clickListener={clickListener} />
    </BigSectionContainer>
  );
}

export default PeopleMainSection;

const BigSectionContainer = styled.section`
  height: 100vh;
  position: relative;
`;
