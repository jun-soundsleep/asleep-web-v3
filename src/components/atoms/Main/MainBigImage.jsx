import React from 'react';
import styled from '@emotion/styled';

function MainBigImage({ margin }) {
  return <ImageContainer />;
}

export default MainBigImage;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url('images/main/home_1_s.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
`;
