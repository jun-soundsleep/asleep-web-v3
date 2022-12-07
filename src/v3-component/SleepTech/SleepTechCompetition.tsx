import WithViewPortOpacity from '../Animation/WithViewPortOpacity';
import AsleepLogo from '/public/imagev3/logo/Branding_logo.svg';
import Icon from '/public/imagev3/icon/Hamburger.svg';
import styles from './index.module.css';
import useGetCurrentSize from '../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../styles/device';

const PRODUCT_DATA = [
  {
    title: 'Wake  |  NREM  |  REM Accuracy',
    icon: '',
    description:
      'Detecting REM sleep is crucial in analyzing sleep features and providing real-time sleep care service. Acoustic Sleep AI is 15% more accurate than wearable devices and 25% more accurate than contactless devices.'
  },
  {
    title: 'Wake detection during sleep',
    icon: '',
    description:
      'Acoustic Sleep AI precisely detects sleep latency and recognizes the frequency of awakening during sleep. Its wake detection accuracy is 43% higher than wearable and 52% higher than contactless devices.'
  }
];

const PERCENT_DATA = [
  {
    company: 'Fitbit',
    percent: '71.2',
    barPercent: 'w-[71%]',
    devie: 'Smart watch'
  },
  {
    company: 'EarlySense Live',
    percent: '65.4',
    barPercent: 'w-[65%]',
    devie: 'Piezo sensor'
  },
  {
    company: 'Resmed S+',
    percent: '63.0',
    barPercent: 'w-[63%]',
    devie: 'Radar'
  },
  {
    company: 'Sleepscore Max',
    percent: '62.6',
    barPercent: 'w-[62%]',
    devie: 'Radar'
  }
];

const SleepTechCompetition = () => {
  const currentSize = useGetCurrentSize();
  const isLarge = currentSize === deviceType.large;

  const getPercentBox = () => {
    return (
      <div
        className={`w-full gray6 min-h-[352px] px-[32px] py-[32px] bg-[#1E1F21] mt-[32px] large:mt-[unset] large:px-[64px] large:py-[80px]`}
      >
        <div className={`w-[66px] h-[24px] medium:w-[104px] medium:h-[36px]`}>
          <AsleepLogo />
        </div>
        <BoxContainer>
          <AbovePercentBox
            percent={`w-[81%]`}
            color={'bg-[#74E897]'}
          />
          <LowerPercentBox />
          <Tooltip />
        </BoxContainer>
        <div className={`mt-[56px]`}>
          {PERCENT_DATA.map((el, idx) => {
            return (
              <div
                className={`mt-[24px]`}
                key={idx}
              >
                <div className={`flex justify-between`}>
                  <div className={`caption-small gray1 medium:caption-medi`}>
                    <span className={`text-white`}>{el.company}</span>
                    {` | `}
                    <span>{el.devie}</span>
                  </div>
                  <div
                    className={`b2-medium-small gray1 medium:b2-medium-medi`}
                  >
                    {el.percent}%
                  </div>
                </div>
                <BoxContainer styleClass={`mt-[0px!important]`}>
                  <AbovePercentBox
                    percent={el.barPercent}
                    color={'bg-[#626262]'}
                  />
                  <LowerPercentBox />
                </BoxContainer>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const getDescription = () => {
    return (
      <>
        {PRODUCT_DATA.map((el, idx) => {
          return (
            <div
              className={`border-b-[1px] border-[#626262] pb-[15px] medium:border-b-0`}
              key={idx}
            >
              <div className={`flex mt-[32px] items-center`}>
                <div className={`mr-[12px]`}>
                  <Icon />
                </div>
                <div
                  className={`sub2-bold-small medium:b1-bold-medi large:b2-bold-large`}
                >
                  {el.title}
                </div>
              </div>
              <div
                className={`mt-[16px] gray1 b1-small medium:b2-medium-medi large:b3-large`}
              >
                {el.description}
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <WithViewPortOpacity
      styleClass={`px-[16px] mt-[135px] medium:px-[32px] large:px-[316px]`}
    >
      <div
        className={`large:flex large:gap-[165px] large:justify-between large:items-start`}
      >
        <div>
          <div
            className={`gray2 b2-bold-small medium:b2-bold-medi large:b2-bold-large`}
          >
            Competition
          </div>
          <h2
            className={`text-white h1-bold-small medium:h1-medium-medi large:h1-large mt-[12px]`}
          >
            Superior rates across all solutions
          </h2>
          {!isLarge && getPercentBox()}
          {getDescription()}
        </div>
        {isLarge && getPercentBox()}
      </div>
    </WithViewPortOpacity>
  );
};

export default SleepTechCompetition;

const Tooltip = () => {
  return (
    <div
      className={`accentGreenPrimary b2-bold bg-[#2E2E2E] px-[7px] py-[2px] absolute right-[32px] top-[28px] rounded-[3px] medium:right-[108px] medium:b1-bold-medi large:right-[72px]`}
    >
      81.8%
      <div className={`absolute ${styles.ballon}`} />
    </div>
  );
};

const BoxContainer = ({ children, styleClass = '' }) => {
  return (
    <div
      className={`mt-[20px] h-[10px] relative ${styleClass} medium:h-[13px] large:h-[11px]`}
    >
      {children}
    </div>
  );
};

const AbovePercentBox = ({
  percent,
  color,
  styleClass
}: {
  percent: string;
  color: string;
  styleClass?: string;
}) => {
  return (
    <div
      className={`h-full ${percent} ${color} absolute left-0 top-0 z-10 ${styleClass}`}
    />
  );
};

const LowerPercentBox = ({ bg = '#363636' }: { bg?: string }) => {
  return (
    <div className={`w-full h-full bg-[${bg}] absolute left-0 top-0 z-0`} />
  );
};
