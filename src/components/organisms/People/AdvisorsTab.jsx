import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import SectionContainer from '../../atoms/people/SectionContainer';
import AdvisorSection from './AdvisorSection';

function AdvisorsTab(props) {
  const { t } = useTranslation();
  const firstName = t('people:advisor_1_name');
  const firstBody = t('people:advisor_1_body');

  return (
    <SectionContainer>
      <AdvisorSection
        title={'Medical Advisors'}
        fname={firstName}
        fbody={firstBody}
        fsrc={'/images/people/advisor/3_advisor-1_l_2x.jpg'}
        stitle={'asldkj'}
        sname={'asdas'}
        sbody={'askdjhad'}
        ssrc={'/images/people/advisor/3_advisor-2_l_2x.jpg'}
      />
      <AdvisorSection
        title={'Business Advisors'}
        fname={'asdas'}
        fbody={'askdjhad'}
        fsrc={'/images/people/advisor/3_advisor-3_l_2x.jpg'}
        stitle={'asldkj'}
        sname={'asdas'}
        sbody={'askdjhad'}
        ssrc={'/images/people/advisor/3_advisor-4_l_2x.jpg'}
      />
      <AdvisorSection
        title={'Collaborated Research'}
        fname={'asdas'}
        fbody={'askdjhad'}
        fsrc={'/images/people/advisor/3_advisor-5_l_2x.jpg'}
        stitle={'asldkj'}
        sname={'asdas'}
        sbody={'askdjhad'}
        ssrc={'/images/people/advisor/3_advisor-5_l_2x.jpg'}
      />
    </SectionContainer>
  );
}

export default AdvisorsTab;
