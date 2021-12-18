import React, { useState } from 'react';
import styled from '@emotion/styled';
import { MXFlexCenteringSB } from '../../mixin/MXFlex';

function CompanyBigCard({ bold, title, body }) {
  const [arrow, setArrow] = useState(false);

  const handleToggle = () => {
    setArrow(!arrow);
  };

  return (
    <Container active={arrow}>
      <TitleWrapper>
        <Title>{title}</Title>
        <img
          src={
            arrow
              ? '/images/icon/component-small-view-cards-icons-chevron-up.svg'
              : '/images/icon/component-small-view-cards-component-small-view-cards-icons-chevron-down.svg'
          }
          width={24}
          height={24}
          alt="arrowButton"
          onClick={handleToggle}
        />
      </TitleWrapper>
      <Divider />
      {body?.map((el, idx) => (
        <Body key={idx}>
          <Quarter>
            <b>{el.quarter}</b>
          </Quarter>
          <div>{el.content}</div>
        </Body>
      ))}
    </Container>
  );
}

export default CompanyBigCard;

const Container = styled.section`
  margin: 64px 0 24px;
  padding: 22px 29px 22px 24px;
  border-radius: 20px;
  background-color: var(--components-components-02);
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const Title = styled.div`
  margin: 0 auto;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: var(--text-in-light-text-10);
`;

const Divider = styled.div`
  height: 1px;
  margin: 23.5px 0.5px 23.5px 0;
  background-color: var(--components-components-03);
`;

const Body = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  margin-bottom: 24px;
  width: 100%;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.72px;
  text-align: left;
  color: var(--text-in-light-text-10);
  word-break: break-all;

  b {
    font-weight: bold;
  }
  div {
    word-break: break-all;
  }
`;

const Quarter = styled.div`
  margin-right: 16px;
`;
