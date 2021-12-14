import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MainCardMission from '../../atoms/Main/MainCardMission';
import MainCardTitle from '../../atoms/Main/MainCardTitle';
import MainCardMoreButton from '../../atoms/Main/MainCardMoreButton';
import useTranslation from 'next-translate/useTranslation';
import { mp } from '../../../../styles/device';
import WhiteDim from '../../atoms/Common/WhiteDim';

function MainCard({ margin, src, title, href, category, oneColumn }) {
  const router = useRouter();
  const { t } = useTranslation();
  const findOurMore = t('main:find_our_more');

  return (
    <Link href={href} locale={router.locale} style={{ zIndex: '1000' }}>
      <a>
        <MainCardContainer margin={margin} src={src} oneColumn={oneColumn}>
          <MainCardMission item={category ? category : 'Mission'} />
          <MainCardTitle item={title} margin="8px 0px 26px 0px" />
          <MainCardMoreButton item={findOurMore} href={href} />
          <WhiteDim />
        </MainCardContainer>
      </a>
    </Link>
  );
}

export default MainCard;

const MainCardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ padding }) => (padding ? padding : '32px 0px 74px 24px')};
  border-radius: 22px;
  margin: ${({ margin }) => (margin ? margin : '24px auto 0px')};
  background: url(${({ src }) => src && src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  position: relative;
  z-index: 1001;

  ${mp[0]} {
    padding: ${({ oneColumn }) =>
      oneColumn ? '44px 0px 128px 24px' : '24px 0px 216px 24px'};
  }

  ${mp[1]} {
    padding: ${({ oneColumn }) =>
      oneColumn ? '88px 0px 356px 44px' : '88px 0px 356px 44px'};
  }
`;
