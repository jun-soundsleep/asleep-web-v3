import React from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import { mp } from '../../../../styles/device';
import Link from 'next/link';
import ButtonMoreInfoInCard from '../../atoms/Common/ButtonMoreInfoInCard';

function PeopleBodyCard({ title, subtitle, href }) {
  const { t } = useTranslation();
  const meetMembers = t('common:meet_out_team_members');

  return (
    <Link href={href}>
      <a>
        <Container>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
          <ButtonMoreInfoInCard
            hexColor={'#406bff'}
            item={meetMembers}
            itemColor={'var(--primary-primary-in-light)'}
            fontWeight={500}
          />
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
    max-width: 310px;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.62;
    letter-spacing: 0.13px;
    margin-bottom: 36px;
  }
  ${mp[1]} {
    max-width: 510px;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.58;
    letter-spacing: -1.08px;
    margin-bottom: 60.5px;
  }
`;
