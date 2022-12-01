import Image from 'next/image';

function MainBigImage() {
  return (
    <Image
      src={'/images/main/home_l.jpg'}
      alt={'asleep_offical_image'}
      fill
      priority={true}
    />
  );
}

export default MainBigImage;
