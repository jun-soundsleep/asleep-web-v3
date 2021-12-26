import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import SectionContainer from '../../atoms/people/SectionContainer';
import AdvisorSection from './AdvisorSection';

function AdvisorsTab(props) {
  const { t } = useTranslation();

  return (
    <SectionContainer>
      <AdvisorSection
        title={'Medical Advisors'}
        fname={t('people:advisor_1_name')}
        fbody={[
          t('people:advisor_1_body_1'),
          t('people:advisor_1_body_2'),
          t('people:advisor_1_body_3'),
          t('people:advisor_1_body_4')
        ]}
        fsrc={'/images/people/advisor/3_advisor-1_l_2x.jpg'}
        stitle={'asldkj'}
        sname={t('people:advisor_2_name')}
        sbody={[
          t('people:advisor_2_body_1'),
          t('people:advisor_2_body_2'),
          t('people:advisor_2_body_3'),
          t('people:advisor_2_body_4')
        ]}
        ssrc={'/images/people/advisor/3_advisor-2_l_2x.jpg'}
      />
      <AdvisorSection
        title={'Business Advisors'}
        fname={t('people:advisor_3_name')}
        fbody={[
          t('people:advisor_3_body_1'),
          t('people:advisor_3_body_2'),
          t('people:advisor_3_body_3'),
          t('people:advisor_3_body_4')
        ]}
        fsrc={'/images/people/advisor/3_advisor-3_l_2x.jpg'}
        stitle={'asldkj'}
        sname={t('people:advisor_4_name')}
        sbody={[
          t('people:advisor_4_body_1'),
          t('people:advisor_4_body_2'),
          t('people:advisor_4_body_3'),
          t('people:advisor_4_body_4')
        ]}
        ssrc={'/images/people/advisor/3_advisor-4_l_2x.jpg'}
      />
      <AdvisorSection
        title={'Collaborated Research'}
        fname={t('people:advisor_5_name')}
        fbody={[
          t('people:advisor_5_body_1'),
          t('people:advisor_5_body_2'),
          t('people:advisor_5_body_3'),
          t('people:advisor_5_body_4')
        ]}
        fsrc={'/images/people/advisor/3_advisor-5_l_2x.jpg'}
        stitle={'asldkj'}
        sname={t('people:advisor_6_name')}
        sbody={[
          t('people:advisor_6_body_1'),
          t('people:advisor_6_body_2'),
          t('people:advisor_6_body_3'),
          t('people:advisor_6_body_4')
        ]}
        ssrc={'/images/people/advisor/3_advisor-5_l_2x.jpg'}
      />
    </SectionContainer>
  );
}

export default AdvisorsTab;
