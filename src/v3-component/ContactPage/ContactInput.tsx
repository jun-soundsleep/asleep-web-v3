import TextWithWishIcon from '../common/TextWithWishIcon';
import styles from './index.module.css';
import MotionButton from '../common/MotionButton';

const ContactInput = () => {
  return (
    <div className={`mt-[168px]`}>
      <TextWithWishIcon text={'Contact Us'} />
      <h2 className={`gray0 b1-small text-center mt-[16px]`}>
        Find out how you can integrate sleep technology to your product
      </h2>
      <Form />
      <TermsAndCondition />
    </div>
  );
};

export default ContactInput;

const Form = () => {
  const inputStyle = `pb-[6px] ${styles.inputBorderStyle} gray3 b2-small w-full mt-[40px]`;
  const textAreaStyle = `${styles.textAreaStyle} pb-[12px] gray3 b2-small bg-transparent mt-[40px] w-full`;

  return (
    <form className={`mt-[24px]`}>
      <input
        type="text"
        placeholder={'First Name *'}
        className={inputStyle}
      />
      <input
        type="text"
        placeholder={'Last Name *'}
        className={inputStyle}
      />
      <input
        type="text"
        placeholder={'Company Name *'}
        className={inputStyle}
      />
      <input
        type="email"
        placeholder={'Email Address *'}
        className={inputStyle}
      />
      <input
        type="text"
        placeholder={'Job Title *'}
        className={inputStyle}
      />
      <input
        type="text"
        placeholder={'Country *'}
        className={inputStyle}
      />
      <textarea
        placeholder={'Anyting else (optional)'}
        className={textAreaStyle}
        rows={3}
      />
      <div
        className={`p-[20px] w-full h-[80px] flex justify-between items-start mt-[48px] bg-[#363636]`}
      >
        <div className={`caption-small gray2`}>
          {'Yes, I’d like to receive ASLEEP’s\nmarketing communications'}
        </div>
        <input
          type="checkbox"
          id="scales"
          name="scales"
          className={`w-[20px] h-[20px]`}
        />
      </div>
      <MotionButton
        text={'Submit'}
        styleClass={`w-full bg-[#2E2E2E] h-[47px] gray2 px-[33px] py-[10px] mt-[24px] b1-medium-small medium:b2-medium-medi medium:px-[37px] medium:py-[12px] medium:mt-[48px] large:sub-large`}
      />
    </form>
  );
};

const TermsAndCondition = () => {
  return (
    <div
      className={`mt-[16px] [&>a]:text-[#3C41EA] [&>a]:text-[#3C41EA] [&>a]:underline gray4 p-[5px]`}
    >
      By submitting this form you have and agreed to our{'\n'}
      <a
        href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9A%B4%EC%A0%84%EB%A9%B4%ED%97%88+%EC%9E%AC%EB%B0%9C%EA%B8%89"
        target="__blank"
      >
        T&C’s
      </a>{' '}
      and{' '}
      <a
        href='<a
        href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9A%B4%EC%A0%84%EB%A9%B4%ED%97%88+%EC%9E%AC%EB%B0%9C%EA%B8%89"
        target="__blank"
      >'
      >
        Privacy Policy
      </a>
      {'\n'}
      Contact Point:
      <a href="mailto:privacy@asleep.ai">privacy@asleep.ai</a>
    </div>
  );
};
