import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function CompanyBigCardOverTablet({ newData, oldData }) {
  useEffect(() => {
    console.log('a');
  });

  return (
    <Container>
      <TitleContent highlight={true}>2021</TitleContent>
      {newData?.map((el, idx) => (
        <BodyContent key={idx} highlight={true}>
          <Quarter>
            <b>{el.quarter}</b>
          </Quarter>
          <div>{el.content}</div>
        </BodyContent>
      ))}
      <TitleContent>2020</TitleContent>
      {oldData?.map((el, idx) => (
        <BodyContent key={(idx + 1) * 2} highlight={false}>
          <Quarter>
            <b>{el.quarter}</b>
          </Quarter>
          <div>{el.content}</div>
        </BodyContent>
      ))}
    </Container>
  );
}

export default CompanyBigCardOverTablet;

const TitleContent = styled.div`
  margin: 0 auto;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: ${({ highlight }) =>
    highlight
      ? 'var(--text-in-light-text-10)'
      : 'var(--text-in-light-text-05)'};

  ${mp[0]} {
    margin-bottom: 24px;
  }
  ${mp[1]} {
    margin-bottom: 56px;
  }
`;

const Container = styled.div`
  max-width: 660px;
  margin: 49px auto 0;
  padding: 56px 42px;
  border-radius: 24px;
  background-color: var(--components-components-02);
`;

const BodyContent = styled.div`
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

  & > b {
    font-weight: bold;
  }
  & > div {
    word-break: break-all;
  }

  ${mp[0]} {
    line-height: 1.2;
    margin-bottom: 32px;
  }

  ${mp[1]} {
    line-height: 1.2;
    margin-bottom: 44px;
  }
`;

const Quarter = styled.div`
  margin-right: 16px;
  min-width: 50px;
`;
