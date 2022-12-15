import TextWithWishIcon from '../common/TextWithWishIcon';
import MotionButton from '../common/MotionButton';
import useGetCurrentSize from '../../../hooks/useGetCurrentSize';
import { deviceType } from '../../../styles/device';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContactInputType } from '../../type/contact';
import { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';

const ContactInput = () => {
  const currentSize = useGetCurrentSize();
  const isLarge = currentSize === deviceType.large;

  return (
    <div className={`mt-[168px] large:mt-[unset] large:min-w-[640px]`}>
      {!isLarge && (
        <>
          <TextWithWishIcon text={'Contact Us'} />
          <h2 className={`gray0 b1-small text-center mt-[16px]`}>
            Find out how you can integrate sleep technology to your product
          </h2>
        </>
      )}
      <Form />
    </div>
  );
};

export default ContactInput;

const Form = () => {
  const inputStyle = `focus:text-white pb-[6px] ${styles.inputBorderStyle} gray3 b2-small w-full mt-[40px] medium:b1-medium-medi large:b1-large `;
  const textAreaStyle = `focus:text-white ${styles.textAreaStyle} pb-[12px] gray3 b2-small bg-transparent mt-[40px] w-full medium:b2-medi large:b1-large`;
  const [isLoading, setLoading] = useState(false);

  const firstNameRef = useRef<null | HTMLInputElement>(null);
  const lastNameRef = useRef<null | HTMLInputElement>(null);
  const jobRef = useRef<null | HTMLInputElement>(null);
  const companyRef = useRef<null | HTMLInputElement>(null);
  const emailRef = useRef<null | HTMLInputElement>(null);
  const countryRef = useRef<null | HTMLInputElement>(null);

  const { register, handleSubmit, watch } = useForm<ContactInputType>();
  const { ref: firstNameElement, ...firstNameRest } = register('firstName');
  const { ref: lastNameElement, ...lastNameRest } = register('lastName');
  const { ref: jobElement, ...jobRest } = register('job');
  const { ref: companyElement, ...companyRest } = register('companyName');
  const { ref: emailElement, ...emailRest } = register('email');
  const { ref: countryElement, ...countryRest } = register('country');

  const onSubmit: SubmitHandler<ContactInputType> = async data => {
    if (!checkBlankRequiredInput(data) || isLoading) {
      return;
    }

    setLoading(true);
    await fetch('/api/gs', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(el => {
        window.alert('접수가 완료되었습니다.');
        setLoading(false);
        window.location.reload();
      })
      .catch(e => {
        window.alert('다시 시도해주세요.');
        setLoading(false);
      });
  };

  const checkBlankRequiredInput = (data: ContactInputType): boolean => {
    const { firstName, lastName, email, job, companyName, country } = data;
    const emailTest =
      /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
        email
      );

    if (!firstName) {
      firstNameRef.current.classList.add(
        styles.contactInput,
        !firstName && styles.contactInputPlaceholder
      );
      return false;
    } else {
      firstNameRef.current.classList.remove(
        styles.contactInput,
        styles.contactInputPlaceholder
      );
    }

    if (!lastName) {
      lastNameRef.current.classList.add(
        styles.contactInput,
        !lastName && styles.contactInputPlaceholder
      );
      return false;
    } else {
      lastNameRef.current.classList.remove(
        styles.contactInput,
        !lastName && styles.contactInputPlaceholder
      );
    }

    if (!companyName) {
      companyRef.current.classList.add(
        styles.contactInput,
        !companyName && styles.contactInputPlaceholder
      );
      return false;
    } else {
      companyRef.current.classList.remove(
        styles.contactInput,
        styles.contactInputPlaceholder
      );
    }
    if (!emailTest) {
      emailRef.current.classList.add(
        styles.contactInput,
        !emailTest && styles.contactInputPlaceholder
      );
      return false;
    } else {
      emailRef.current.classList.remove(
        styles.contactInput,
        styles.contactInputPlaceholder
      );
    }

    if (!job) {
      jobRef.current.classList.add(
        styles.contactInput,
        !job && styles.contactInputPlaceholder
      );
      return false;
    } else {
      jobRef.current.classList.remove(
        styles.contactInput,
        styles.contactInputPlaceholder
      );
    }

    if (!country) {
      countryRef.current.classList.add(
        styles.contactInput,
        !country && styles.contactInputPlaceholder
      );
      return false;
    } else {
      countryRef.current.classList.remove(
        styles.contactInput,
        styles.contactInputPlaceholder
      );
    }
    return true;
  };

  useEffect(
    function handleInputWatch() {
      const { firstName, lastName, email, job, companyName, country } = watch();
      const emailTest =
        /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
          email
        );
      console.log(watch());
      console.log(firstName);
      console.log(lastName.length);
      if (firstName) {
        firstNameRef.current.classList.remove(
          styles.contactInput,
          styles.contactInputPlaceholder
        );
      }
      if (lastName) {
        console.log(lastName);
        lastNameRef.current.classList.remove(
          styles.contactInput,
          styles.contactInputPlaceholder
        );
      }
      if (emailTest) {
        emailRef.current.classList.remove(
          styles.contactInput,
          styles.contactInputPlaceholder
        );
      }
      if (companyName) {
        companyRef.current.classList.remove(
          styles.contactInput,
          styles.contactInputPlaceholder
        );
      }
      if (country) {
        countryRef.current.classList.remove(
          styles.contactInput,
          styles.contactInputPlaceholder
        );
      }
      if (job) {
        jobRef.current.classList.remove(
          styles.contactInput,
          styles.contactInputPlaceholder
        );
      }
    },
    [watch()]
  );

  return (
    <form
      className={`mt-[24px] large:mt-[unset]`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={`medium:grid medium:grid-cols-2 medium:gap-[36px]`}>
        <input
          type="text"
          placeholder={'First Name *'}
          className={inputStyle}
          ref={e => {
            firstNameElement(e);
            firstNameRef.current = e;
          }}
          {...firstNameRest}
        />
        <input
          type="text"
          placeholder={'Last Name *'}
          className={inputStyle}
          ref={e => {
            lastNameElement(e);
            lastNameRef.current = e;
          }}
          {...lastNameRest}
        />
        <input
          type="text"
          placeholder={'Company Name *'}
          className={inputStyle}
          ref={e => {
            companyElement(e);
            companyRef.current = e;
          }}
          {...companyRest}
        />
        <input
          type="text"
          placeholder={'Email Address *'}
          className={inputStyle}
          ref={e => {
            emailElement(e);
            emailRef.current = e;
          }}
          {...emailRest}
        />
        <input
          type="text"
          placeholder={'Job Title *'}
          className={inputStyle}
          ref={e => {
            jobElement(e);
            jobRef.current = e;
          }}
          {...jobRest}
        />
        <input
          type="text"
          placeholder={'Country *'}
          className={inputStyle}
          ref={e => {
            countryElement(e);
            countryRef.current = e;
          }}
          {...countryRest}
        />
      </div>
      <textarea
        placeholder={'Anyting else (optional)'}
        className={textAreaStyle}
        rows={3}
        {...register('anything', { required: false })}
      />
      <div
        className={`p-[20px] w-full h-[80px] flex justify-between items-center mt-[48px] bg-[#363636] medium:p-[32px]`}
      >
        <div
          className={`caption-small gray2 medium:caption-medi large:b3-large`}
        >
          {'Yes, I’d like to receive ASLEEP’s\nmarketing communications'}
        </div>
        <input
          type="checkbox"
          id="scales"
          name="scales"
          className={`w-[20px] h-[20px]`}
          {...register('marketing', { required: false })}
        />
      </div>
      <div
        className={`medium:flex medium:flex-row-reverse medium:mt-[32px] medium:justify-start medium:gap-[48px]`}
      >
        <MotionButton
          text={'Submit'}
          styleClass={`w-full bg-[#3C41EA] h-[47px] text-white  px-[33px] py-[10px] mt-[24px] b1-medium-small medium:b2-medium-medi medium:px-[37px] medium:py-[12px] medium:mt-[unset] large:sub-large`}
          clickHandler={() => {}}
        />
        <TermsAndCondition />
      </div>
    </form>
  );
};

const TermsAndCondition = () => {
  return (
    <div
      className={`mt-[16px] [&>a]:text-[#3C41EA] [&>a]:text-[#3C41EA] [&>a]:underline gray4 medium:mt-[unset]`}
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
        href="
        https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9A%B4%EC%A0%84%EB%A9%B4%ED%97%88+%EC%9E%AC%EB%B0%9C%EA%B8%89
      "
        target="__blank"
      >
        Privacy Policy
      </a>
      {'\n'}
      Contact Point:
      <a href="mailto:privacy@asleep.ai">privacy@asleep.ai</a>
    </div>
  );
};
