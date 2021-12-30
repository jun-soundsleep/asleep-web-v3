import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function FullImageContainer({ src, srcM, srcL, ratio, ratioM, ratioL }) {
  return (
    <FullImage
      src={src}
      srcM={srcM}
      srcL={srcL}
      ratio={ratio}
      ratioM={ratioM}
      ratioL={ratioL}
    />
  );
}

export default FullImageContainer;

const FullImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ src }) => src && src}) 50% / cover no-repeat;
  padding-top: ${({ ratio }) => (ratio ? ratio : 46)}%;

  ${mp[0]} {
    background: url(${({ srcM }) => srcM && srcM}) 50% / cover no-repeat;
    padding-top: ${({ ratioM }) => (ratioM ? ratioM : 46)}%;
  }

  ${mp[1]} {
    background: url(${({ srcL }) => srcL && srcL}) 50% / cover no-repeat;
    padding-top: ${({ ratioL }) => (ratioL ? ratioL : 46)}%;
  }
`;
