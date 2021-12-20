import React from 'react';
import styled from '@emotion/styled';
import CommonDetailPage from '../../components/templates/CommonDetailPage';
import useTranslation from 'next-translate/useTranslation';

function sleepdiagnosis(props) {
  const { t } = useTranslation();
  const modal_1_title = t('company:company_popup_1');
  const modal_1_body = t('company:company_popup_1_contents');

  return (
    <CommonDetailPage
      title={modal_1_title}
      body={modal_1_body}
      originLocation={'/company'}
      src={'/Images/tech/tech-pop_1_m_2x.jpg'}
    />
  );
}

export default sleepdiagnosis;
