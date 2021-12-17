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
  const firstSection = React.createRef();

  const goToNextSection = () => {
    firstSection.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const [currentModal, setCurrentModal] = useState('');

  const modalClick = () => {
    setCurrentModal('sleep');
  };

  const cancelModal = () => {
    setCurrentModal();
  };

  return (
    <>
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
        <ForwardedFristBodySection
          title={trackingTitle}
          subTitle={trackingSubTitle}
          src={'/images/icon/sound@3x.png'}
          srcM={'/images/icon/sound@2x.png'}
          srcL={'/images/icon/sound@3x.png'}
          fhref={'/tech'}
          shref={'/tech'}
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
          fmodalListener={modalClick}
          smodalListener={modalClick}
          ref={firstSection}
        />
        <TechBodySection
          title={synergyTitle}
          subTitle={synergySubTitle}
          background={'var(--backgorund-bg-04)'}
          fhref={'/tech'}
          shref={'/tech'}
          fcardtitle={unobtrusive}
          // fcardsubtitle={'asd'}
          fsrc={'/images/tech/tech_4_s_2x.jpg'}
          fsrcm={'/images/tech/tech_4_m_2x.jpg'}
          fsrcl={'/images/tech/tech_4_l_2x.jpg'}
          scardtitle={accurateSleepMeasurement}
          // scardsubtitle={'asd'}
          ssrc={'/images/tech/tech_5_s_2x.jpg'}
          ssrcm={'/images/tech/tech_5_m_2x.jpg'}
          // ref={firstSection}
          ssrcl={'/images/tech/tech_5_l_2x.jpg'}
          whiteTitleColor={'var(--text-in-dark-text-02)'}
          fmodalListener={modalClick}
          smodalListener={modalClick}
        />
        {currentModal === 'sleep' && (
          <CommonModal
            title={'alskjdal\nskdjalsdk'}
            body={
              '모두가 잠든 밤, 침실에는 에어컨과 선풍기의 바람 소리, 가습기의 동작음, 열린 창문을 통해 불어오는 바람 소리 등 다양한 소리가 존재합니다. 에이슬립의 Sound AI는 이런 주변 소음이 있는 상황에서도 사용자의 호흡음과 뒤척임에 의한 소리를 정확하게 인식할 수 있습니다. 호흡음의 주파수 분포, 호흡의 패턴, 뒤척임의 패턴을 추출하고 독자적인 AI 호흡 패턴 분석을 통해 수면 단계를 판독하는 에이슬립의 Sound AI는 30초 단위의 수면 단계 변화도 정밀하게 트래킹합니다. 에이슬립의 Sound AI는 방대한 데이터를 기반으로 학습되고있습니다. 의사의 수면 판독과 매칭된 3,800,000개의 수면 사운드 데이터(1)를 기반으로 학습되었고 지금도 계속해서 가정 환경에서 수집하고 있는 수면 사운드 데이터를 기반으로 진화하고 있습니다.  '
            }
            exitHandler={cancelModal}
            srcm={'/images/tech/tech_4_m_2x.jpg'}
            srcl={'/images/tech/tech_4_l_2x.jpg'}
            footNote={['asdada', 'asdlkj']}
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
