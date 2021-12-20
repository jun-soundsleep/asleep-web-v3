import React, { useState } from 'react';
import styled from '@emotion/styled';
import AnimateHeight from 'react-animate-height';
import { MXFlexCenteringSB } from '../../mixin/MXFlex';

function CompanyHistorySmallCard({ title, body }) {
  const [arrow, setArrow] = useState(false);
  const [height, setHeight] = useState(100);

  const handleToggle = () => {
    setArrow(!arrow);
    if (height === 100) {
      setHeight('auto');
    } else {
      setHeight(100);
    }
  };

  return (
    <AnimateHeight id="example-panel" duration={500} height={height}>
      <Container active={arrow}>
        <MXFlexCenteringSB>
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
        </MXFlexCenteringSB>
        <Divider />
        <Body>{body}</Body>
      </Container>
    </AnimateHeight>
  );
}

export default CompanyHistorySmallCard;

const Container = styled.section`
  margin: 24px 0px;
  padding: 24px 25px 24px 24px;
  border-radius: 20px;
  background-color: var(--backgorund-bg-01);

  img {
    cursor: pointer;
  }
  transition: height 0.2s ease-in-out;
  height: ${({ active }) => (active ? '100%' : '69px')};
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: var(--text-in-light-text-10);
`;

const Divider = styled.div`
  height: 1px;
  margin: 23.5px 0.5px 23.5px 0;
  background-color: var(--components-components-02);
`;

const Body = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.72px;
  text-align: left;
  color: var(--text-in-light-text-05);
  word-break: break-all;
`;
