import SleepTechTopSection from './SleepTechTopSection';
import MainLayout from '../layout/MainLayout';
import SleeTechSleepTrackSection from './SleeTechSleepTrackSection';
import SleeTechVideoSection from './SleeTechVideoSection';
import SleepTechMedicalBackgroundSection from './SleepTechMedicalBackgroundSection';
import SleepTechCompetition from './SleepTechCompetition';
import SleeTechResearchPaper from './SleeTechResearchPaper';
import PartnershipBoxSection from '../common/PartnershipBoxSection';
import BottomContactButton from '../layout/BottomContactButton';

const Index = () => {
  return (
    <MainLayout>
      <SleepTechTopSection />
      <SleeTechSleepTrackSection />
      <SleeTechVideoSection />
      <SleepTechMedicalBackgroundSection />
      <SleepTechCompetition />
      <SleeTechResearchPaper />
      <PartnershipBoxSection />
      <BottomContactButton />
    </MainLayout>
  );
};

export default Index;
