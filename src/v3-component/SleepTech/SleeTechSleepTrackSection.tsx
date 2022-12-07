import WithViewPortOpacity from '../Animation/WithViewPortOpacity';
import styles from './index.module.css';
import useGetCurrentSize from '../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../styles/device';

const Figure = ({ head, sub }: { head: string; sub: string }) => {
  return (
    <div>
      <div className={`b2-small text-center medium:b1-medi large:b3-large`}>
        {head}
      </div>
      <div
        className={`accentGreenPrimary h1-bold-small text-center mt-[4px] medium:h1-large`}
      >
        {sub}
      </div>
    </div>
  );
};

const Divider = () => {
  return (
    <div
      className={`border-b-[1px] border-[#626262] w-[35px] mt-[40px] medium:mt-[48px] medium:w-[74px] large:m-[unset] large:w-[89px]`}
    />
  );
};

const LargeDivider = () => {
  return (
    <div
      className={`hidden large:block h-[89px] border-l-[1px] border-[#626262] `}
    ></div>
  );
};

const SleeTechSleepTrackSection = () => {
  const commonStyle = `mt-[89px] flex flex-col items-center large:m-[unset]`;
  const currentSize = useGetCurrentSize();
  const isLarge = currentSize === deviceType.large;

  return (
    <WithViewPortOpacity
      styleClass={`px-[16px] pt-[100px] ${styles.radicalGradient} large:pt-[303px]`}
    >
      <>
        <h2
          className={`h1-bold-small text-center medium:h1-medi large:h1-large`}
        >
          More accurate than Smart Watch Sleep trackers
        </h2>
        <h3
          className={`mt-[16px] b1-small gray0 text-center medium:b1-medium-medi large:b1-large`}
        >
          With only a smartphone, anyone can accurately measure sleep at home.
          Suggesting new paradigm of sleep tracking.
        </h3>
        <div
          className={`flex items-center flex-col large:flex-row large:justify-between large:items-start large:mt-[120px] large:px-[344px]`}
        >
          <div className={commonStyle}>
            <Figure
              head={'Contactless sleeptracking'}
              sub={'World No. 1'}
            />
            {!isLarge && <Divider />}
          </div>
          <LargeDivider />
          <div className={commonStyle}>
            <Figure
              head={'Manually labeled PSG+EEG+Sound pair'}
              sub={'80%'}
            />
            {!isLarge && <Divider />}
          </div>
          <LargeDivider />
          <div className={commonStyle}>
            <Figure
              head={'PSG+EEG+Breath sound \n' + 'manualy labeled data'}
              sub={'38,000hr'}
            />
          </div>
        </div>
      </>
    </WithViewPortOpacity>
  );
};

export default SleeTechSleepTrackSection;
