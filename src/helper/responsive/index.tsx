import {useWindowDimensions} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export const wp = (size: number) => {
  return scale(size);
};

export const hp = (size: number) => {
  return verticalScale(size);
};

export const ms = (size: number) => {
  return moderateScale(size);
};

export const useViewPort = () => {
  const {height, width} = useWindowDimensions();
  const setVw = (val: number) => {
    const result = val * (width / 100);
    return result;
  };
  const setVh = (val: number) => {
    const result = val * (height / 100);
    return result;
  };
  const values = {setVh, setVw};
  return values;
};
// const useVw = () => {
//   const {width} = useWindowDimensions();
//   const result = width;
//   return result;
// };
// export const useVh = () => {
//   const {height} = useWindowDimensions();
//   const result = height;
//   return result;
// };

// export const vw =  useVw()
// export const vh =  useVh()
