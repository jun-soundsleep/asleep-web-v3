import React from 'react';
import styled from '@emotion/styled';

function Blank({ height }) {
  return <BlankContainer height={height} />;
}

export default Blank;

const BlankContainer = styled.div`
  height: ${({ height }) => height && height};
`;
