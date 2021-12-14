import React from 'react';
import styled from '@emotion/styled';
import { MXFlexCenteringFS, MXFlexCenteringSB } from '../../mixin/MXFlex';
import { mp } from '../../../../styles/device';

function ImageContainer({ src, srcM, srcL }) {
  return (
    <MoreButtonContainer
      src={src}
      srcM={srcM}
      srcL={srcL}
    ></MoreButtonContainer>
  );
}

export default ImageContainer;

const MoreButtonContainer = styled(MXFlexCenteringSB)`
  /* width: 100%; */
  height: 0;
  background: url(${({ src }) => src && src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  /* padding-top : calc (300 / 1000 * 100 %); / * calc (이미지 높이 ÷ 이미지 가로 × 100 %) * /
	background : url ("image-url") center center / cover no-repeat; */
}

  ${mp[0]} {
    background: url(${({ srcM }) => srcM && srcM});;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  ${mp[1]} {
    background: url(${({ srcL }) => srcL && srcL});;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }
`;
