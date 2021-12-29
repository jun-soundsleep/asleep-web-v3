import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MainCardMission from '../../atoms/Main/MainCardMission';
import CardTitle from '../../atoms/Common/CardTitle';
import CardMoreButton from '../../atoms/Common/CardMoreButton';
import useTranslation from 'next-translate/useTranslation';
import { mp } from '../../../../styles/device';
import WhiteDim from '../../atoms/Common/WhiteDim';

function MainCard({
  margin,
  src,
  srcM,
  srcL,
  title,
  whiteTitleColor,
  href,
  category,
  oneColumn,
  missionColor,
  whiteDim,
  moreButtonColor,
  outer
}) {
  const { t } = useTranslation();
  const findOurMore = t('main:find_our_more');

  return (
    <>
      {outer ? (
        <a href={href} target="_blank" rel="noreferrer">
          <MainCardContainer
            margin={margin}
            src={src}
            oneColumn={oneColumn}
            srcM={srcM}
            srcL={srcL}
          >
            <TextWrapper>
              <MainCardMission
                item={category ? category : 'Mission'}
                color={missionColor}
              />
              <CardTitle
                item={title}
                margin="8px 0px 26px 0px"
                whiteColor={whiteTitleColor}
              />
              <CardMoreButton
                CardMoreButton
                item={findOurMore}
                href={href}
                color={moreButtonColor}
              />
            </TextWrapper>
            {whiteDim && <WhiteDim />}
          </MainCardContainer>
        </a>
      ) : (
        <Link href={href}>
          <a>
            <MainCardContainer
              margin={margin}
              src={src}
              oneColumn={oneColumn}
              srcM={srcM}
              srcL={srcL}
            >
              <TextWrapper>
                <MainCardMission
                  item={category ? category : 'Mission'}
                  color={missionColor}
                />
                <CardTitle
                  item={title}
                  margin="8px 0px 26px 0px"
                  whiteColor={whiteTitleColor}
                />
                <CardMoreButton
                  item={findOurMore}
                  CardMoreButton
                  color={moreButtonColor}
                  href={href}
                />
              </TextWrapper>
              {whiteDim && <WhiteDim />}
            </MainCardContainer>
          </a>
        </Link>
      )}
    </>
  );
}

export default MainCard;

const MainCardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ padding }) => (padding ? padding : '32px 24px 74px 24px')};
  border-radius: 22px;
  margin: ${({ margin }) => (margin ? margin : '')};
  background: url(${({ src }) => src && src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  position: relative;
  z-index: 1001;

  ${mp[0]} {
    background: url(${({ srcM }) => srcM && srcM});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    padding: ${({ oneColumn }) =>
      oneColumn ? '44px 24px 128px 24px' : '24px 24px 216px 24px'};
  }

  ${mp[1]} {
    background: url(${({ srcL }) => srcL && srcL});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    padding: ${({ oneColumn }) =>
      oneColumn ? '88px 0px 356px 44px' : '88px 0px 356px 44px'};
  }
`;

const TextWrapper = styled.div`
  z-index: 101;
`;
