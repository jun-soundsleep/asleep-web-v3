import { useWindowSize } from 'react-use';
import { breakpoints, deviceType } from '../styles/device';

const useGetCurrentSize = () => {
  const { width } = useWindowSize();

  if (width >= breakpoints[1]) {
    return deviceType.large;
  } else if (width >= breakpoints[0]) {
    return deviceType.medium;
  } else {
    return deviceType.small;
  }
};

export default useGetCurrentSize;
