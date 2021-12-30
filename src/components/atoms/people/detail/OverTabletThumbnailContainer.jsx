import React from 'react';
import styled from '@emotion/styled';

function OverTabletThumbnailContainer({
  children,
  length,
  handleMouseOut,
  handleMouseDown,
  handleMouseUp,
  handleMouseMove,
  forwardedRef
}) {
  return (
    <Container
      length={length}
      onMouseLeave={handleMouseOut}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      ref={forwardedRef}
    >
      {children}
    </Container>
  );
}

export default OverTabletThumbnailContainer;

const Container = styled.ul`
  display: flex;
  position: absolute;
  bottom: 24px;
  left: 24px;
  user-select: none;
  width: ${({ length }) => length * 174 + length * 20}px;
  /* width: 500px; */
  height: 242px;
  overflow-x: hidden;
  z-index: var(--peope-detail-thumbnail);
  transition: transform 100ms ease 0s;

  & > li {
    margin-right: 20px;
  }
`;
