import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CardTitle from '../../atoms/Common/CardTitle';
import useTranslation from 'next-translate/useTranslation';
import useWindowSize from '../../../../hooks/userWindowSize';
import ButtonMoreInfoInCard from '../../atoms/Common/ButtonMoreInfoInCard';

function TechCard({
  margin,
  src,
  srcM,
  srcL,
  title,
  whiteTitleColor,
  href,
  oneColumn,
  modalListener
}) {
  const router = useRouter();
  const { t } = useTranslation();
  const findOurMore = t('main:find_our_more');

  const size = useWindowSize();
  let overTablet = size.width > 768;

  return (
    <>
      {overTablet ? (
        <TechContainer
          margin={margin}
          src={src}
          oneColumn={oneColumn}
          srcM={srcM}
          srcL={srcL}
          onClick={modalListener}
        >
          <CardTitle
            item={title}
            margin="8px 0px 26px 0px"
            whiteColor={whiteTitleColor}
          />
          <ButtonMoreInfoInCard
            hexColor={'#D8E1FF'}
            item={findOurMore}
            itemColor={'var(--sub-sub-04)'}
            fontWeight={500}
          />
        </TechContainer>
      ) : (
        <Link href={href} locale={router.locale}>
          <a>
            <TechContainer
              margin={margin}
              src={src}
              oneColumn={oneColumn}
              srcM={srcM}
              srcL={srcL}
            >
              <CardTitle
                item={title}
                margin="8px 0px 26px 0px"
                whiteColor={whiteTitleColor}
              />
              <ButtonMoreInfoInCard
                hexColor={'#D8E1FF'}
                item={findOurMore}
                itemColor={'var(--sub-sub-04)'}
                fontWeight={500}
              />
            </TechContainer>
          </a>
        </Link>
      )}
    </>
  );
}

export default TechCard;

const TechContainer = styled.div`
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
  /* z-index: 1001; */

  ${mp[0]} {
    background: url(${({ srcM }) => srcM && srcM});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  ${mp[1]} {
    background: url(${({ srcL }) => srcL && srcL});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    padding: ${({ padding }) => (padding ? padding : '88px 36px 0px 44px')};
  }
`;
