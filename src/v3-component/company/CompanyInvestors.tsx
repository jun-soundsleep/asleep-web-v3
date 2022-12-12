import WithViewPortOpacity from '../Animation/WithViewPortOpacity';
import Image from 'next/image';
import styles from './index.module.css';

const CompanyInvestors = () => {
  return (
    <WithViewPortOpacity
      styleClass={`${styles.investorGradient} mt-[96px] py-[177px] medium:mt-[177px] medium:py-[288px] large:mt-[200px] `}
    >
      <div className={`text-center`}>
        <div
          className={`gray2  caption-small medium:caption-medi large:b3-large`}
        >
          Our Investors
        </div>
        <div
          className={`b1-small gray1 mt-[16px] medium:b1-medium-medi h2-large`}
        >
          With undivided interest from prominent investors, Asleep is growing
          warmly and prosperously even amidst the winter of investment.
        </div>
        <div className={`flex justify-center mt-[24px]`}>
          <Image
            src={'/imagev3/company/company_5.png'}
            width={200}
            height={300}
            alt={''}
          />
        </div>
      </div>
    </WithViewPortOpacity>
  );
};

export default CompanyInvestors;
