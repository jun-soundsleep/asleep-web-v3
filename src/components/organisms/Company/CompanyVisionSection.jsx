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
  const vision = t('company:company_vision');
  const visionFirst = t('company:company_vision_1');
  const visionSecond = t('company:company_vision_2');
  const visionThird = t('company:company_vision_3');

  return (
    <CompanySectionContainer background={'var(--backgorund-bg-01)'}>
      <CompanyBodyTitle item={vision} />
      <MobileContainer>
        <CardConatiner>
          <CompanyCard
            title={visionFirst}
            href={'/company/sleepdiagnosis'}
            src={'/images/company/company_2_s_2x.jpg'}
            srcM={'/images/company/company_2_m_2x.jpg'}
            srcL={'/images/company/company_2_l_2x.jpg'}
            modalListener={() => {}}
          />
        </CardConatiner>
        <CardConatiner>
          <CompanyCard
            title={visionSecond}
            href={'/company/sleepsolution'}
            src={'/images/company/company_3_s_2x.jpg'}
            srcM={'/images/company/company_3_m_2x.jpg'}
            srcL={'/images/company/company_3_l_2x.jpg'}
            modalListener={() => {}}
          />
        </CardConatiner>
        <CardConatiner>
          <CompanyCard
            title={visionThird}
            href={'/company/sleepmonitoring'}
            src={'/images/company/company_4_s_2x.jpg'}
            srcM={'/images/company/company_4_m_2x.jpg'}
            srcL={'/images/company/company_4_l_2x.jpg'}
            modalListener={() => {}}
          />
        </CardConatiner>
      </MobileContainer>
      <OverTabletContainer>
        <Test>
          <div>
            <VisionLeft>
              <CompanyCard
                title={visionFirst}
                href={'shref'}
                src={'/images/company/company_2_s_2x.jpg'}
                srcM={'/images/company/company_2_m_2x.jpg'}
                srcL={'/images/company/company_2_l_2x.jpg'}
                modalListener={floatDiagnosisModal}
              />
            </VisionLeft>
            <VisionLeft>
              <CompanyCard
                title={visionSecond}
                href={'shref'}
                src={'/images/company/company_3_s_2x.jpg'}
                srcM={'/images/company/company_3_m_2x.jpg'}
                srcL={'/images/company/company_3_l_2x.jpg'}
                modalListener={floatMonitoringModal}
              />
            </VisionLeft>
          </div>
          <VisionRight>
            <CompanyCard
              title={visionThird}
              href={'shref'}
              src={'/images/company/company_4_s_2x.jpg'}
              srcM={'/images/company/company_4_m_2x.jpg'}
              srcL={'/images/company/company_4_l_2x.jpg'}
              modalListener={floatSolutionModal}
            />
          </VisionRight>
        </Test>
      </OverTabletContainer>
    </CompanySectionContainer>
  );
}

export default CompanyVisionSection;

const CardConatiner = styled.div`
  width: 320px;
  height: 200px;
  margin: 0 auto;
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

const VisionRight = styled.div`
  width: 270px;
  height: 644px;

  ${mp[1]} {
    width: 603px;
    height: 1204px;
  }
`;
