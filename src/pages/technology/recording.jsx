import React from 'react';
import styled from '@emotion/styled';
import CommonDetailPage from '../../components/templates/CommonDetailPage';
import useTranslation from 'next-translate/useTranslation';

function Recording(props) {
  const { t } = useTranslation();
  const modal_1_title = t('tech:natural_sleep_record');
  const modal_1_body = t('tech:natural_sleep_record_body');
  // const modal_1_footnote = t('tech:smartphone_modal_body_footnote');
  return (
    <CommonDetailPage
      title={modal_1_title}
      body={modal_1_body}
      originLocation={'/technology'}
      src={'/images/tech/tech-pop_3_m_2x.jpg'}
    />
  );
}

export default Recording;
