import React from 'react';
import styled from '@emotion/styled';
import BigTitle from '../../atoms/Common/BigTitle';
import useTranslation from 'next-translate/useTranslation';
import IconImage from '../../atoms/Common/IconImage';
import { MXFlexCentering } from '../../mixin/MXFlex';
import BusinessSubTitle from '../../atoms/Business/BusinessSubTitle';
import { mp } from '../../../../styles/device';

function BusinessMainSection() {
  const { t } = useTranslation();
  const title = t('business:title');
  const subTitle = t('business:sub_title');

  return (
    <BusinessMainSectionContainer>
      <BigTitleContainer>
        <BigTitle item={title} color={'var(--text-in-light-text-10);'} />
      </BigTitleContainer>
      <ImageContainer>
        <IconImage
          src="/images/icon/01-14995884-2@2x.png"
          srcM="/images/icon/01-14995884-2@2x.png"
          srcL="/images/icon/01-14995884-2@3x.png"
          sw={'23px'}
          sh={'47px'}
          mw={'23px'}
          mh={'47px'}
          lw={'51.8px'}
          lh={'91.3px'}
        />
      </ImageContainer>
      <SubTitleContainer>
        <BusinessSubTitle item={subTitle} />
      </SubTitleContainer>
    </BusinessMainSectionContainer>
  );
}

export default BusinessMainSection;

const BusinessMainSectionContainer = styled.section`
  padding: var(--nav-height) 0px 128px 0px;
  margin-top: 89px;

  ${mp[0]} {
    padding: var(--nav--height--over-tablet) 0px 100px 0px;
  }
`;

const BigTitleContainer = styled(MXFlexCentering)`
  margin: 0 20px;
`;

const ImageContainer = styled(MXFlexCentering)`
  margin: 36px auto;

  ${mp[1]} {
    margin: 48px auto 72px;
  }
`;

const SubTitleContainer = styled(MXFlexCentering)`
  margin: 36px auto;
`;
