import AsleepLayout from '../../src/components/organisms/AppLayout/AsleepLayout';
import useTranslation from 'next-translate/useTranslation';
import TechMobileMainSection from '../components/organisms/Tech/TechMobileMainSection';
import TechMainSection from '../components/organisms/Tech/TechMainSection';
import styled from '@emotion/styled';
import { mp } from '../../styles/device';
import TechBodySection from '../components/organisms/Tech/TechBodySection';

function Technology() {
  const { t } = useTranslation();
  const mainTitle = t('tech:title');

  return (
    <>
      <AsleepLayout>
        <MobileContainer>
          <TechMobileMainSection
            title={mainTitle}
            src={'/images/tech/tech_1_l_2x.jpg'}
          />
        </MobileContainer>
        <OverTabletTechMainSection>
          <TechMainSection
            title={mainTitle}
            srcM={'/images/tech/tech_1_l_2x.jpg'}
            srcL={'/images/tech/tech_1_m_2x.jpg'}
          />
        </OverTabletTechMainSection>
        <TechBodySection shref={'/tech'} fhref={'/tech'} />
      </AsleepLayout>
    </>
  );
}

export default Technology;

const MobileContainer = styled.div`
  ${mp[0]} {
    display: none;
  }
`;

const OverTabletTechMainSection = styled.div`
  display: none;
  ${mp[0]} {
    display: block;
  }
`;
