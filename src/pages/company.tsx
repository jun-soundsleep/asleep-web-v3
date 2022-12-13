import CompanyPage from '../v3-component/companyPage';
import { NewsContext } from '../libs/store/newsList';
import { getNewList } from '../libs/api/getNewList';

const Company = ({ newsList }) => {
  return (
    <NewsContext.Provider value={newsList}>
      <CompanyPage />
    </NewsContext.Provider>
  );
};

export default Company;

export async function getStaticProps() {
  const result = await getNewList();
  return {
    props: {
      newsList: result,
      revalidate: 300
    }
  };
}
