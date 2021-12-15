import React from 'react';
import AsleepLayout from '../../src/components/organisms/AppLayout/AsleepLayout';
import useTranslation from 'next-translate/useTranslation';
import BusinessMainSection from '../components/organisms/Business/BusinessMainSection';
import BusinessSection from '../components/organisms/Business/BusinessSection';

function Business() {
  const { t } = useTranslation();
  const solutionTitle = t('business:sleep_analysis_solution');
  const solutionSubTitle = t('business:sleep_analysis_solution_sub_title');
  const solutionContents = t('business:sleep_analysis_solution_content');
  const appTitle = t('business:sleep_life_care_app');
  const appSubTitle = t('business:sleep_life_care_app_title');
  const appContents = t('business:sleep_life_care_app_content');
  const homeTitle = t('business:home_psg_device');
  const homeSubTitle = t('business:home_psg_device_title');
  const homeContents = t('business:home_psg_device_content');

  return (
    <AsleepLayout>
      <BusinessMainSection />
      <BusinessSection
        title={solutionTitle}
        subTitle={solutionSubTitle}
        contents={solutionContents}
        bsrc={'/images/business/business_1_s_2x.jpg'}
        bsrcM={'/images/business/business_1_l_2x.jpg'}
        bsrcL={'/images/business/business_1_m_2x.jpg'}
        logosrc={'/images/business/Business_Logo-1_s_2x1.png'}
        logosrcM={'/images/business/Business_Logo-1_M_2x1.png'}
        logosrcL={'/images/business/Business_Logo-1_L_2x1.png'}
        logoSw={'310px'}
        logoSh={'94px'}
        logoMw={'550px'}
        logoMh={'29px'}
        logoLw={'1166px'}
        logoLh={'64px'}
      />
      <BusinessSection
        title={appTitle}
        subTitle={appSubTitle}
        contents={appContents}
        bsrc={'/images/business/business_2_s_2x.jpg'}
        bsrcM={'/images/business/business_2_l_2x.jpg'}
        bsrcL={'/images/business/business_2_m_2x.jpg'}
      />
      <BusinessSection
        title={homeTitle}
        subTitle={homeSubTitle}
        contents={homeContents}
        bsrc={'/images/business/business_3_s_2x.jpg'}
        bsrcM={'/images/business/business_3_l_2x.jpg'}
        bsrcL={'/images/business/business_3_m_2x.jpg'}
        logosrc={'/images/business/Business_Logo-2_s_2x1.png'}
        logosrcM={'/images/business/Business_Logo-2_M_2x1.png'}
        logosrcL={'/images/business/Business_Logo-2_L_2x1.png'}
        logoSw={'320px'}
        logoSh={'18px'}
        logoMw={'531px'}
        logoMh={'28.5px'}
        logoLw={'1118px'}
        logoLh={'58px'}
      />
    </AsleepLayout>
  );
}

export default Business;
