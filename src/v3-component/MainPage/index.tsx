import MainLayout from '../layout/MainLayout';
import MainTop from './MainTop';
import MainClientLogo from './MainClientLogo';
import MainVideo from './MainVideo';
import MainDataSection from './MainDataSection';
import MainFeatures from './MainFeatures';
import MainProductValue from './MainProductValue';
import MainPdfDownload from './MainPdfDownload';

const MainPage = () => {
  return (
    <MainLayout>
      <MainTop />
      <MainClientLogo />
      <MainVideo />
      <MainDataSection />
      <MainFeatures />
      <MainProductValue />
      <MainPdfDownload />
    </MainLayout>
  );
};

export default MainPage;
