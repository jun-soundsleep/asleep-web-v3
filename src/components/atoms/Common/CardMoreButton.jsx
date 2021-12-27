import React from 'react';
import styled from '@emotion/styled';
import { MXFlexCenteringFS, MXFlexCenteringSB } from '../../mixin/MXFlex';
import { mp } from '../../../../styles/device';

function CardMoreButton({ item, margin, color }) {
  return (
    <Wrapper>
      <MainCardMoreButtonContainer margin={margin} color={color}>
        {item}
      </MainCardMoreButtonContainer>
      <MoreButtonContainer>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.61 9.515a.375.375 0 0 0 .53 0l3.125-3.125a.375.375 0 0 0 0-.53L7.14 2.735a.375.375 0 1 0-.53.53L9.095 5.75h-7.22a.375.375 0 1 0 0 .75h7.22L6.61 8.985a.375.375 0 0 0 0 .53z"
            fill={color ? color : '#406BFF'}
          />
        </svg>
      </MoreButtonContainer>
    </Wrapper>
  );
}

export default CardMoreButton;

const MainCardMoreButtonContainer = styled.button`
  margin: ${({ margin }) => (margin ? margin : '0px 8px 0px 0px')};
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: 0.12px;
  text-align: left;
  color: ${({ color }) => (color ? color : 'var(--primary-primary-in-light)')};

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
