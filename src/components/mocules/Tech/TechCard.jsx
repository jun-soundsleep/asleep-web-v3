import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CardTitle from '../../atoms/Common/CardTitle';
import CardMoreButton from '../../atoms/Common/CardMoreButton';
import useTranslation from 'next-translate/useTranslation';

function TechCard({
  margin,
  src,
  srcM,
  srcL,
  title,
  whiteTitleColor,
  href,
  oneColumn
}) {
  const router = useRouter();
  const { t } = useTranslation();
  const findOurMore = t('main:find_our_more');

  return (
    <Link href={href} locale={router.locale} style={{ zIndex: '1000' }}>
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
          <CardMoreButton CardMoreButton item={findOurMore} href={href} />
          {/* <WhiteDim /> */}
        </TechContainer>
      </a>
    </Link>
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
  z-index: 1001;

  ${mp[0]} {
    background: url(${({ srcM }) => srcM && srcM});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    padding: ${({ oneColumn }) =>
      oneColumn ? '44px 0px 128px 24px' : '24px 0px 216px 24px'};
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

//
const Test = styled.div`
  z-index: 1000;
`;
