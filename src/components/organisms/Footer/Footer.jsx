import React from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import { MXFlex } from '../../mixin/MXFlex';
import FotterMoculeGroup from '../../mocules/Footer/FotterMoculeGroup';
import FootterAddressTitle from '../../atoms/Footer/FootterAddressTitle';
import FooterAddress from '../../atoms/Footer/FooterAddress';
import FooterExternalConnection from '../../atoms/Footer/FooterExternalConnection';
import Blank from '../../atoms/Common/Blank';
import { mp } from '../../../../styles/device';
import {
  BIZ_ITEM,
  COMPANY_ITEM,
  CONTACT_ITEM,
  PEOPLE_ITEM,
  TECH_ITEM
} from '../../../data/footer/FOOTER_DATA';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';

function Footer() {
  const router = useRouter();
  const { t } = useTranslation();
  const largeView = useMediaQuery({ query: '(min-width: 1920px)' });

  const checkIfTechPageOrNot = () => {
    return router.pathname === '/technology';
  };

  return (
    <>
      <FooterWrapper darkMode={checkIfTechPageOrNot()}>
        <MXFlex>
          <div>
            <FotterMoculeGroup
              title="Company"
              item={COMPANY_ITEM}
              margin="0px 0px 
              48px"
              darkMode={checkIfTechPageOrNot()}
            />
            <FotterMoculeGroup
              darkMode={checkIfTechPageOrNot()}
              title="Biz"
              item={BIZ_ITEM}
              margin="0px 0px 
              48px"
            />
            <FotterMoculeGroup
              darkMode={checkIfTechPageOrNot()}
              title="News"
              margin="0px 0px 48px"
            />
            <FooterExternalConnection
              item={t('footer:recruiting')}
              href="https://ab
              oard-haircut-fe6.notion.site/Job-Board-fd68685235fd47fb98e0932bdeff6ebd"
              darkMode={checkIfTechPageOrNot()}
            />
            <FooterExternalConnection
              item={t('footer:blog')}
              href="https://aboard-haircut-fe6.notion.site/Job-Board-fd68685235fd47fb98e0932bdeff6ebd"
              darkMode={checkIfTechPageOrNot()}
            />
          </div>
          <div>
            <FotterMoculeGroup
              darkMode={checkIfTechPageOrNot()}
              title="Tech"
              item={TECH_ITEM}
              rightItem={true}
              margin="0px 0px 86px"
            />
            <FotterMoculeGroup
              darkMode={checkIfTechPageOrNot()}
              title="People"
              item={PEOPLE_ITEM}
              rightItem={true}
            />
            <FotterMoculeGroup
              darkMode={checkIfTechPageOrNot()}
              title="Contact"
              item={CONTACT_ITEM}
              rightItem={true}
            />
          </div>
        </MXFlex>
        <Blank height={'84px'} />
        <FootterAddressTitle darkMode={checkIfTechPageOrNot()} />
        <FooterAddress
          margin={'12px 0px 0px'}
          darkMode={checkIfTechPageOrNot()}
        />
      </FooterWrapper>
      <OverLargeFooter darkMode={checkIfTechPageOrNot()}>
        <MXFlex>
          <FotterMoculeGroup
            darkMode={checkIfTechPageOrNot()}
            title="Company"
            item={COMPANY_ITEM}
            width={'auto'}
            margin={largeView ? '0px 170px 0px 0px' : '0px 48px 0px 0px'}
          />
          <FotterMoculeGroup
            darkMode={checkIfTechPageOrNot()}
            title="Tech"
            item={TECH_ITEM}
            width={'auto'}
            margin={largeView ? '0px 170px 0px 0px' : '0px 48px 0px 0px'}
          />
          <FotterMoculeGroup
            darkMode={checkIfTechPageOrNot()}
            title="Biz"
            item={BIZ_ITEM}
            width={'auto'}
            margin={largeView ? '0px 170px 0px 0px' : '0px 48px 0px 0px'}
          />
          <FotterMoculeGroup
            darkMode={checkIfTechPageOrNot()}
            title="People"
            item={PEOPLE_ITEM}
            width={'auto'}
            margin={largeView ? '0px 170px 0px 0px' : '0px 48px 0px 0px'}
          />
          <FotterMoculeGroup
            darkMode={checkIfTechPageOrNot()}
            title="News"
            width={'auto'}
            margin={largeView ? '0px 170px 0px 0px' : '0px 48px 0px 0px'}
          />
          <div>
            <FotterMoculeGroup
              darkMode={checkIfTechPageOrNot()}
              title="Contact"
              item={CONTACT_ITEM}
              width={'auto'}
              margin="0px 48px 77px 0px"
            />
            <FooterExternalConnection
              darkMode={checkIfTechPageOrNot()}
              item={t('footer:recruiting')}
              href="https://aboard-haircut-fe6.notion.site/Job-Board-fd68685235fd47fb98e0932bdeff6ebd"
            />
            <FooterExternalConnection
              item={t('footer:blog')}
              darkMode={checkIfTechPageOrNot()}
              href="
          https://aboard-haircut-fe6.notion.site/Job-Board-fd68685235fd47fb98e0932bdeff6ebd"
            />
          </div>
        </MXFlex>
        <Blank height={'100px'} />
        <FootterAddressTitle darkMode={checkIfTechPageOrNot()} />
        <FooterAddress
          margin={'12px 0px 0px'}
          darkMode={checkIfTechPageOrNot()}
        />
      </OverLargeFooter>
    </>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  padding: 44px 0px 64px 22px;
  background-color: var(--white);
  background-color: ${({ darkMode }) =>
    darkMode ? ' var(--backgorund-bg-04) ' : 'var(--text-in-dark-text-00)'};
  border-top: 2px solid var(--components-components-02);

  ${mp[0]} {
    display: none;
  }
`;

const OverLargeFooter = styled.footer`
  display: none;
  background-color: ${({ darkMode }) =>
    darkMode ? ' var(--backgorund-bg-04) ' : 'var(--text-in-dark-text-00)'};
  border-top: 2px solid var(--components-components-02);
  padding: 40px 0px 140px 104px;

  ${mp[0]} {
    display: block;
  }

  ${mp[0]} {
    padding: 87px 0px 140px 280px;
  }
`;
