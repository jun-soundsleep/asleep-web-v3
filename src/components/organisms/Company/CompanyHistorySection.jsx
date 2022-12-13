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
  const history = t('companyPage:company_history');
  const Q1 = t('companyPage:1q');
  const Q2 = t('companyPage:2q');
  const Q3 = t('companyPage:3q');
  const Q4 = t('companyPage:4q');
  const y2q1 = t('companyPage:2021_1');
  const y2q2 = t('companyPage:2021_2');
  const y2q3 = t('companyPage:2021_3');
  const y2q4 = t('companyPage:2021_4');

  const y1q2 = t('companyPage:2020_1');
  const y1q3 = t('companyPage:2020_3');
  const y1q4 = t('companyPage:2020_4');

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
    <CompanySectionContainer background={'var(--backgorund-bg-01)'}>
      <MobileContainer>
        <CompanyBodyTitle item={history} />
        <CompanyHistoryBigCard
          title={'2021'}
          body={history_2021}
          highlight={true}
        />
        <CompanyHistoryBigCard
          title={'2020'}
          body={history_2020}
        />
      </MobileContainer>
      <OverTabletContainer>
        <CompanyBodyTitle item={history} />
        <CompanyBigCardOverTablet
          newData={history_2021}
          oldData={history_2020}
        />
      </OverTabletContainer>
    </CompanySectionContainer>
  );
}

export default CompanyHistorySection;

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
