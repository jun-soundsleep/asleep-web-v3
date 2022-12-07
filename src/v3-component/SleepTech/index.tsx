import SleepTechTopSection from './SleepTechTopSection';
import MainLayout from '../layout/MainLayout';
import SleeTechSleepTrackSection from './SleeTechSleepTrackSection';
import SleeTechVideoSection from './SleeTechVideoSection';
import SleepTechMedicalBackgroundSection from './SleepTechMedicalBackgroundSection';
import SleepTechCompetition from './SleepTechCompetition';
import SleeTechResearchPaper from './SleeTechResearchPaper';

const Index = () => {
  return (
    <MainLayout>
      <SleepTechTopSection />
      <SleeTechSleepTrackSection />
      <SleeTechVideoSection />
      <SleepTechMedicalBackgroundSection />
      <SleepTechCompetition />
      <SleeTechResearchPaper />
    </MainLayout>
  );
};

export default Index;
