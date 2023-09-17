import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, SvgProps} from 'react-native-svg';

export const AvatarDefaultSvg = (props: SvgProps) => (
  <Svg width={148} height={148} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M74 148c40.869 0 74-33.131 74-74 0-40.87-33.131-74-74-74C33.13 0 0 33.13 0 74c0 40.869 33.13 74 74 74Z"
        fill="#54525C"
      />
      <Path
        d="M74 111.022c-8.616 0-16.433-3.698-22.2-9.673-.005 3.581-.135 8.75-1.085 12.521.623.381 1.106 1.006 1.2 1.784C53.148 125.67 62.64 133.222 74 133.222c11.358 0 20.851-7.553 22.084-17.568.096-.779.569-1.403 1.201-1.782-.95-3.772-1.08-8.942-1.084-12.523-5.768 5.975-13.585 9.673-22.201 9.673Z"
        fill="#D9D9D9"
      />
      <Path
        d="M95.719 101.804c-5.72 5.697-13.333 9.218-21.719 9.218-8.616 0-16.433-3.698-22.2-9.673-.005 3.581-.135 8.75-1.085 12.521.623.381 1.106 1.006 1.2 1.784.545 4.427 2.707 8.369 5.928 11.394 14.852-2.091 31.708-16.756 37.876-25.244Z"
        fill="#B8B8B8"
      />
      <Path
        d="M96.2 49.355H54.267c-6.8 0-12.334 5.533-12.334 12.333v14.8c0 19.042 14.386 34.534 32.067 34.534s32.067-15.492 32.067-34.534V59.222c0-5.44-4.426-9.867-9.867-9.867Z"
        fill="#D9D9D9"
      />
      <Path
        d="M91.267 22.222H59.2c-4.64 0-8.54 3.218-9.59 7.538-8.491 1.08-15.077 8.35-15.077 17.128v12.334c0 6.357 2.699 12.287 7.4 16.502V61.688c0-6.8 5.533-12.333 12.334-12.333H96.2c5.441 0 9.867 4.426 9.867 9.867V75.72c4.702-4.214 7.4-10.144 7.4-16.5v-14.8c0-12.24-9.959-22.2-22.2-22.2Z"
        fill="#1E1E1E"
      />
      <Path
        d="M19.003 123.501C32.548 138.54 52.167 148 74 148s41.452-9.46 54.997-24.499c-2.362-3.193-5.693-5.787-9.975-6.986a2.212 2.212 0 0 0-.299-.064l-19.69-2.955a4.643 4.643 0 0 0-.501-.027 2.465 2.465 0 0 0-2.448 2.165C94.851 125.649 85.358 133.202 74 133.202c-11.36 0-20.853-7.552-22.084-17.568-.154-1.273-1.301-2.23-2.51-2.164a2.046 2.046 0 0 0-.439.026l-19.69 2.954c-.101.015-.2.037-.299.064-4.282 1.2-7.613 3.794-9.975 6.987Z"
        fill="#7E7C8A"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h148v148H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);