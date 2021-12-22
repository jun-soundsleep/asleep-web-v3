import styled from '@emotion/styled';
import React from 'react';
import { mp } from '../../../../styles/device';

function AdvisorImage({ src }) {
  return <Image src={src} />;
}

export default AdvisorImage;

const Image = styled.div`
  width: 152px;
  height: 222px;
  background: url(${({ src }) => src && src});
  background-size: cover;
  background-position: center;
  border-radius: 20px;

  ${mp[0]} {
    width: 154px;
    height: 193px;
  }
  ${mp[1]} {
    width: 371px;
    height: 442px;
  }
`;
