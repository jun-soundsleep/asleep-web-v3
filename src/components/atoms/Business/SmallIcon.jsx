import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function SmallIcon(props) {
  return (
    <Test
      src="img/01-14995884-2.png"
      srcSet="img/01-14995884-2@2x.png 2x,
          img/01-14995884-2@3x.png 3x"
      className="-\32 "
    />
  );
}

export default SmallIcon;

const Test = styled.img`
  margin-top: 200px;
  display: block;
`;
