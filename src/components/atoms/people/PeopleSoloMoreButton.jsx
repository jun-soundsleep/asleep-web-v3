import React from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import { MXFlexVerticalCentering } from '../../mixin/MXFlex';

function PeopleSoloMoreButton({ item }) {
  const { t } = useTranslation();
  const interview = t('people:go_to_interview');

  return (
    <Container>
      <span>{interview}</span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.72 19.639a.75.75 0 0 0 1.06 0l6.25-6.25a.75.75 0 0 0 0-1.06l-6.25-6.25a.75.75 0 1 0-1.06 1.06l4.97 4.97H4.25a.75.75 0 0 0 0 1.5h14.44l-4.97 4.97a.75.75 0 0 0 0 1.06z"
          fill="#406bff"
        />
      </svg>
    </Container>
  );
}

export default PeopleSoloMoreButton;

const Container = styled(MXFlexVerticalCentering)`
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: -0.48px;
  text-align: left;
  color: var(--primary-primary-in-light);
  span {
    margin-right: 8px;
  }
`;
