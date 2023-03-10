import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CardTitle from '../../atoms/Common/CardTitle';
import useTranslation from 'next-translate/useTranslation';
import userWindowSize from '../../../../hooks/userWindowSize';
import { mp } from '../../../../styles/device';
import ButtonMoreInfoInCard from '../../atoms/Common/ButtonMoreInfoInCard';

function CompanyCard({
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

  const size = userWindowSize();
  let overTablet = size.width > 768;

  return <>
    {overTablet ? (
      <Container
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
          hexColor={'#406bff'}
          item={findOurMore}
          itemColor={'var(--primary-primary-in-light)'}
          fontWeight={500}
        />
      </Container>
    ) : (
      (<Link href={href} locale={router.locale}>

        <Container
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
            hexColor={'#406bff'}
            item={findOurMore}
            itemColor={'var(--primary-primary-in-light)'}
            fontWeight={500}
          />
        </Container>

      </Link>)
    )}
  </>;
}

export default CompanyCard;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ padding }) => (padding ? padding : '32px 20px 74px 24px')};
  border-radius: 22px;
  margin: ${({ margin }) => (margin ? margin : '')};
  background: url(${({ src }) => src && src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  position: relative;

  ${mp[0]} {
    background: url(${({ srcM }) => srcM && srcM});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;

    margin: ${({ margin }) => (margin ? margin : '')};
  }

  ${mp[1]} {
    background: url(${({ srcL }) => srcL && srcL});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    padding: ${({ padding }) => (padding ? padding : '88px 20px 0px 44px')};
  }

  cursor: pointer;
`;
