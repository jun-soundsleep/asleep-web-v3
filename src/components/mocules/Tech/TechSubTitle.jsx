import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';
import { useRouter } from 'next/router';
import TechSubText from './TechSubText';

function TechSubTitle({ src, srcM, srcL, ratio, ratioM, ratioL }) {
  return (
    <TechSubTitleContainer src={src} srcM={srcM} srcL={srcL}>
      <TechSubText />
    </TechSubTitleContainer>
  );
}

export default TechSubTitle;

const TechSubTitleContainer = styled.div`
  /* background: url(${({ src }) => src && src}) bottom / cover no-repeat;
  padding-top: ${({ ratio }) => (ratio ? ratio : 46)}%;

  ${mp[0]} {
    background: url(${({ srcM }) => srcM && srcM}) 50% / cover no-repeat;
    padding-top: ${({ ratioM }) => (ratioM ? ratioM : 46)}%;
  }

  ${mp[1]} {
    background: url(${({ srcL }) => srcL && srcL}) 50% / cover no-repeat;
    padding-top: ${({ ratioL }) => (ratioL ? ratioL : 46)}%;
  } */
`;
