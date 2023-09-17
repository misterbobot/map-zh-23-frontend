import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const DotSvg = (props: SvgProps) => (
  <Svg width="4" height="5" viewBox="0 0 4 5" fill="none" {...props}>
    <Path d="M2.02 4.32C1.47333 4.32 1.01333 4.14 0.64 3.78C0.266667 3.42 0.08 2.94667 0.08 2.36C0.08 1.77333 0.266667 1.30667 0.64 0.959999C1.01333 0.6 1.47333 0.42 2.02 0.42C2.59333 0.42 3.06 0.6 3.42 0.959999C3.78 1.30667 3.96 1.77333 3.96 2.36C3.96 2.94667 3.78 3.42 3.42 3.78C3.06 4.14 2.59333 4.32 2.02 4.32Z" fill="black"/>
  </Svg>
);
