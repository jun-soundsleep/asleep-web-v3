const MainVideo = () => {
  return (
    <section
      className={`mt-[132px] px-[16px] medium:mt-[284px] large:mt-[463px] large:to-[#121212] large:via-[#191998] large:from-[#090954] large:bg-gradient-to-t`}
    >
      <h2
        className={`text-white h1-bold-small text-center medium:h1-medi large:h1-large`}
      >
        Sleeptrack API Powers Human Centric All-day Care
      </h2>
      <h3
        className={`mt-[16px] b2-small gray0 text-center medium:b1-medium-medi large:b1-large`}
      >
        The missing piece of all-day care is sleep data. From built-in
        microphone in your smart devices, start collecting users’ sleep data
      </h3>
      <div
        className={`flex justify-center aspect-square w-full max-w-[1000px] mt-[20px] medium:mt-[32px] mx-[auto]`}
      >
        <video controls>
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

export default MainVideo;
