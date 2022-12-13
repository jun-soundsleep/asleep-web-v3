import React from 'react';
import CommonDetailPage from '../../components/templates/CommonDetailPage';
import useTranslation from 'next-translate/useTranslation';

function Sleepdiagnosis(props) {
  const { t } = useTranslation();
  const modal_1_title = t('companyPage:company_popup_1');
  const modal_1_body = t('companyPage:company_popup_1_contents');

  return (
    <CommonDetailPage
      title={modal_1_title}
      body={modal_1_body}
      originLocation={'/companyPage'}
      src={'/images/tech/tech-pop_1_m_2x.jpg'}
    />
  );
}

export default Sleepdiagnosis;
