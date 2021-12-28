import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function CompanyFaithCard({ title, body, srcm, srcl }) {
  return (
    <Container srcm={srcm} srcl={srcl}>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  );
}

export default CompanyFaithCard;

const Container = styled.div`
  width: 270px;
  height: 312px;
  padding: 44px 24px 104px;
  background: url(${({ srcm }) => srcm && srcm});
  background-size: cover;
  background-position: 50%;
  border-radius: 22px;

  ${mp[1]} {
    width: 583px;
    height: 590px;
    padding: 88px 36px 246px 44px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.8px;
  text-align: left;
  color: var(--text-in-light-text-10);

  ${mp[1]} {
    font-size: 46px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
  }
`;

const Body = styled.div`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: -0.59px;
  text-align: left;
  color: var(--text-in-light-text-05);
  ${mp[1]} {
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: -1.08px;
    text-align: left;
    color: var(--text-in-light-text-06);
  }
`;
