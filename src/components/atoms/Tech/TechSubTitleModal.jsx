import React from 'react';
import styled from '@emotion/styled';
import { mp } from '../../../../styles/device';
import useTranslation from 'next-translate/useTranslation';

function TechSubTitleModal({ en }) {
  const { t } = useTranslation();
  const modalText = t('tech:modal');

  return (
    <TechSubTitleModalContainer en={en}>{modalText}</TechSubTitleModalContainer>
  );
}

export default TechSubTitleModal;

const TechSubTitleModalContainer = styled.div`
  position: absolute;
  top: ${({ en }) => (en ? '161px' : '111px')};
  left: ${({ en }) => (en ? '82px' : '24%')};
  transform: translateX(-50%);
  width: 272px;
  padding: 33px 21px 24px;
  border-radius: 15px;
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  box-shadow: 0 4px 30px 0 rgba(32, 32, 32, 0.25);
  background-color: var(--alpha-alpha-06);

  :after {
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid var(--alpha-alpha-06);
    box-shadow: 0 4px 30px 0 rgba(32, 32, 32, 0.25);
    content: '';
    position: absolute;
    top: -10px;
    left: 20px;
  }

  ${mp[0]} {
    width: 380px;
    padding: 39px 24px 24px;
    top: ${({ en }) => (en ? '98px' : '85px')};
    left: ${({ en }) => (en ? '114px' : '-60px')};
  }

  ${mp[1]} {
    width: 852px;
    padding: 72px 44px 44px 50px;
    top: ${({ en }) => (en ? '38px' : '33px')};
    left: ${({ en }) => (en ? '540px' : '57%')};
  }
`;
