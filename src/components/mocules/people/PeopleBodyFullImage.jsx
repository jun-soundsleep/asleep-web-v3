import React from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import Dim from '../../atoms/Common/Dim';
import { mp } from '../.././../../styles/device';
import { MXFlexCenteringSB } from '../../../components/mixin/MXFlex';

function PeopleBodyFullImage({ src, title, href }) {
  const { t } = useTranslation();
  const jd = t('common:find_jd');

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Container src={src[0]} srcm={src[1]} srcl={src[2]}>
        <Dim dimColor={' var(--dim-dim-04) '} />
        <TitleContainer>
          <Title dangerouslySetInnerHTML={{ __html: title }} />
          <CheckJd>
            <span>{jd}</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.72 19.639a.75.75 0 0 0 1.06 0l6.25-6.25a.75.75 0 0 0 0-1.06l-6.25-6.25a.75.75 0 1 0-1.06 1.06l4.97 4.97H4.25a.75.75 0 0 0 0 1.5h14.44l-4.97 4.97a.75.75 0 0 0 0 1.06z"
                fill="#D8E1FF"
              />
            </svg>
          </CheckJd>
        </TitleContainer>
      </Container>
    </a>
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
  cursor: pointer;

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
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: 0.14px;
    margin-top: 33.5px;
  }

  ${mp[1]} {
    font-size: 36px;
    line-height: 1.06;
    letter-spacing: -1.62px;
    margin-top: 103px;
  }
`;

const CheckJd = styled(MXFlexCenteringSB)`
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.77;
  letter-spacing: -0.59px;
  text-align: left;
  color: var(--sub-sub-04);

  & > span {
    margin-right: 8px;
  }
`;
