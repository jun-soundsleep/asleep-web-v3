import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';
import { MXFlexCenteringSB } from '../../mixin/MXFlex';
import FullImageContainer from '../../atoms/Common/FullImageContainer';

function MissionSection({ missionTitle, missionBody }) {
  return (
    <Container>
      <ImageWrapper>
        <ImageContainer>
          <FullImage
            src={'/images/company/company_1_s_2x.jpg'}
            srcM={'/images/company/company_1_m_2x.jpg'}
            srcL={'/images/company/company_1_l_2x.jpg'}
          />
        </ImageContainer>
        <MissionWrapper>
          <Mission>{missionTitle}</Mission>
          <MissionBody dangerouslySetInnerHTML={{ __html: missionBody }} />
        </MissionWrapper>
      </ImageWrapper>
    </Container>
  );
}

export default MissionSection;

const Container = styled.section``;

const ImageContainer = styled.div`
  height: 504px;

  ${mp[0]} {
    height: 408px;
  }

  ${mp[1]} {
    height: 843px;
  }
`;

const FullImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ src }) => src && src}) 50% / cover no-repeat;

  ${mp[0]} {
    background: url(${({ srcM }) => srcM && srcM}) 50% / cover no-repeat;
  }

  ${mp[1]} {
    background: url(${({ srcL }) => srcL && srcL}) 50% / cover no-repeat;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
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

  ${mp[0]} {
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: -0.63px;
  }

  ${mp[1]} {
    font-size: 32px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: -1.44px;
  }
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

  ${mp[0]} {
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: -0.63px;
  }

  ${mp[1]} {
    font-size: 32px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: -1.44px;
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

  min-width: 320px;
  max-height: 416px;

  ${mp[0]} {
    min-width: 560px;
    max-height: 202px;
  }

  ${mp[1]} {
    min-width: 1265px;
    max-height: 427px;
  }
`;
