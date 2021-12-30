import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import TechSubTitleModal from '../../atoms/Tech/TechSubTitleModal';
import { mp } from '../../../../styles/device';

function TechSubText({ forwardedRef }) {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  return (
    <Conatiner ref={forwardedRef}>
      {router.locale === 'ko' ? (
        <TechSubTextContainer locale={router.locale}>
          기존에는 수면 분석의 정확성을 담보하기 위해 뇌파 데이터가
          필요했습니다. 하지만 에이슬립은 독자적인 AI Technology를 통해 수면 중
          호흡과 움직임의 패턴만으로 뇌파를 활용한 것과 같은 수준의 정확도를
          달성하였습니다.
          <span
            onMouseOver={() => {
              setModalVisible(true);
            }}
            onMouseLeave={() => {
              setModalVisible(false);
            }}
          >
            {' '}
            에이슬립의 AI는 호흡과 신체 움직임의 패턴을 분석하여 자율신경계의
            활성화 정도를 추정하고, 이를 통해 정확하게 수면 단계를 판독합니다.
            {modalVisible && <TechSubTitleModal />}
          </span>
          <br />
          <br />
          <b>
            놀랍게도 에이슬립은 수면에 영향을 끼치지 않는 두 가지 비접촉
            방식으로 호흡과 움직임을 측정합니다.{' '}
          </b>
          첫 번째 방식은 수면 중의 호흡음과 수면 중의 움직임 소리를 분석하여
          수면 단계를 트래킹하는 것입니다. 이 경우 이미 개인과 가정에 널리
          보급되어있는 스마트폰과 스마트 스피커의 소프트웨어 업데이트로 쉽게
          에이슬립의 솔루션을 만날 수 있습니다. 두 번째 방식으로, 에이슬립은
          독자적인 Wi-Fi 센싱 기술을 활용하여 호흡 운동과 수면 중 움직임을
          트래킹합니다. Wi-Fi 수면 센싱 기술은 Wi-Fi를 사용하는 모든 IoT
          가전들에 내장 될 수 있으며, 호흡과 움직임을 더욱 정밀하고 끊김 없이
          트래킹할 수 있습니다.
        </TechSubTextContainer>
      ) : (
        <TechSubTextContainer>
          Conventionally, EEG data is essential to ensure accurate sleep
          analysis. Through its remarkable AI technology, Asleep achieves the
          same level of accuracy as past EEG methods by solely using breathing
          patterns and movement detected during sleep.{' '}
          <span
            onMouseOver={() => {
              setModalVisible(true);
            }}
            onMouseLeave={() => {
              setModalVisible(false);
            }}
          >
            Asleep&apos;s AI technology enables us to accurately determine sleep
            stages by looking at autonomic nervous system activation levels
            through the analysis of breathing patterns and body movement.
            {modalVisible && <TechSubTitleModal en={true} />}
          </span>
          <br />
          <br />
          <b>
            Asleep measures breathing patterns and body movement in two,
            contactless ways which do not affect a person&apos;s sleep.
          </b>
          The first method is to determine sleep stages through breathing sound
          and movement sound data analysis during sleep. People can get access
          to Asleep&apos;s sleep solutions by simply updating software on their
          smartphones or smart speakers, types of devices that are already
          widely used in a home environment. The second method is to use
          Asleep&apos;s unique Wi-Fi sensing technology. Wi-Fi sleep sensing
          technology can be easily integrated into IoT home appliances that use
          Wi-Fi, allowing a more precise and seamless breathing and movement
          tracing.
        </TechSubTextContainer>
      )}
    </Conatiner>
  );
}

export default TechSubText;

const Conatiner = styled.div`
  padding-top: 200px;

  ${mp[0]} {
    padding-top: 32px;
  }

  ${mp[1]} {
    padding-top: 72px;
  }
`;

const TechSubTextContainer = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 24px 32px 32px;
  border-radius: 15px;
  -webkit-backdrop-filter: blur(13px);
  backdrop-filter: blur(13px);
  background-color: rgba(35, 35, 36, 0.53);
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.72px;
  text-align: left;
  color: var(--text-in-dark-text-03);

  & span {
    text-decoration: underline;
    position: relative;
  }

  & > b {
    color: var(--text-in-dark-text-01);
  }

  ${mp[0]} {
    width: 560px;
    padding: 32.8px 36px 36px;
  }

  ${mp[1]} {
    width: 1400px;
    padding: 88px 67px;
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: ${({ locale }) => (locale === 'ko' ? 1.58 : 1.6)};
    letter-spacing: ${({ locale }) => (locale === 'ko' ? '-1.62px' : '0.36px')};
  }
`;
