import MainLayout from '../layout/MainLayout';
import CompanyTopSection from './CompanyTopSection';
import CompanyGoal from './CompanyGoal';
import CompanyWellness from './CompanyWellness';
import BottomContactButton from '../layout/BottomContactButton';
import CompanyAp from './CompanyAP';
import CompanyInvestors from './CompanyInvestors';
import CompanyNewsList from './CompanyNewsList';

function Index() {
  return (
    <MainLayout>
      <CompanyTopSection />
      <div className={`px-[16px] pt-[80px] medium:px-[32px] large:px-[317px]`}>
        <CompanyGoal />
        <CompanyWellness />
        <CompanyAp />
        <CompanyInvestors />
        <CompanyNewsList />
      </div>
      <BottomContactButton />
    </MainLayout>
  );
}

export default Index;
