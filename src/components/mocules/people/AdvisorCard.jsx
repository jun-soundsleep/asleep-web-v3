import React from 'react';
import styled from '@emotion/styled';
import AdvisorImage from '../../atoms/people/AdvisorImage';
import AdvisorName from '../../atoms/people/AdvisorName';
import AdvisorBody from '../../atoms/people/AdvisorBody';

function AdvisorCard({ name, body, src }) {
  return (
    <Container>
      <AdvisorImage src={src} />
      <AdvisorName item={name} />
      <AdvisorBody item={body} />
    </Container>
  );
}

export default AdvisorCard;

const Container = styled.div``;
