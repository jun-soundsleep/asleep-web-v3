import React from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import { mp } from '../../../../styles/device';
import Link from 'next/link';

function PeopleBodyCard({ title, subtitle, href }) {
  const { t } = useTranslation();
  const meetMembers = t('common:meet_out_team_members');

  return (
    <Link href={href}>
      <a>
        <Container>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
          <MoreButton>
            <span>{meetMembers}</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.72 19.639a.75.75 0 0 0 1.06 0l6.25-6.25a.75.75 0 0 0 0-1.06l-6.25-6.25a.75.75 0 1 0-1.06 1.06l4.97 4.97H4.25a.75.75 0 0 0 0 1.5h14.44l-4.97 4.97a.75.75 0 0 0 0 1.06z"
                fill="#406bff"
              />
            </svg>
          </MoreButton>
        </Container>
      </a>
    </Link>
  );
}

export default PeopleBodyCard;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px 24px 40px;
  /* padding-bottom: 50%; */
  border-radius: 22px;
  background-color: var(--sub-sub-01);

  cursor: pointer;

  ${mp[0]} {
    padding: 44px 24px 11px;
  }
  ${mp[1]} {
    padding: 88px 44px 331px;
  }
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.16px;
  text-align: left;
  color: var(--text-in-light-text-10);
  margin-bottom: 16px;
  word-break: keep-all;

  ${mp[0]} {
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: 0.2px;
  }
  ${mp[1]} {
    font-size: 46px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: 0.46px;
  }
`;

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.16px;
  text-align: left;
  color: var(--text-in-light-text-05);
  margin-bottom: 7px;
  word-break: keep-all;

  ${mp[0]} {
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.62;
    letter-spacing: 0.13px;
  }
  ${mp[1]} {
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: -1.08px;
  }
`;

const MoreButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.77;
  letter-spacing: -0.59px;
  text-align: left;
  color: var(--primary-primary-in-light);
  margin-left: 15px;

  & > span {
    margin-right: 8px;
  }

  ${mp[0]} {
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.77;
    letter-spacing: 0.13px;
    text-align: left;
  }

  ${mp[1]} {
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: -1.08px;
  }
`;
