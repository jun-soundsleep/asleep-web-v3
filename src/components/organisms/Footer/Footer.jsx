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

function Footer() {
  const router = useRouter();
  const { t } = useTranslation();

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
              href="https://aboard-haircut-fe6.notion.site/Job-Board-fd68685235fd47fb98e0932bdeff6ebd"
              darkMode={checkIfTechPageOrNot()}
            />
            <FooterExternalConnection
              item={t('footer:blog')}
              href="https://medium.com/asleepblog"
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
              margin="52px 0px 0px"
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
        <Wrapper>
          <MXFlex>
            <FotterMoculeGroup
              darkMode={checkIfTechPageOrNot()}
              title="Company"
              item={COMPANY_ITEM}
              width={'auto'}
            />
            <FotterMoculeGroup
              darkMode={checkIfTechPageOrNot()}
              title="Tech"
              item={TECH_ITEM}
              width={'auto'}
            />
            <FotterMoculeGroup
              darkMode={checkIfTechPageOrNot()}
              title="Biz"
              item={BIZ_ITEM}
              width={'auto'}
            />
            <FotterMoculeGroup
              darkMode={checkIfTechPageOrNot()}
              title="People"
              item={PEOPLE_ITEM}
              width={'auto'}
            />
            <FotterMoculeGroup
              darkMode={checkIfTechPageOrNot()}
              title="News"
              width={'auto'}
            />
            <div>
              <FotterMoculeGroup
                darkMode={checkIfTechPageOrNot()}
                title="Contact"
                item={CONTACT_ITEM}
                width={'auto'}
                margin="0px 48px 77px 0px"
              />
              <OvertabletHeight />
              <FooterExternalConnection
                darkMode={checkIfTechPageOrNot()}
                item={t('footer:recruiting')}
                href="https://aboard-haircut-fe6.notion.site/Job-Board-fd68685235fd47fb98e0932bdeff6ebd"
              />
              <FooterExternalConnection
                item={t('footer:blog')}
                darkMode={checkIfTechPageOrNot()}
                href="https://medium.com/asleepblog"
              />
            </div>
          </MXFlex>
          <Blank height={'100px'} />
          <FootterAddressTitle darkMode={checkIfTechPageOrNot()} />
          <FooterAddress
            margin={'12px 0px 0px'}
            darkMode={checkIfTechPageOrNot()}
          />
        </Wrapper>
      </OverLargeFooter>
    </>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  padding: 44px 20px 64px 22px;
  background-color: var(--white);
  background-color: ${({ darkMode }) =>
    darkMode ? ' var(--backgorund-bg-04) ' : 'var(--text-in-dark-text-00)'};
  border-top: 2px solid
    ${({ darkMode }) =>
      darkMode
        ? 'var(--components-components-06)'
        : 'var(--components-components-02)'};

  ${mp[0]} {
    display: none;
  }
`;

const OverLargeFooter = styled.footer`
  display: none;
  background-color: ${({ darkMode }) =>
    darkMode ? ' var(--backgorund-bg-04) ' : 'var(--text-in-dark-text-00)'};
  border-top: 2px solid
    ${({ darkMode }) =>
      darkMode
        ? 'var(--components-components-06)'
        : 'var(--components-components-02)'};

  ${mp[0]} {
    display: block;
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  display: none;
  width: 100%;
  height: 100%;

  ${mp[0]} {
    display: block;
    max-width: 1060px;
    margin: 0 auto;
    padding: 40px 110px 140px 100px;
  }

  ${mp[1]} {
    max-width: 1500px;
    padding: 87px 110px 140px 100px;
  }
`;

const OvertabletHeight = styled.div`
  display: none;

  ${mp[0]} {
    display: block;
    height: 78px;
  }
  ${mp[1]} {
    height: 150px;
  }
`;
