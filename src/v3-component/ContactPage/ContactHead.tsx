import ContactIcon from '/public/imagev3/contact/contact_0.svg';

const ContactHead = () => {
  return (
    <div>
      <h1 className={`title-small`}>{`Let’s chat!\nBecome our Partner`}</h1>
      <h2 className={`mt-[16px] gray1 b1-small`}>
        {`Fill out the form and find out how we can work together. By requesting a demo you will be able to connect with our team to learn more about our product.`}
      </h2>
      <h3 className={`gray2 caption-small text-center mt-[100px]`}>
        {`Trusted by top partner institutions`}
      </h3>
      <div className={`flex justify-center mt-[24px]`}>
        <ContactIcon />
      </div>
    </div>
  );
};

export default ContactHead;
