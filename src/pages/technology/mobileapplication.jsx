import React from 'react';
import styled from '@emotion/styled';
import CommonDetailPage from '../../components/templates/CommonDetailPage';
import useTranslation from 'next-translate/useTranslation';

function Mobileapplication() {
  const { t } = useTranslation();
  const modal_1_title = t('tech:smartphone_modal');
  const modal_1_body = t('tech:smartphone_modal_body');

  return (
    <CommonDetailPage
      title={modal_1_title}
      body={modal_1_body}
      originLocation={'/technology'}
      src={'/Images/tech/tech-pop_1_m_2x.jpg'}
    />
  );
}

export default Mobileapplication;
