import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../.././../styles/device';

function NewsDetailPageImage({ src }) {
  return <Container src={src} />;
}

export default NewsDetailPageImage;

const Container = styled.div`
  // width 100% 안해도 되는지 check
  width: 100%;
  height: 0;
  padding-bottom: 81.25%;
  margin: 64px 20px;
  background: url(${({ src }) => src && src});
  background-size: cover;
  background-position: 50%;
  border-radius: 18px;

  ${mp[0]} {
    max-width: 477px;
    margin: 44px auto;
  }

  ${mp[1]} {
    max-width: 1081px;
    margin: 160px auto 0 327px;
  }
`;
