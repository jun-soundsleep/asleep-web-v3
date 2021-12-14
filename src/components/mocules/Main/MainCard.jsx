import React from 'react';
import styled from '@emotion/styled';
import MainCardMission from '../../atoms/Main/MainCardMission';
import MainCardTitle from '../../atoms/Main/MainCardTitle';
import MainCardMoreButton from '../../atoms/Main/MainCardMoreButton';
import useTranslation from 'next-translate/useTranslation';

function MainCard({ margin, src, title }) {
  const router = useTranslation();

  return (
    <MainCardContainer margin={margin} src={src}>
      {/* <CardImage /> */}
      <MainCardMission item={'Mission'} />
      <MainCardTitle item={title} />
      <MainCardMoreButton item="Find out more" />
    </MainCardContainer>
  );
}

export default MainCard;

const MainCardContainer = styled.div`
  width: 320px;
  height: 222px;
  padding: 32px 0px 74px 24px;
  border-radius: 22px;
  margin: ${({ margin }) => (margin ? margin : '24px auto 0px')};
  background: url(${({ src }) => src && src});
  background-size: cover;
  background-repeat: no-repeat;
`;

const CardImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: ${({ src }) => src && src};
  background-size: cover;
  background-repeat: no-repeat;
`;
