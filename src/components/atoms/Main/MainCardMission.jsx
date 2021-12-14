import React from 'react';
import styled from '@emotion/styled';

function MainCardMission({ margin, item }) {
  return (
    <MainCardMissionContainer margin={margin}>{item}</MainCardMissionContainer>
  );
}

export default MainCardMission;

const MainCardMissionContainer = styled.div`
  margin: ${({ margin }) => margin && margin};
  font-size: 10px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.45px;
  text-align: left;
  color: var(--text-in-light-text-06);
`;
