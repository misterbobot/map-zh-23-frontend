import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const IconBackArrowSvg = (props: SvgProps) => (
    <Svg width={18} height={16} fill="none" {...props}>
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.63.202a.675.675 0 0 1-.01.955L2.328 7.325h14.54a.675.675 0 0 1 0 1.35H2.328l6.294 6.168a.675.675 0 1 1-.945.964L.202 8.482a.675.675 0 0 1 0-.964L7.676.193a.675.675 0 0 1 .954.01Z"
            fill="#7E7C8A"
        />
    </Svg>
);
