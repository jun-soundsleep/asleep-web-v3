import { motion } from 'framer-motion';
import Icon from '/public/imagev3/icon/Hamburger.svg';
import Image from 'next/image';
import useGetCurrentSize from '../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../styles/device';

const PRODUCT_DATA = [
  {
    title: 'Temperature',
    icon: '',
    description:
      'Personalized optimal temperature helps maintain sleep with good sleep quality.'
  },
  {
    title: 'Temperature',
    icon: '',
    description:
      'Personalized optimal temperature helps maintain sleep with good sleep quality.'
  },
  {
    title: 'Temperature',
    icon: '',
    description:
      'Personalized optimal temperature helps maintain sleep with good sleep quality.'
  },
  {
    title: 'Temperature',
    icon: '',
    description:
      'Personalized optimal temperature helps maintain sleep with good sleep quality.'
  }
];

const MainProductValue = () => {
  const currentSize = useGetCurrentSize();
  const isSmall = currentSize === deviceType.small;

  return (
    <motion.section
      className={`relative h-[871px]`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div
        className={`absolute top-0 left-0 z-10 mt-[131px] px-[16px] medium:px-[46px] large:px-[317px]`}
      >
        <div
          className={`gray2 b2-bold-small medium:b2-bold-medi large:b2-bold-large `}
        >
          Product Value
        </div>
        <h2
          className={`text-white h1-bold-small medium:h1-medium-medi large:h1-large`}
        >
          Integrate Sleep Data in your Smart Home Devices for Realtime Sleep
          Care
        </h2>
        <div className={`medium:grid medium:gap-[61px] medium:grid-cols-2`}>
          {PRODUCT_DATA.map((el, idx) => {
            return (
              <div
                className={`border-b-[1px] border-[#626262] pb-[15px] medium:border-b-0`}
                key={idx}
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
      {!isSmall && (
        <Image
          className={`absolute z-0 bottom-0`}
          src={'/imagev3/main/Feature_List.png'}
          alt={'a'}
          fill
        />
      )}
    </motion.section>
  );
};

export default MainProductValue;
