import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../../styles/device';

function PeopleThumbnail({ src, index, clickListener, forwardedRef }) {
  return (
    <Container
      onClick={() => {
        window.scrollTo(0, 0);
        clickListener(index);
      }}
      src={src[0]}
      srcm={src[1]}
      srcl={src[2]}
      ref={forwardedRef}
    />
  );
}

export default PeopleThumbnail;

const Container = styled.li`
  display: inline-block;
  width: 136px;
  height: 186px;
  background: url(${({ src }) => src && src});
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  border-radius: 20px;
  cursor: pointer;

  ${mp[0]} {
    width: 174px;
    height: 242px;
    background: url(${({ srcm }) => srcm && srcm});
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
  }
  ${mp[1]} {
    width: 185px;
    height: 227px;
    background: url(${({ srcl }) => srcl && srcl});
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;
