import { motion } from 'framer-motion';
import Image from 'next/image';
import Icon from '/public/imagev3/icon/Hamburger.svg';
import useGetCurrentSize from '../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../styles/device';

const PRODUCT_DATA = [
  {
    title: 'GUI',
    icon: '',
    description:
      "Provide sleep reports that understand your customers through your smart device's display and app."
  },
  {
    title: 'VUI',
    icon: '',
    description:
      'Understand your customers’s sleep and communicate with them based on sleep data.'
  },
  {
    title: 'PUI',
    icon: '',
    description:
      'Make your devices turn on and off based on sleep analysis results. Create new use cases with sleep data.'
  }
];

const MainSleepReport = () => {
  const currentSize = useGetCurrentSize();
  const isLarge = currentSize === deviceType.large;

  return (
    <motion.section
      className={`px-[16px] mt-[88px] medium:px-[32px] large:mt-[103px] large:px-[318px] large:flex large:gap-[254px]`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div>
        <div
          className={`gray2 b2-bold-small medium:b2-bold-medi large:b2-bold-large `}
        >
          Product Value
        </div>
        <h2
          className={`text-white h1-bold-small medium:h1-medium-medi large:h1-large`}
        >
          Provide Sleep Report with Various UI Experience
        </h2>
        {!isLarge && (
          <div className={`flex justify-center`}>
            <Image
              className={`mt-[32px]`}
              src={'/imagev3/main/sleep_report.png'}
              alt={'a'}
              width={240}
              height={235}
            />
          </div>
        )}
        <div className={`large:grid large:grid-cols-2 large:gap-[32px]`}>
          {PRODUCT_DATA.map((el, idx) => {
            return (
              <div
                className={`border-b-[1px] border-[#626262] pb-[15px] ${
                  idx === PRODUCT_DATA.length - 1 && 'medium:border-b-0'
                }`}
              >
                <div
                  className={`flex mt-[32px] items-center`}
                  key={idx}
                >
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
        </div>
      </div>
      {isLarge && (
        <div>
          <Image
            src={'/imagev3/main/sleep_report_large.png'}
            alt={'a'}
            width={406}
            height={492}
          />
        </div>
      )}
    </motion.section>
  );
};

export default MainSleepReport;
