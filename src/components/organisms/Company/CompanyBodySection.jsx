import React, { useState } from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';
import { MXFlexCenteringSB } from '../../mixin/MXFlex';
import FullImageContainer from '../../atoms/Common/FullImageContainer';
import { useRouter } from 'next/router';
import CompanyVisionHoveredContents from '../../atoms/Company/CompanyVisionHoveredContents';

function CompanyBodySection() {
  const [firstHoverContents, setfirstHoverContents] = useState(false);
  const [secondHoverContents, setSecondHover] = useState(false);
  const router = useRouter();

  return (
    <Section>
      {router.locale === 'ko' ? (
        <CompanySubTextContainer>
          <b>에이슬립은 단순한 고민에서 시작되었습니다.</b> 어떻게 하면 사람들이
          밤에 더 잘 자고, 활기차게 하루를 시작할 수 있을까? 밤에 잠을 충분히
          자지 못하면 낮 시간의 활동에 부정적인 영향을 미치게 되는데,{' '}
          <span
            onMouseOver={() => {
              setfirstHoverContents(true);
            }}
            onMouseLeave={() => {
              setfirstHoverContents(false);
            }}
          >
            이는 곧 수면으로 인해 전체적인 삶의 질이 떨어질 수도 있다는 것을
            의미
          </span>
          {firstHoverContents && (
            <CompanyVisionHoveredContents
              item={
                '수면은 크게 낮에 쌓인 신체와 정신의 피로를 풀어주고 에너지를 충전하는 비 렘수면과, 꿈을 꾸며 기억력에 영향을 미치며 정신적인 피로는 물론 감정 순화에 영향을 주는 렘수면으로 구분됩니다. 특히 비 렘수면의 경우 수면의 깊이에 따라 세 단계로 구분되는 특징이 있는데, 이렇게 수면은 단계별로 하룻밤에도 여러 사이클로 반복됩니다. 수면의 사이클이 적절하게 충족되지 않는다면, 주간 활동에 부정적인 영향을 미치게 됩니다.'
              }
            ></CompanyVisionHoveredContents>
          )}
          합니다.
          <br />
          <br />
          오늘날 수면 관련 산업은 나날이 성장하는 추세이지만, 아이러니하게도
          수면 장애를 호소하는 사람 또한 매년 같이 늘고 있습니다. 실제로 국내
          수면장애 환자의 경우 지난 10년간 연평균 약 8%의 속도로 2배 넘게
          급증하였습니다.
          <br />
          <br />
          수면 문제를 해결하기 위해서는 일단 어떻게 자고 있는지부터 알아야
          합니다. 현재 자신의 수면 상태를 가장 정확하게 진단하는 방법은 병원에서
          수면다원검사를 받는 것입니다.{' '}
          <span
            onMouseOver={() => {
              setSecondHover(true);
            }}
            onMouseLeave={() => {
              setSecondHover(false);
            }}
          >
            하지만 수면다원검사의 경우 예약 과정의 어려움, 측정의 불편함, 분석
            과정의 복잡함 등 여러 불편함을 동반하고 있습니다.{' '}
          </span>
          {secondHoverContents && (
            <CompanyVisionHoveredContents
              item={
                '수면다원검사는 병원이라는 낯선 환경에서 수십 개의 센서를 몸에 부착하고 자야 하기 때문에 수면장애를 가진 사람들에게 부담이 됩니다. 그리고 매일 반복적으로 발생하는 수면을 단 하룻밤의 측정으로 평가해야 한다는 것도 쉽지 않습니다. 또한 수면에 영향을 주는 낮 시간의 행동을 파악할 수 없을 뿐더러, 검사 결과 수면 질환이 발견되지 않으면 보험료의 지원을 받기 어려울 수도 있습니다.'
              }
            ></CompanyVisionHoveredContents>
          )}
          <br />
          <br />
          이를 보완하기 위해 수면의 트래킹을 가정으로 옮기는 슬립테크 시장이
          각광받고 있습니다. 각종 애플리케이션이나 스마트 워치 등을 이용한 수면
          트래킹 서비스가 제공되고 있으나, 이 또한 착용으로 인한 불편함과 측정의
          정확도가 낮다는 문제가 있습니다. 특히 낮은 정확도는 결국 수면 개선과
          치료 영역의 시장과 이어질 수 없는 원인이 되어, 결국 수면의 토탈 케어로
          나아갈 수 없게 하는 장애물이 됩니다. <br />
          <br />
          만약 더 정확한 수면 단계 분석이라는 첫 단추를 꿰는 것이 가능하다면,
          가정에서도 개인화되고 지속적인 수면 개선 및 치료의 시대가 도래할
          것입니다. 이에 에이슬립은 가정에서의 수면 측정 자동화 및 AI기반 분석
          엔진 Asleep Universe를 통해 편리하고 정확한 수면 트래킹 솔루션을
          제시합니다.
        </CompanySubTextContainer>
      ) : (
        <CompanySubTextContainer>
          <b>Asleep started with these simple questions.</b> How can people
          sleep better at night and start the day feeling refreshed? Not getting
          enough sleep at night negatively affects daytime activities,{' '}
          <span
            onMouseOver={() => {
              setfirstHoverContents(true);
            }}
            onMouseLeave={() => {
              setfirstHoverContents(false);
            }}
          >
            which means that sleep can reduce the overall quality of life.
          </span>{' '}
          {firstHoverContents && (
            <CompanyVisionHoveredContents
              item={
                'Sleep is largely divided into non-REM sleep, which relieves the fatigue of the body and mind accumulated during the day and charges energy, and REM sleep, which affects memory by dreaming and mental fatigue as well as emotional purification. In particular, non-REM sleep is divided into three stages according to the depth of sleep, and sleep is repeated several cycles per night step. If the sleep cycle is not properly met, it will negatively affect daytime activities.'
              }
            ></CompanyVisionHoveredContents>
          )}
          <br />
          <br />
          The sleep industry is growing at a fast rate, but ironically, the
          number of sleep disorder reports is also increasing. In fact, the
          number of patients with sleep disorders in Korea has doubled over the
          past decade at an annual average increase rate of approximately 8%.{' '}
          <br />
          <br />
          To solve sleep problems, it is necessary to first understand how
          people sleep. The most accurate way to assess sleep is to take a
          polysomnography test. However, taking polysomnography tests can be
          tough;{' '}
          <span
            onMouseOver={() => {
              setSecondHover(true);
            }}
            onMouseLeave={() => {
              setSecondHover(false);
            }}
          >
            {' '}
            one might face difficulties in making appointments, measurement
            procedures are inconvenient, and the data analysis process is rather
            complex.
          </span>{' '}
          {secondHoverContents && (
            <CompanyVisionHoveredContents
              item={
                'Polysomnography tests are burdensome for people with sleep disorders because they have to sleep with dozens of sensors attached to their bodies in an unfamiliar environment: the hospital. Additionally, it is not easy to evaluate a person`s overall sleep, which happens every day, through data collected over one single night. Furthermore, daytime activities that affect sleep cannot be identified through polysomnography tests. If the test result do not show signs of sleep disorder, it may be difficult to even receive insurance support.'
              }
            ></CompanyVisionHoveredContents>
          )}
          <br />
          <br />
          As a means to alleviate these difficulties, the sleep tech market,
          which attempts to enable sleep tracking at home, has been brought to
          light. There exist various sleep tracking service applications and
          smartwatches, but people have to go through the discomfort of
          physically wearing digital devices and the accuracy of existing
          services is low. The low accuracy inherent in these devices becomes a
          major obstacle in connecting sleep-related services and medical sleep
          therapy, thereby hindering the development of technology that takes
          care of a person&apos;s sleep.
          <br />
          <br />
          Achieving accurate sleep stage analysis will bring about a new era
          where personalized and sustainable sleep therapy will be available at
          home. Therefore, Asleep presents a convenient and accurate sleep
          tracking solution through Asleep Universe, an AI-based engine that
          automates sleep measurement at home.
        </CompanySubTextContainer>
      )}
    </Section>
  );
}

export default CompanyBodySection;

const Section = styled.section`
  padding-bottom: 60px;
`;

const CompanySubTextContainer = styled.div`
  position: relative;
  width: 320px;
  margin: 32px auto 0px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 0.14px;
  text-align: left;
  color: var(--text-in-light-text-04);

  & span {
    text-decoration: underline;
    position: relative;
  }

  & > b {
    font-weight: normal;
    color: var(--text-in-light-text-09);
  }

  ${mp[0]} {
    width: 560px;
    margin: 64px auto 0px;
  }

  ${mp[1]} {
    width: 1265px;
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: -1.44px;
    margin: 200px auto 280px;
  }
`;
