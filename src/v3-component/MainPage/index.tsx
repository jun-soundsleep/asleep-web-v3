import MainLayout from '../layout/MainLayout';
import MainTop from './MainTop';
import MainClientLogo from './MainClientLogo';
import MainVideo from './MainVideo';
import MainDataSection from './MainDataSection';
import MainFeatures from './MainFeatures';
import MainProductValue from './MainProductValue';
import MainPdfDownload from './MainPdfDownload';
import MainSleepReport from './MainSleepReport';
import MainExtensions from './MainExtensions';

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
      <MainSleepReport />
      <MainExtensions />
    </MainLayout>
  );
};

export default MainPage;
