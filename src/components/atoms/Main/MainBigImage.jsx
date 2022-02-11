import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function MainBigImage() {
  return <ImageContainer />;
}

export default MainBigImage;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url('/images/main/home_s.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;

  ${mp[0]} {
    background: url('/images/main/home_m.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  ${mp[1]} {
    background: url('/images/main/home_l.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }
`;
