import React from 'react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';

function FootterAddressTitle({ darkMode }) {
  const { t, lang } = useTranslation();
  const title = t('footer:asleep_inc');

  return <AddressTitle darkMode={darkMode}>{title}</AddressTitle>;
}

export default FootterAddressTitle;

const AddressTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.54px;
  text-align: left;
  color: ${({ darkMode }) =>
    darkMode ? ' var(--very-light-pink-two)' : 'var(--black)'};
`;
