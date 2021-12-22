import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function PeopleSoloImage({ src }) {
  return <Container src={src} />;
  // return <img src={src} alt="" objectfit={'cover'} />;
}

export default PeopleSoloImage;

const Container = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%;
  background: url(${({ src }) => src && src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${mp[0]} {
  }
  ${mp[1]} {
  }
`;
