import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../../styles/device';
import DetailPeoleBackButton from './DetailPeoleBackButton';

function DetailPeopleImage({ src, href }) {
  return (
    <>
      <Container src={src[0]} srcm={src[1]} srcl={src[2]}>
        <DetailPeoleBackButton href={href} />
      </Container>
    </>
  );
}

export default DetailPeopleImage;

const Container = styled.div`
  width: 360px;
  height: 445px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background: url(${({ src }) => src && src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: var(--peope-detail-image);

  ${mp[0]} {
    width: 312px;
    height: 100vh;
    margin: unset;
    background: url(${({ srcm }) => srcm && srcm});
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
  }

  ${mp[1]} {
    width: 867px;
    background: url(${({ srcl }) => srcl && srcl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
