import ContactIcon from '/public/imagev3/contact/contact_0.svg';
import MediumContactIcon from '/public/imagev3/contact/contact_2.svg';
import LargeContactIcon from '/public/imagev3/contact/contact_1.svg';
import useGetCurrentSize from '../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../styles/device';

const ContactHead = () => {
  const currentSize = useGetCurrentSize();
  const isMedium = currentSize === deviceType.medium;
  const isLarge = currentSize === deviceType.large;

  return (
    <div>
      <h1
        className={`title-small medium:title-medi large:h1-large`}
      >{`Let’s chat!\nBecome our Partner`}</h1>
      <h2
        className={`mt-[16px] gray1 b1-small medium:b1-medium-medi large:b2-large`}
      >
        {`Fill out the form and find out how we can work together. By requesting a demo you will be able to connect with our team to learn more about our product.`}
      </h2>
      <h3
        className={`gray2 caption-small text-center mt-[100px] medium:caption-medi large:caption-large large:text-left`}
      >
        {`Trusted by top partner institutions`}
      </h3>
      <div className={`flex justify-center mt-[24px] large:justify-start`}>
        {isLarge ? (
          <LargeContactIcon />
        ) : isMedium ? (
          <MediumContactIcon />
        ) : (
          <ContactIcon />
        )}
      </div>
    </div>
  );
};

export default ContactHead;
