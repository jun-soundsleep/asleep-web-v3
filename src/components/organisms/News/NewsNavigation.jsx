import React from 'react';
import NewsTitle from '../../atoms/News/NewsTitle';
import IconImage from '../../atoms/Common/IconImage';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import { mp } from '../../../../styles/device';

function NewsNavigation(props) {
  const { t } = useTranslation();
  const title = t('news:title');

  return (
    <>
      <Black />
      <NewsTitle item={title} />
      <IconContainer>
        <IconImage
          src={'/images/icon/newspaper.jpg'}
          srcM={'/images/icon/newspaper@2x.jpg'}
          srcL={'/images/icon/newspaper@3x.jpg'}
          sw={'54px'}
          sh={'40px'}
          mw={'42px'}
          mh={'32px'}
          lw={'95px'}
          lh={'72px'}
        />
      </IconContainer>
    </>
  );
}

export default NewsNavigation;

const Black = styled.div`
  padding-top: 147px;

  ${mp[1]} {
    padding-top: 192px;
  }
`;

const IconContainer = styled.div`
  margin-top: 39px;

  ${mp[1]} {
    margin-top: 72px;
  }
`;
