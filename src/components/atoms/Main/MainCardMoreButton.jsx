import React from 'react';
import styled from '@emotion/styled';
import {
  MXFlex,
  MXFlexCenteringFS,
  MXFlexCenteringSB
} from '../../mixin/MXFlex';
import { useMediaQuery } from 'react-responsive';
import { mp } from '../../../../styles/device';

function MainCardMoreButton({ item, margin }) {
  const mediumView = useMediaQuery({ query: '(min-width: 768px)' });
  const largeView = useMediaQuery({ query: '(min-width: 1920px)' });
  return (
    <Wrapper>
      <MainCardMoreButtonContainer margin={margin}>
        {item}
      </MainCardMoreButtonContainer>
      <MoreButtonContainer>
        <img
          src="/images/icon/acomponents-icons-icons-arrow-up-right-blue.svg"
          // width={largeView ? 24 : mediumView ? 13 : 12}
          // height={largeView ? 24 : mediumView ? 13 : 12}
          objectfit={'cover'}
        />
      </MoreButtonContainer>
    </Wrapper>
  );
}

export default MainCardMoreButton;

const MainCardMoreButtonContainer = styled.button`
  margin: ${({ margin }) => (margin ? margin : '0px 8px 0px 0px')};
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: 0.12px;
  text-align: left;
  color: var(--primary-primary-in-light);

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
`;
