import React from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import CompanyHistoryBigCard from '../../mocules/Company/CompanyHistoryBigCard';
import CompanyBodyTitle from '../../atoms/Company/CompanyBodyTitle';
import CompanyBigCardOverTablet from '../../mocules/Company/CompanyBigCardOverTablet';
import { mp } from '../../../../styles/device';
import CompanySectionContainer from '../../atoms/Company/CompanySectionContainer';

function CompanyHistorySection(props) {
  const { t } = useTranslation();
  const history = t('company:company_history');
  const Q1 = t('company:1q');
  const Q2 = t('company:2q');
  const Q3 = t('company:3q');
  const Q4 = t('company:4q');
  const y2q1 = t('company:2021_1');
  const y2q2 = t('company:2021_2');
  const y2q3 = t('company:2021_3');
  const y2q4 = t('company:2021_4');

  const y1q2 = t('company:2020_1');
  const y1q3 = t('company:2020_3');
  const y1q4 = t('company:2020_4');

  const history_2021 = [
    {
      quarter: Q1,
      content: y2q1
    },
    { quarter: Q2, content: y2q2 },
    { quarter: Q3, content: y2q3 },
    { quarter: Q4, content: y2q4 }
  ];

  const history_2020 = [
    { quarter: '06. 19', content: y1q2 },
    { quarter: Q3, content: y1q3 },
    { quarter: Q4, content: y1q4 }
  ];

  return (
    <Container>
      <MobileContainer>
        <CompanyBodyTitle item={history} />
        <CompanyHistoryBigCard
          title={'2021'}
          body={history_2021}
          highlight={true}
        />
        <CompanyHistoryBigCard title={'2020'} body={history_2020} />
      </MobileContainer>
      <OverTabletContainer>
        <CompanyBodyTitle item={history} />
        <CompanyBigCardOverTablet
          newData={history_2021}
          oldData={history_2020}
        />
      </OverTabletContainer>
    </Container>
  );
}

export default CompanyHistorySection;

const Container = styled.section`
  margin: 64px 0 127px;
  padding: 64px 20px;
  background-color: var(--backgorund-bg-01);

  ${mp[0]} {
    padding: 140px 20px;
  }

  ${mp[1]} {
    padding: 280px 20px;
  }
`;

const MobileContainer = styled.div`
  & > div:nth-child(2) {
    margin-bottom: -50px;
  }

  ${mp[0]} {
    display: none;
  }
`;

const OverTabletContainer = styled.div`
  display: none;

  ${mp[0]} {
    display: block;
  }
`;
