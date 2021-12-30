import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';
import { MXFlexCenteringSB } from '../../mixin/MXFlex';

function AdvisorBody({ item }) {
  return (
    <Container>
      {item?.map((el, idx) => (
        <TextContainer key={idx}>
          <div>&middot;</div>
          <div>{el}</div>
        </TextContainer>
      ))}
    </Container>
  );
}

export default AdvisorBody;

const Container = styled.div`
  word-break: keep-all;
  margin-top: 13px;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: -0.52px;
  text-align: left;
  color: var(--text-in-light-text-05);

  ${mp[0]} {
    max-width: 154px;
  }
  ${mp[1]} {
    max-width: 368px;
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: -1.08px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  & > div:first-child {
    margin-right: 5px;
  }
`;
