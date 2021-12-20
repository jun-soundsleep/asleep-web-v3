import React, { useState } from 'react';
import styled from '@emotion/styled';
import AnimateHeight from 'react-animate-height';

function CompanyHistoryBigCard({ highlight, title, body }) {
  const [arrow, setArrow] = useState(false);
  const [height, setHeight] = useState(143);

  const handleToggle = () => {
    setArrow(!arrow);
    if (height === 143) {
      setHeight('auto');
    } else {
      setHeight(143);
    }
  };

  return (
    <AnimateHeight id="example-panel2" duration={500} height={height}>
      <Container active={arrow} height={height}>
        <TitleWrapper>
          <Title highlight={highlight}>{title}</Title>
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
          <Body key={idx} highlight={highlight}>
            <Quarter>
              <b>{el.quarter}</b>
            </Quarter>
            <div>{el.content}</div>
          </Body>
        ))}
      </Container>
    </AnimateHeight>
  );
}

export default CompanyHistoryBigCard;

const Container = styled.section`
  margin: 64px 0 24px;
  padding: 24px 25px 24px 24px;
  border-radius: 20px;
  background-color: var(--components-components-02);

  img {
    cursor: pointer;
  }

  height: ${({ active }) => (active ? '100%' : '69px')};
  overflow: hidden;
  transition: height 0.2s ease-in-out;
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
  color: ${({ highlight }) =>
    highlight
      ? 'var(--text-in-light-text-10)'
      : 'var(--text-in-light-text-05)'};
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
  color: ${({ highlight }) =>
    highlight
      ? 'var(--text-in-light-text-10)'
      : 'var(--text-in-light-text-05)'};
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
