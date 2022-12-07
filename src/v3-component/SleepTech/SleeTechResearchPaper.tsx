import WithViewPortOpacity from '../Animation/WithViewPortOpacity';
import Icon from '/public/imagev3/icon/Hamburger.svg';
import { motion } from 'framer-motion';

const DATA = [
  {
    title:
      'End-to-end Sleep Staging Using Nocturnal Sounds from Microphone Chips for Mobile Devices',
    description:
      'Nature and Science of Sleep,\n' + '25 June 2022 Volume 2022:14',
    link: ''
  },
  {
    title:
      'Confidence-Based Framework Using Deep Learning for Automated Sleep Stage Scoring',
    description: 'Nature and Science of Sleep, 24 Dec 2021 Volume 2021:13',
    link: ''
  },
  {
    title: 'HomeSleepNet: Sound-based\n' + 'Sleep Staging at Home',
    description: '(Under Review) in npj Digital Medicine',
    link: ''
  },
  {
    title:
      'Real-time detection of sleep apnea based on breathing sound during sleep and prediction reinforcement using home noises',
    description: '(Under Review) in Journal of Internet Medical Research',
    link: ''
  }
];

const SleeTechResearchPaper = () => {
  return (
    <WithViewPortOpacity>
      <div
        className={`px-[16px] mt-[134px] medium:px-[32px] medium:pb-[64px] large:px-[316px] large:pb-[82px]`}
      >
        <h2
          className={`text-center h1-bold-small medium:h1-medium-medi medium:text-left large:h1-large`}
        >
          Our Research Papers
        </h2>
        <div
          className={`medium:grid medium:grid-cols-2 medium:gap-[32px] medium:mt-[32px] large:mt-[56px]`}
        >
          {DATA.map((el, idx) => {
            return (
              <DownloadBox
                key={idx}
                index={idx}
                title={el.title}
                description={el.description}
              />
            );
          })}
        </div>
      </div>
    </WithViewPortOpacity>
  );
};

export default SleeTechResearchPaper;

const DownloadBox = ({ index, title, description }) => {
  return (
    <div
      className={`mt-[${
        index === 0 ? '32' : '16'
      }px] px-[32px] py-[32px] bg-[#1E1F21] w-full medium:mt-0 medium:flex medium:flex-col large:px-[42px] large:py-[42px]`}
    >
      <div>
        <Icon />
      </div>
      <h1 className={`mt-[10px] b1-medium-small large:sub-bold-large`}>
        {title}
      </h1>
      <h2 className={`b2-small gray1 mt-[16px] large:b2-large`}>
        {description}
      </h2>
      <div className={`medium:flex medium:grow medium:items-end`}>
        <motion.button
          className={`w-full py-[12px] bg-white bg-opacity-20 mt-[32px] large:b2-medium-medi`}
          whileTap={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          Download PDF
        </motion.button>
      </div>
    </div>
  );
};
