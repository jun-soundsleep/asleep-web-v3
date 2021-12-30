import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';

function BusinessBodyTitle({ item }) {
  return (
    <BusinessBodyTitleContainer>
      {item.split('\n').map((line, idx) => (
        <>
          {line}
          <br />
        </>
      ))}
    </BusinessBodyTitleContainer>
  );
}

export default BusinessBodyTitle;

const BusinessBodyTitleContainer = styled.h3`
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.96px;
  text-align: left;
  color: var(--text-in-light-text-10);

  & > br {
    display: none;
  }

  ${mp[0]} {
    font-size: 24px;
    line-height: 1.38;
    letter-spacing: 0.24px;

    & > br {
      display: block;
    }
  }

  ${mp[1]} {
    font-size: 64px;
    line-height: 1.22;
    letter-spacing: 0.64px;
  }
`;
