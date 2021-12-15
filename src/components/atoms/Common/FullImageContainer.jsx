import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function FullImageContainer({ src, srcM, srcL, ratio }) {
  return (
    <FullImage src={src} srcM={srcM} srcL={srcL} ratio={ratio}></FullImage>
  );
}

export default FullImageContainer;

const FullImage = styled.div`
  width: 100%;
  height: 100%;
	background : url(${({ src }) => src && src}) 50% / cover no-repeat; 
  padding-top: 77%;
}

  ${mp[0]} {
	background : url(${({ srcM }) => srcM && srcM}) 50% / cover no-repeat; 
  }

  ${mp[1]} {
    background : url(${({ srcL }) => srcL && srcL}) 50% / cover no-repeat; 
  }
`;
