import React, { useState } from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';
import { MXFlexCenteringSB } from '../../mixin/MXFlex';
import FullImageContainer from '../../atoms/Common/FullImageContainer';
import { useRouter } from 'next/router';

function CompanyBodySection({ item }) {
  const router = useRouter();
  const [hoverContents, setHover] = useState(false);

  return (
    <section>
      <Body>{item}</Body>
      <HoverContents></HoverContents>
    </section>
  );
}

export default CompanyBodySection;

const Body = styled.p`
  padding: 32px 20px 64px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: 0.14px;
  text-align: left;
  color: var(--text-in-light-text-04);

  b {
    color: var(--text-in-light-text-09);
  }
`;

const HoverContents = styled.div`
  padding: 32.8px 24px 24px;
  -webkit-backdrop-filter: blur(13px);
  backdrop-filter: blur(13px);
  box-shadow: 0 4px 30px 0 rgba(183, 183, 183, 0.25);
  background-color: var(--alpha-alpha-04);
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.56px;
  text-align: left;
  color: var(--text-in-light-text-04);
`;
