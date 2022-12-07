import WithViewPortOpacity from '../Animation/WithViewPortOpacity';

const SleeTechVideoSection = () => {
  return (
    <WithViewPortOpacity styleClass={`px-[16px] pt-[100px]  large:pt-[303px]`}>
      <>
        <h2
          className={`h1-bold-small text-center medium:h1-medi large:h1-large`}
        >
          The Most Scalable Sleeptech, Acoustic Sleep AI
        </h2>
        <h3
          className={`mt-[16px] b1-small gray0 text-center medium:b1-medium-medi large:b1-large`}
        >
          The sleep data from the service is accelerating imrpovement of
          Acoustic Sleep AI even at this moment.
        </h3>
        <div
          className={`flex justify-center w-full max-w-[1000px] mt-[20px] medium:mt-[56px] mx-[auto] h-[328px] large:mt-[66px]`}
        >
          <video
            controls
            className={`h-full w-full`}
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </>
    </WithViewPortOpacity>
  );
};

export default SleeTechVideoSection;
