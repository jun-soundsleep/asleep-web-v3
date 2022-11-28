import React from 'react';
import styled from '@emotion/styled';
import { MXFlexCenteringFS, MXFlexCenteringSB } from '../../mixin/MXFlex';
import { mp } from '../../../../styles/device';
import { useRouter } from 'next/router';

function TechCardMoreButton({ item, margin }) {
  const router = useRouter();

  return (
    <Wrapper locale={router.locale}>
      <MainCardMoreButtonContainer margin={margin}>
        {item}
      </MainCardMoreButtonContainer>
      <MoreButtonContainer>
        <img src="/images/icon/acomponents-icons-icons-arrow-up-right-light-blue.svg" />
      </MoreButtonContainer>
    </Wrapper>
  );
}

export default TechCardMoreButton;

const MainCardMoreButtonContainer = styled.button`
  margin: ${({ margin }) => (margin ? margin : '0px 8px 0px 0px')};
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: 0.12px;
  text-align: left;
  color: var(--sub-sub-04);

  ${mp[0]} {
    font-size: 13px;
  }

  ${mp[1]} {
    font-size: 24px;
  }
`;

const MoreButtonContainer = styled(MXFlexCenteringSB)`
  width: 12px;
  height: 12px;

  ${mp[0]} {
    width: 13px;
    height: 13px;
  }

  ${mp[1]} {
    width: 24px;
    height: 24px;
  }
`;

const Wrapper = styled(MXFlexCenteringFS)`
  margin-left: 13.5px;
  position: absolute;
  left: ${({ locale }) => (locale === 'en' ? '24px' : '24px')};
  bottom: ${({ locale }) => (locale === 'en' ? '40px' : '40px')};
  ${mp[0]} {
    left: ${({ locale }) => (locale === 'en' ? '24px' : '24px')};
    bottom: ${({ locale }) => (locale === 'en' ? '59px' : '115px')};
  }

  ${mp[1]} {
    left: ${({ locale }) => (locale === 'en' ? '44px' : '44px')};
    bottom: ${({ locale }) => (locale === 'en' ? '41px' : '187px')};
  }
`;
