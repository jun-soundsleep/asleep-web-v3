import MainLayout from '../layout/MainLayout';
import MainTop from './MainTop';
import MainClientLogo from './MainClientLogo';
import MainVideo from './MainVideo';

const MainPage = () => {
  return (
    <MainLayout>
      <MainTop />
      <MainClientLogo />
      <MainVideo />
    </MainLayout>
  );
};

export default MainPage;
