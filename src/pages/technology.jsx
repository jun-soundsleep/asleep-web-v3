import React, { forwardRef, useState } from 'react';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import AsleepLayout from '../../src/components/organisms/AppLayout/AsleepLayout';
import TechMobileMainSection from '../components/organisms/Tech/TechMobileMainSection';
import TechMainSection from '../components/organisms/Tech/TechMainSection';
import TechBodySection from '../components/organisms/Tech/TechBodySection';
import { mp } from '../../styles/device';
import CommonModal from '../components/mocules/Common/CommonModal';
import Head from 'next/head';

const FirstBodySection = dynamic(
  import('../components/organisms/Tech/TechBodySection')
);

// eslint-disable-next-line react/display-name
const ForwardedFristBodySection = forwardRef((props, ref) => {
  return <FirstBodySection {...props} forwardedRef={ref} />;
});

function Technology() {
  const { t } = useTranslation();
  const mainTitle = t('tech:title');
  const trackingTitle = t('tech:tracking_sleep_with_sound');
  const trackingSubTitle = t('tech:tracking_sleep_with_sound_sub');
  const smartPhoneMagic = t('tech:the_magic_of_sound');
  const verifiedAi = t('tech:medically_verified_sound_ai');
  const synergyTitle = t('tech:synergy_between_sound_and_Wi-Fi_sensing');
  const synergySubTitle = t('tech:synergy_between_sound_and_Wi-Fi_sensing_sub');
  const unobtrusive = t('tech:the_world_most_unobtrusive');
  const accurateSleepMeasurement = t(
    'tech:a_big_leap_toward_accurate_sleep_measurement'
  );

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

  const firstSection = React.createRef();

  const goToNextSection = () => {
    firstSection.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const [currentModal, setCurrentModal] = useState('');

  const floatSmartPhoneModal = () => {
    setCurrentModal('smart');
  };

  const floatAccurateModal = () => {
    setCurrentModal('accurate');
  };

  const floatRecordModal = () => {
    setCurrentModal('record');
  };

  const floatwifiModal = () => {
    setCurrentModal('wifi');
  };

  const cancelModal = () => {
    setCurrentModal();
  };

  return (
    <>
      <Head>
        <link rel="preload" href="/images/tech/tech_1_l_2x.jpg" as="image" />
        <link rel="preload" href="/images/tech/tech_1_m_2x.jpg" as="image" />
      </Head>
      <AsleepLayout>
        <MobileContainer>
          <TechMobileMainSection
            title={mainTitle}
            src={'/images/tech/tech_1_l_2x.jpg'}
          />
        </MobileContainer>
        <OverTabletTechMainSection>
          <TechMainSection
            title={mainTitle}
            srcM={'/images/tech/tech_1_l_2x.jpg'}
            srcL={'/images/tech/tech_1_m_2x.jpg'}
            clickListener={goToNextSection}
          />
        </OverTabletTechMainSection>
        <a id="techSound" />
        <ForwardedFristBodySection
          title={trackingTitle}
          subTitle={trackingSubTitle}
          src={'/images/icon/sound@3x.png'}
          srcM={'/images/icon/sound@2x.png'}
          srcL={'/images/icon/sound@3x.png'}
          fhref={'/technology/mobileapplication'}
          shref={'/technology/accurateai'}
          sw={'24px'}
          sh={'32px'}
          mw={'32px'}
          mh={'41px'}
          lw={'70px'}
          lh={'94px'}
          fcardtitle={smartPhoneMagic}
          fsrc={'/images/tech/tech_2_s_2x.jpg'}
          fsrcm={'/images/tech/tech_2_m_2x.jpg'}
          fsrcl={'/images/tech/tech_2_l_2x.jpg'}
          scardtitle={verifiedAi}
          ssrc={'/images/tech/tech_3_s_2x.jpg'}
          ssrcm={'/images/tech/tech_3_m_2x.jpg'}
          ssrcl={'/images/tech/tech_3_l_2x.jpg'}
          whiteTitleColor={'var(--text-in-dark-text-02)'}
          fmodalListener={floatSmartPhoneModal}
          smodalListener={floatAccurateModal}
          ref={firstSection}
        />
        <a id="techRf" />
        <TechBodySection
          title={synergyTitle}
          subTitle={synergySubTitle}
          background={'var(--backgorund-bg-04)'}
          fhref={'/technology/recording'}
          shref={'/technology/wifi'}
          fcardtitle={unobtrusive}
          fsrc={'/images/tech/tech_4_s_2x.jpg'}
          fsrcm={'/images/tech/tech_4_m_2x.jpg'}
          fsrcl={'/images/tech/tech_4_l_2x.jpg'}
          scardtitle={accurateSleepMeasurement}
          ssrc={'/images/tech/tech_5_s_2x.jpg'}
          ssrcm={'/images/tech/tech_5_m_2x.jpg'}
          ssrcl={'/images/tech/tech_5_l_2x.jpg'}
          whiteTitleColor={'var(--text-in-dark-text-02)'}
          fmodalListener={floatRecordModal}
          smodalListener={floatwifiModal}
        />
        {currentModal === 'smart' && (
          <CommonModal
            title={modal_1_title}
            body={modal_1_body}
            exitHandler={cancelModal}
            srcm={'/images/tech/tech-pop_1_m_2x.jpg'}
            srcl={'/images/tech/tech-pop_1_m_2x.jpg'}
            footNote={[modal_1_footnote]}
          />
        )}
        {currentModal === 'accurate' && (
          <CommonModal
            title={modal_2_title}
            body={modal_2_body}
            exitHandler={cancelModal}
            srcm={'/images/tech/tech-pop_2_m_2x.jpg'}
            srcl={'/images/tech/tech-pop_2_m_2x.jpg'}
            footNote={[modal_2_footnote]}
          />
        )}
        {currentModal === 'record' && (
          <CommonModal
            title={modal_3_title}
            body={modal_3_body}
            exitHandler={cancelModal}
            srcm={'/images/tech/tech-pop_3_m_2x.jpg'}
            srcl={'/images/tech/tech-pop_3_m_2x.jpg'}
            footNote={[modal_3_footnote]}
          />
        )}
        {currentModal === 'wifi' && (
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
    </>
  );
}

export default Technology;

const MobileContainer = styled.div`
  ${mp[0]} {
    display: none;
  }
`;

const OverTabletTechMainSection = styled.div`
  display: none;
  ${mp[0]} {
    display: block;
  }
`;
