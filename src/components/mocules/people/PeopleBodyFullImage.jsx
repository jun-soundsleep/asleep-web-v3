import React from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import Dim from '../../atoms/Common/Dim';
import { mp } from '../.././../../styles/device';
import ButtonMoreInfoInCard from '../../atoms/Common/ButtonMoreInfoInCard';

function PeopleBodyFullImage({ src, title, href }) {
  const { t } = useTranslation();
  const jd = t('common:find_jd');

  return (
    <Container src={src[0]} srcm={src[1]} srcl={src[2]}>
      <Dim dimColor={'var(--dim-dim-04)'} />
      <TitleContainer>
        <Title dangerouslySetInnerHTML={{ __html: title }} />
        <a href={href} target="_blank" rel="noreferrer">
          <ButtonMoreInfoInCard
            item={jd}
            hexColor={'#D8E1FF'}
            itemColor={'var(--sub-sub-04)'}
            margin={''}
          />
        </a>
      </TitleContainer>
    </Container>
  );
}

export default PeopleBodyFullImage;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 419px;
  overflow: hidden;
  background: url(${({ src }) => src && src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${mp[0]} {
    height: 456px;
    background: url(${({ srcm }) => srcm && srcm});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  ${mp[1]} {
    height: 1140px;
    background: url(${({ srcl }) => srcl && srcl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 219px;

  ${mp[0]} {
    margin-top: 244px;
  }

  ${mp[1]} {
    margin-top: 746px;
  }
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.72px;
  text-align: center;
  color: var(--text-in-dark-text-03);
  margin-bottom: 29.5px;

  & > b {
    color: var(--text-in-dark-text-00);
  }

  ${mp[0]} {
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: 0.14px;
    margin-top: 33.5px;
  }

  ${mp[1]} {
    font-size: 32px;
    line-height: 1.66;
    letter-spacing: -1.62px;
    margin-top: 23px;
    margin-bottom: 80px;
  }
`;
