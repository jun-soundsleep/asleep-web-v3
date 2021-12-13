import React from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import { MXFlex } from '../../mixin/MXFlex';
import FotterMoculeGroup from '../../mocules/Footer/FotterMoculeGroup';
import FootterAddressTitle from '../../atoms/Footer/FootterAddressTitle';
import FooterAddress from '../../atoms/Footer/FooterAddress';
import FooterExternalConnection from '../../atoms/Footer/FooterExternalConnection';
import Blank from '../../atoms/Blank';
import { mp } from '../../../../styles/device';
import {
  BIZ_ITEM,
  COMPANY_ITEM,
  CONTACT_ITEM,
  PEOPLE_ITEM,
  TECH_ITEM
} from '../../../data/footer/FOOTER_DATA';

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <FooterWrapper>
        <MXFlex>
          <div>
            <FotterMoculeGroup
              title="Company"
              item={COMPANY_ITEM}
              margin="0px 0px 48px"
            />
            <FotterMoculeGroup
              title="Biz"
              item={BIZ_ITEM}
              margin="0px 0px 48px"
            />
            <FotterMoculeGroup title="News" margin="0px 0px 48px" />
            <FooterExternalConnection
              item={t('footer:recruiting')}
              href="https://aboard-haircut-fe6.notion.site/Job-Board-fd68685235fd47fb98e0932bdeff6ebd"
            />
            <FooterExternalConnection
              item={t('footer:blog')}
              href="
          https://aboard-haircut-fe6.notion.site/Job-Board-fd68685235fd47fb98e0932bdeff6ebd"
            />
          </div>
          <div>
            <FotterMoculeGroup
              title="Tech"
              item={TECH_ITEM}
              rightItem={true}
              margin="0px 0px 86px"
            />
            <FotterMoculeGroup
              title="People"
              item={PEOPLE_ITEM}
              rightItem={true}
            />
            <FotterMoculeGroup
              title="Contact"
              item={CONTACT_ITEM}
              rightItem={true}
            />
          </div>
        </MXFlex>
        <Blank height={'84px'} />
        <FootterAddressTitle />
        <FooterAddress margin={'12px 0px 0px'} />
      </FooterWrapper>
      <OverLargeFooter>
        <MXFlex>
          <FotterMoculeGroup
            title="Company"
            item={COMPANY_ITEM}
            width={'auto'}
            margin="0px 48px 0px 0px"
          />
          <FotterMoculeGroup
            title="Tech"
            item={TECH_ITEM}
            width={'auto'}
            margin="0px 48px 0px 0px"
          />
          <FotterMoculeGroup
            title="Biz"
            item={BIZ_ITEM}
            width={'auto'}
            margin="0px 48px 0px 0px"
          />
          <FotterMoculeGroup
            title="People"
            item={PEOPLE_ITEM}
            width={'auto'}
            margin="0px 48px 0px 0px"
          />
          <FotterMoculeGroup
            title="News"
            width={'auto'}
            margin="0px 48px 0px 0px"
          />
          <div>
            <FotterMoculeGroup
              title="Contact"
              item={CONTACT_ITEM}
              width={'auto'}
              margin="0px 48px 77px 0px"
            />
            <FooterExternalConnection
              item={t('footer:recruiting')}
              href="https://aboard-haircut-fe6.notion.site/Job-Board-fd68685235fd47fb98e0932bdeff6ebd"
            />
            <FooterExternalConnection
              item={t('footer:blog')}
              href="
          https://aboard-haircut-fe6.notion.site/Job-Board-fd68685235fd47fb98e0932bdeff6ebd"
            />
          </div>
        </MXFlex>
        <Blank height={'100px'} />
        <FootterAddressTitle />
        <FooterAddress margin={'12px 0px 0px'} />
      </OverLargeFooter>
    </>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  padding: 44px 0px 64px 22px;
  background-color: var(--white);
  border-top: 2px solid var(--very-light-pink);

  ${mp[0]} {
    display: none;
  }
`;

const OverLargeFooter = styled.footer`
  display: none;
  background-color: var(--white);
  border-top: 2px solid var(--very-light-pink);
  padding: 40px 0px 140px 104px;

  ${mp[0]} {
    display: block;
  }
`;
