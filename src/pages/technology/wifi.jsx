import React from 'react';
import styled from '@emotion/styled';
import CommonDetailPage from '../../components/templates/CommonDetailPage';
import useTranslation from 'next-translate/useTranslation';

function Wifi(props) {
  const { t } = useTranslation();
  const modal_1_title = t('tech:accurate_wifi_sensing');
  const modal_1_body = t('tech:accurate_wifi_sensing-body');

  return (
    <CommonDetailPage
      title={modal_1_title}
      body={modal_1_body}
      originLocation={'/technology'}
      src={'/images/tech/tech-pop_4_m_2x.jpg'}
    />
  );
}

export default Wifi;