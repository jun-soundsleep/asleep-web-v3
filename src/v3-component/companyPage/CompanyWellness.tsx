import WithViewPortOpacity from '../Animation/WithViewPortOpacity';
import styles from './index.module.css';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useGetCurrentSize from '../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../styles/device';

const DATA = [
  {
    title: 'Attention and Care',
    description:
      'We closely attend to your breathing and care for your wellness.',
    image: ''
  },
  {
    title: 'Continue and Connect',
    description: 'We connect your sleep with your daily routine and lifestyle.',
    image: ''
  },
  {
    title: 'Pace With ASLEEP',
    description: 'Keep your own speed and pace with Asleep.',
    image: ''
  }
];

const CompanyWellness = () => {
  const currentSize = useGetCurrentSize();
  const isLarge = currentSize === deviceType.large;

  return (
    <WithViewPortOpacity
      styleClass={`${styles.wellnessGradient} ${styles.wellnessWidth}`}
    >
      <div>
        <h1 className={`h1-bold-small text-center mt-[260px]`}>
          {'We change world with\nattitudes of caring \nour wellness'}
        </h1>
        {isLarge ? (
          <div className={`flex items-center justify-center`}>
            {DATA.map((el, idx) => {
              return (
                <CarouselItem
                  key={idx}
                  title={el.title}
                  description={el.description}
                />
              );
            })}
          </div>
        ) : (
          <Carousel
            showArrows={false}
            autoPlay
            swipeable={true}
            showStatus={false}
          >
            {DATA.map((el, idx) => {
              return (
                <CarouselItem
                  key={idx}
                  title={el.title}
                  description={el.description}
                />
              );
            })}
          </Carousel>
        )}
      </div>
    </WithViewPortOpacity>
  );
};

export default CompanyWellness;

const CarouselItem = ({ title, description }) => {
  return (
    <div
      className={`mt-[64px] flex flex-col items-center justify-center px-[32px] pb-[80px]`}
    >
      <div
        className={`relative h-[265px] aspect-square large:w-[408px] large:h-[408px] large:mt-[56px]`}
      >
        <Image
          fill
          src={'/imagev3/company/company_4.png'}
          alt={''}
        />
      </div>
      <h1 className={`mt-[24px] h1-small`}>{title}</h1>
      <h2 className={`mt-[16px] gray0`}>{description}</h2>
    </div>
  );
};
