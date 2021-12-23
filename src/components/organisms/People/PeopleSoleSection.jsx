import React from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import PeopleSoloImage from '../../atoms/people/PeopleSoloImage';
import PeopleSoloBody from '../../atoms/people/PeopleSoloBody';
import PeopleSoloMoreButton from '../../atoms/people/PeopleSoloMoreButton';
import PeopleSoloName from '../../atoms/people/PeopleSoloName';
import { mp } from '../../../../styles/device';

function PeopleSoleSection({ src, name, body, href }) {
  return (
    <Wrapper>
      <PeopleSoloImage src={src} />
      <BodyContainer>
        <PeopleSoloName item={name} />
        <PeopleSoloBody item={body} />
        <PeopleSoloMoreButton href={href} />
      </BodyContainer>
    </Wrapper>
  );
}

export default PeopleSoleSection;

const BodyContainer = styled.div`
  max-width: 360px;
  margin: 32px auto;

  ${mp[0]} {
    max-width: unset;
    margin: 32px 20px;
  }

  ${mp[1]} {
    margin: 32px 0 0 108px;
  }
`;

const Wrapper = styled.div`
  ${mp[0]} {
    display: flex;
    justify-content: center;
    margin: 0 auto 48px;
    max-width: 720px;
  }
  ${mp[1]} {
    max-width: 1920px;
    margin: 0 auto 88px;
  }
`;
