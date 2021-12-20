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
    console.log('asldkjlsda');
    if (typeof window !== 'undefined') {
      window.alert('asldka;');
    }
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

  console.log(currentModal);

  const modal_1_title = t('tech:smartphone_modal');
  const modal_1_body = t('tech:smartphone_modal_body');
  const modal_1_footnote = t('tech:smartphone_modal_body_footnote');

  const modal_2_title = t('tech:accurate_ai_title');
  const modal_2_body = t('tech:accurate_ai_body');
  const modal_2_footnote = t('tech:accurate_ai_footnote');

  const modal_3_title = t('tech:natural_sleep_record');
  const modal_3_body = t('tech:natural_sleep_record_body');
  const modal_3_footnote = t('tech:natural_sleep_record_body_footnote');

  const modal_4_title = t('tech:accurate_wifi_sensing');
  const modal_4_body = t('tech:accurate_wifi_sensing-body');
  const modal_4_footnote = t('tech:accurate_wifi_sensing-footnote');
  const modal_4_footnote_2 = t('tech:accurate_wifi_sensing-footnote_2');

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
          title={modal_4_title}
          body={modal_4_body}
          exitHandler={cancelModal}
          srcm={'/images/tech/tech-pop_4_m_2x.jpg'}
          srcl={'/images/tech/tech-pop_4_m_2x.jpg'}
          footNote={[modal_4_footnote, modal_4_footnote_2]}
        />
      )}
      {currentModal === 'monitoring' && (
        <CommonModal
          title={modal_4_title}
          body={modal_4_body}
          exitHandler={cancelModal}
          srcm={'/images/tech/tech-pop_4_m_2x.jpg'}
          srcl={'/images/tech/tech-pop_4_m_2x.jpg'}
          footNote={[modal_4_footnote, modal_4_footnote_2]}
        />
      )}
      {currentModal === 'solution' && (
        <CommonModal
          title={modal_4_title}
          body={modal_4_body}
          exitHandler={cancelModal}
          srcm={'/images/tech/tech-pop_4_m_2x.jpg'}
          srcl={'/images/tech/tech-pop_4_m_2x.jpg'}
          footNote={[modal_4_footnote, modal_4_footnote_2]}
        />
      )}
    </AsleepLayout>
  );
}

export default Company;
