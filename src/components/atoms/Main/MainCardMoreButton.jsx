import React from 'react';
import styled from '@emotion/styled';

function MainCardMoreButton({ item, margin }) {
  return (
    <MainCardMoreButtonContainer margin={margin}>
      {item}
      <img
        src="/image/icons/acomponents-icons-icons-arrow-up-right-blue.svg"
        alt=""
      />
    </MainCardMoreButtonContainer>
  );
}

export default MainCardMoreButton;

const MainCardMoreButtonContainer = styled.button`
  margin: ${({ margin }) => margin && margin};
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: 0.12px;
  text-align: left;
  color: var(--primary-primary-in-light);
`;
