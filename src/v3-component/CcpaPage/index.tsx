import MainLayout from '../layout/MainLayout';
import ArrowIcon from '/public/imagev3/icon/arrow.svg';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <div
        className={`px-[16px] pt-[48px] pb-[102px] medium:px-[32px] medium:pt-[72px] medium:pb-[93px] large:px-[316px] large:flex  large:gap-[132px] large:justify-between`}
      >
        <ArrowIcon
          onClick={() => router.back()}
          className={`large:min-w-[30px]`}
        />
        <h1
          className={`mt-[48px] title-small medium:title-medi large:h1-large large:mt-[unset]`}
        >{`DO NOT SELL\nMY PERSONAL\nINFORMATION`}</h1>
        <p
          className={`mt-[28px] gray1 [&>a]:text-[#3C41EA] [&>a]:text-[#3C41EA] [&>a]:underline b1-small medium:mt-[64px] medium:b1-medium-medi large:b1-large large:mt-[unset]`}
        >
          ASLEEP do not sell your personal information. We take ‘privacy’ as one
          of the most important values of our company. Under the California
          Consumer Privacey Act (CCPA), we promise the rights for California
          residents to opt our of sale of personal information to third parties.
          <br />
          <br />
          If you want to know how ASLEEP collects and use your data, please
          follow the links of{' '}
          <a
            href="https://www.naver.com"
            target="__blank"
          >
            Terms and Conditions(T&C)
          </a>
          , or{' '}
          <a
            href="https://www.naver.com"
            target="__blank"
          >
            Privacy Policy
          </a>
          .<br />
          <br />
          You can also directly contact us by emailing at{' '}
          <a href="mailto:privacy@asleep.ai">privacy@asleep.ai</a> to request
          some of privacy issues about our product, Slee. For more efficient
          communication, please send us email including your device’s
          UUID(Universially Unique Identifier). You will be able to find UUID
          number as follow: 1. open Slee app, 2. click [More], 3. click [Email
          us]. If you are iphone user, you may have to download ios ‘Mail’ app.
        </p>
      </div>
    </MainLayout>
  );
};

export default Index;
