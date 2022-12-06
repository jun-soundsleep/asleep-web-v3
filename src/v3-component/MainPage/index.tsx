import MainLayout from '../layout/MainLayout';
import MainTop from './MainTop';
import MainClientLogo from './MainClientLogo';
import MainVideo from './MainVideo';
import MainDataSection from './MainDataSection';
import MainFeatures from './MainFeatures';

const MainPage = () => {
  return (
    <MainLayout>
      <MainTop />
      <MainClientLogo />
      <MainVideo />
      <MainDataSection />
      <MainFeatures />
    </MainLayout>
  );
};

export default MainPage;
