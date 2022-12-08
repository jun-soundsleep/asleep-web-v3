import MainLayout from '../layout/MainLayout';
import SolutionTopSection from './SolutionTopSection';
import SolutionLG from './SolutionLG';
import SolutionSlight from './SolutionSlight';
import SolutionSlee from './SolutionSlee';
import SolutionExtensions from './SolutionExtensions';
import BottomContactButton from '../layout/BottomContactButton';

const Index = () => {
  return (
    <MainLayout>
      <SolutionTopSection />
      <SolutionLG />
      <SolutionSlight />
      <SolutionSlee />
      <SolutionExtensions />
      <BottomContactButton />
    </MainLayout>
  );
};

export default Index;
