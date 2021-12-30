import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

// size px 붙이는거 조심
function IconImage({ src, srcM, srcL, sw, sh, mw, mh, lw, lh }) {
  return (
    <IconImageContainer
      src={src}
      srcM={srcM}
      srcL={srcL}
      sw={sw}
      sh={sh}
      mw={mw}
      mh={mh}
      lw={lw}
      lh={lh}
    ></IconImageContainer>
  );
}

export default IconImage;

const IconImageContainer = styled.div`
  width: ${({ sw }) => sw && sw};
  height: ${({ sh }) => sh && sh};
  background: url(${({ src }) => src && src}) 50% / contain no-repeat;
  margin: auto;

  ${mp[0]} {
    width: ${({ mw }) => mw && mw};
    height: ${({ mh }) => mh && mh};
    background: url(${({ srcM }) => srcM && srcM}) 50% / contain no-repeat;
  }

  ${mp[1]} {
    width: ${({ lw }) => lw && lw};
    height: ${({ lh }) => lh && lh};
    background: url(${({ srcL }) => srcL && srcL}) 50% / contain no-repeat;
  }
`;
