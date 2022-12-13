import React from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import CompanyBodyTitle from '../../atoms/Company/CompanyBodyTitle';
import CompanyCard from '../../mocules/Company/CompanyCard';
import { mp } from '../../../../styles/device';
import CompanySectionContainer from '../../atoms/Company/CompanySectionContainer';

function CompanyVisionSection({
  floatDiagnosisModal,
  floatMonitoringModal,
  floatSolutionModal
}) {
  const { t } = useTranslation();
  const vision = t('companyPage:company_vision');
  const visionFirst = t('companyPage:company_vision_1');
  const visionSecond = t('companyPage:company_vision_2');
  const visionThird = t('companyPage:company_vision_3');

  return (
    <CompanySectionContainer background={'var(--backgorund-bg-01)'}>
      <CompanyBodyTitle item={vision} />
      <MobileContainer>
        <MobileCardConatiner>
          <CompanyCard
            title={visionFirst}
            href={'/companyPage/sleepdiagnosis'}
            src={'/images/companyPage/company_2_s_2x.jpg'}
            srcM={'/images/companyPage/company_2_m_2x.jpg'}
            srcL={'/images/companyPage/company_2_l_2x.jpg'}
            modalListener={() => {}}
          />
        </MobileCardConatiner>
        <MobileCardConatiner>
          <CompanyCard
            title={visionSecond}
            href={'/companyPage/sleepsolution'}
            src={'/images/companyPage/company_3_s_2x.jpg'}
            srcM={'/images/companyPage/company_3_m_2x.jpg'}
            srcL={'/images/companyPage/company_3_l_2x.jpg'}
            modalListener={() => {}}
          />
        </MobileCardConatiner>
        <MobileCardConatiner>
          <CompanyCard
            title={visionThird}
            href={'/companyPage/sleepmonitoring'}
            src={'/images/companyPage/company_4_s_2x.jpg'}
            srcM={'/images/companyPage/company_4_m_2x.jpg'}
            srcL={'/images/companyPage/company_4_l_2x.jpg'}
            modalListener={() => {}}
          />
        </MobileCardConatiner>
      </MobileContainer>
      <OverTabletContainer>
        <Test>
          <div>
            <VisionLeftFirst>
              <CompanyCard
                title={visionFirst}
                href={'shref'}
                src={'/images/companyPage/company_2_s_2x.jpg'}
                srcM={'/images/companyPage/company_2_m_2x.jpg'}
                srcL={'/images/companyPage/company_2_l_2x.jpg'}
                modalListener={floatDiagnosisModal}
              />
            </VisionLeftFirst>
            <VisionLeft>
              <CompanyCard
                title={visionSecond}
                href={'shref'}
                src={'/images/companyPage/company_3_s_2x.jpg'}
                srcM={'/images/companyPage/company_3_m_2x.jpg'}
                srcL={'/images/companyPage/company_3_l_2x.jpg'}
                modalListener={floatMonitoringModal}
              />
            </VisionLeft>
          </div>
          <VisionRight>
            <CompanyCard
              title={visionThird}
              href={'shref'}
              src={'/images/companyPage/company_4_s_2x.jpg'}
              srcM={'/images/companyPage/company_4_m_2x.jpg'}
              srcL={'/images/companyPage/company_4_l_2x.jpg'}
              modalListener={floatSolutionModal}
            />
          </VisionRight>
        </Test>
      </OverTabletContainer>
    </CompanySectionContainer>
  );
}

export default CompanyVisionSection;

const MobileCardConatiner = styled.div`
  width: 320px;
  height: 200px;
  margin: 0 auto 24px;
`;

const MobileContainer = styled.div`
  ${mp[0]} {
    display: none;
  }
`;

const Test = styled.div`
  display: flex;
`;

const OverTabletContainer = styled.div`
  display: none;

  ${mp[0]} {
    display: block;
    max-width: 560px;
    margin: 0 auto;
  }

  ${mp[1]} {
    max-width: 1226px;
    margin: 0 auto;
  }
`;

const VisionLeft = styled.div`
  width: 270px;
  height: 312px;
  margin-right: 20px;

  ${mp[1]} {
    width: 603px;
    height: 570px;
  }
`;

const VisionLeftFirst = styled.div`
  width: 270px;
  height: 312px;
  margin-right: 20px;
  margin-bottom: 20px;

  ${mp[1]} {
    width: 603px;
    height: 570px;
    margin-right: 58px;
    margin-bottom: 63px;
  }
`;

const VisionRight = styled.div`
  width: 270px;
  height: 644px;

  ${mp[1]} {
    width: 603px;
    height: 1204px;
  }
`;
