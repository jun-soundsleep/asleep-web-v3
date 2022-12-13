import React from 'react';
import styled from '@emotion/styled';
import CompanyBodyTitle from '../../atoms/Company/CompanyBodyTitle';
import CompanyBodySubTitle from '../../atoms/Company/CompanyBodySubTitle';
import CompanyHistorySmallCard from '../../mocules/Company/CompanyHistorySmallCard';
import useTranslation from 'next-translate/useTranslation';
import { mp } from '../../../../styles/device';
import CompanyFaithCard from '../../mocules/Company/CompanyFaithCard';
import { MXFlexCenteringSB } from '../../mixin/MXFlex';
import CompanySectionContainer from '../../atoms/Company/CompanySectionContainer';

function CompanyFaithSection() {
  const { t } = useTranslation();
  const title = t('companyPage:company_faith_title');
  const subTitle = t('companyPage:company_faith_title_sub');
  const psg = t('companyPage:psg');
  const psgDetail = t('companyPage:psg_detail');
  const family = t('companyPage:family_health');
  const familyDetail = t('companyPage:family_health_detail');
  const improve = t('companyPage:improve_lift');
  const improveDetail = t('companyPage:improve_lift_detail');
  const refresh = t('companyPage:wake_refreshed');
  const refreshDetail = t('companyPage:wake_refreshed_detail');
  const monitor = t('companyPage:monitor_pass_data');
  const monitorDetail = t('companyPage:monitor_pass_data_detail');
  const preventDisease = t('companyPage:prevent_disease');
  const preventDiseaseDetail = t('companyPage:prevent_disease_detail');

  return (
    <CompanySectionContainer>
      <TitleContainer>
        <CompanyBodyTitle item={title} />
      </TitleContainer>
      <SubTitleContainer>
        <CompanyBodySubTitle item={subTitle} />
      </SubTitleContainer>
      <MobileContainer>
        <CompanyHistorySmallCard
          title={psg}
          body={psgDetail}
        />
        <CompanyHistorySmallCard
          title={family}
          body={familyDetail}
        />
        <CompanyHistorySmallCard
          title={improve}
          body={improveDetail}
        />
        <CompanyHistorySmallCard
          title={refresh}
          body={refreshDetail}
        />
        <CompanyHistorySmallCard
          title={monitor}
          body={monitorDetail}
        />
        <CompanyHistorySmallCard
          title={preventDisease}
          body={preventDiseaseDetail}
        />
      </MobileContainer>
      <OverTabletConatiner>
        <CardContainer>
          <CompanyFaithCard
            title={psg}
            body={psgDetail}
            srcm={'/images/companyPage/company_5_l_2x.jpg'}
          />
          <CompanyFaithCard
            title={family}
            body={familyDetail}
            srcm={'/images/companyPage/company_6_l_2x.jpg'}
          />
        </CardContainer>
        <CardContainer>
          <CompanyFaithCard
            title={improve}
            body={improveDetail}
            srcm={'/images/companyPage/company_7_l_2x.jpg'}
          />
          <CompanyFaithCard
            title={refresh}
            body={refreshDetail}
            srcm={'/images/companyPage/company_8_l_2x.jpg'}
          />
        </CardContainer>
        <CardContainer>
          <CompanyFaithCard
            title={monitor}
            body={monitorDetail}
            srcm={'/images/companyPage/company_9_l_2x.jpg'}
          />
          <CompanyFaithCard
            title={preventDisease}
            body={preventDiseaseDetail}
            srcm={'/images/companyPage/company_10_l_2x.jpg'}
          />
        </CardContainer>
      </OverTabletConatiner>
    </CompanySectionContainer>
  );
}

export default CompanyFaithSection;

const TitleContainer = styled.div`
  /* margin: 0 0 10px 0; */
`;

const SubTitleContainer = styled.div`
  margin: 0 auto 32px;
  ${mp[0]} {
    max-width: 520px;
    margin: 0 auto 48px;
  }
  ${mp[1]} {
    max-width: 1265px;
    margin: 0 auto 120px;
  }
`;

const MobileContainer = styled.div`
  ${mp[0]} {
    display: none;
  }
`;

const OverTabletConatiner = styled.div`
  display: none;
  ${mp[0]} {
    display: block;
  }
`;

const CardContainer = styled(MXFlexCenteringSB)`
  display: flex;
  max-width: 560px;
  margin: 0 auto 20px;

  ${mp[1]} {
    max-width: 1226px;
    margin: 0 auto 64px;
  }
`;
