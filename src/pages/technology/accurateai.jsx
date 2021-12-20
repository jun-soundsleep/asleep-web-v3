import React from 'react';
import styled from '@emotion/styled';
import CommonDetailPage from '../../components/templates/CommonDetailPage';
import useTranslation from 'next-translate/useTranslation';

function Accurateai(props) {
  const { t } = useTranslation();
  const modal_1_title = t('tech:accurate_ai_title');
  const modal_1_body = t('tech:accurate_ai_body');

  return (
    <CommonDetailPage
      title={modal_1_title}
      body={modal_1_body}
      originLocation={'/technology'}
      src={'/Images/tech/tech-pop_2_m_2x.jpg'}
    />
  );
}

export default Accurateai;
