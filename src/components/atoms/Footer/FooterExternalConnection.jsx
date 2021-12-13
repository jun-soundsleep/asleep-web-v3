import React from 'react';
import styled from '@emotion/styled';
import { MXFlexVerticalCentering } from '../../mixin/MXFlex';
import { mp } from '../../../../styles/device';

function FooterExternalConnection({ item, margin, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <FooterExternalConnectionContainer margin={margin}>
        <Item>{item}</Item>
        <img
          width={14}
          height={14}
          src="/images/icon/components-icons-icons-arrow-up-right.svg"
          alt="icons-arrow-up-right"
        />
      </FooterExternalConnectionContainer>
    </a>
  );
}

export default FooterExternalConnection;

const FooterExternalConnectionContainer = styled(MXFlexVerticalCentering)`
  margin: ${({ margin }) => margin && margin};

  & :hover {
    color: var(--black);
    text-decoration: underline;
  }
`;

const Item = styled.div`
  margin: 0px 8px 0px 0px;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.86;
  letter-spacing: -0.63px;
  text-align: left;
  color: var(--brownish-grey);
  cursor: pointer;

  ${mp[1]} {
    font-size: 16px;
  }
`;
