import React, { forwardRef, useState } from 'react';
import styled from '@emotion/styled';
import AsleepLayout from '../components/organisms/AppLayout/AsleepLayout';
import CompanyMainSection from '../components/organisms/Company/CompanyMainSection';
import MissionSection from '../components/organisms/Company/MissionSection';
import CompanyBodySection from '../components/organisms/Company/CompanyBodySection';
import CompanyVisionSection from '../components/organisms/Company/CompanyVisionSection';
import CompanyFaithSection from '../components/organisms/Company/CompanyFaithSection';
import CompanyHistorySection from '../components/organisms/Company/CompanyHistorySection';
import useTranslation from 'next-translate/useTranslation';
import CommonModal from '../components/mocules/Common/CommonModal';

function Company() {
  const { t } = useTranslation();
  const title = t('company:digital_transforamtion');
  const subTitle = t('company:digital_transforamtion_sub');
  const mission = t('company:company_mission');

  const [currentModal, setCurrentModal] = useState('');

  const floatDiagnosisModal = () => {
    setCurrentModal('diagnosis');
  };

  const floatMonitoringModal = () => {
    setCurrentModal('monitoring');
  };

  const floatSolutionModal = () => {
    setCurrentModal('solution');
  };

  const cancelModal = () => {
    setCurrentModal('');
  };

  const modal_1_title = t('company:company_popup_1');
  const modal_1_body = t('company:company_popup_1_contents');

  const modal_2_title = t('company:company_popup_2');
  const modal_2_body = t('company:company_popup_2_contents');

  const modal_3_title = t('company:company_popup_3');
  const modal_3_body = t('company:company_popup_3_contents');

  return (
    <AsleepLayout>
      <CompanyMainSection title={title} subTitle={subTitle} />
      <MissionSection missionTitle={'Mission'} missionBody={mission} />
      <CompanyBodySection />
      <CompanyVisionSection
        floatDiagnosisModal={floatDiagnosisModal}
        floatMonitoringModal={floatMonitoringModal}
        floatSolutionModal={floatSolutionModal}
      />
      <CompanyFaithSection />
      <CompanyHistorySection />
      {currentModal === 'diagnosis' && (
        <CommonModal
          title={modal_1_title}
          body={modal_1_body}
          exitHandler={cancelModal}
          blackTitle={true}
          srcm={'/images/company/company-pop_1_m_2x.jpg'}
          srcl={'/images/company/company-pop_1_l_2x.jpg'}
        />
      )}
      {currentModal === 'monitoring' && (
        <CommonModal
          title={modal_2_title}
          body={modal_2_body}
          exitHandler={cancelModal}
          blackTitle={true}
          srcm={'/images/company/company-pop_2_m_2x.jpg'}
          srcl={'/images/company/company-pop_2_l_2x.jpg'}
        />
      )}
      {currentModal === 'solution' && (
        <CommonModal
          title={modal_3_title}
          body={modal_3_body}
          exitHandler={cancelModal}
          blackTitle={true}
          srcm={'/images/company/company-pop_3_m_2x.jpg'}
          srcl={'/images/company/company-pop_3_l_2x.jpg'}
        />
      )}
    </AsleepLayout>
  );
}

export default Company;
