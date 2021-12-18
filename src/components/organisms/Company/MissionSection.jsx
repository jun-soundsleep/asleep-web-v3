import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';
import { MXFlexCenteringSB } from '../../mixin/MXFlex';
import FullImageContainer from '../../atoms/Common/FullImageContainer';

function MissionSection({ missionTitle, missionBody }) {
  return (
    <Container>
      <ImageWrapper>
        {/* <Background
          src={'/images/company/company_1_s_2x.jpg'}
          srcM={'/images/company/company_1_m_2x.jpg'}
          srcL={'/images/company/company_1_l_2x.jpg'}
        ></Background> */}
        <FullImageContainer
          src={'/images/company/company_1_s_2x.jpg'}
          srcM={'/images/company/company_1_m_2x.jpg'}
          srcL={'/images/company/company_1_l_2x.jpg'}
        />
        <MissionWrapper>
          <Mission>{missionTitle}</Mission>
          <MissionBody>{missionBody}</MissionBody>
        </MissionWrapper>
      </ImageWrapper>
    </Container>
  );
}

export default MissionSection;

const Container = styled.section``;

const ImageWrapper = styled.div`
  position: relative;
  height: 504px;
`;

const Mission = styled.h2`
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.64px;
  text-align: center;
  color: var(--text-in-light-text-10);
`;

const MissionBody = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.72px;
  text-align: center;
  color: var(--text-in-light-text-06);

  b {
    color: var(--text-in-light-text-09);
  }
`;

const MissionWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px 22.5px 58px 22px;
  border-radius: 20px;
  -webkit-backdrop-filter: blur(13px);
  backdrop-filter: blur(13px);
  background-color: var(--alpha-alpha-03);
`;
