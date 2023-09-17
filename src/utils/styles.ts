import {
    PerpectiveTransform,
    RotateTransform,
    RotateXTransform,
    RotateYTransform,
    RotateZTransform,
    ScaleTransform,
    ScaleXTransform,
    ScaleYTransform,
    SkewXTransform,
    SkewYTransform,
    TranslateXTransform,
    TranslateYTransform,
    ViewStyle,
} from 'react-native';
import { isBoolean } from 'lodash';

export interface PropsViewSimpleStyle {
    mb?: number;
    mt?: number;
    ma?: number;
    mh?: number;
    mv?: number;
    ml?: number;
    mr?: number;
    pa?: number;
    ph?: number;
    pv?: number;
    pl?: number;
    pt?: number;
    pb?: number;
    pr?: number;
    flex?: number;
    bg?: string;
    shadow?: number;
    aI?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    aS?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    jC?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
    height?: number | string;
    width?: number | string;
    minWidth?: number | string;
    minHeight?: number | string;
    maxHeight?: number | string;
    br?: number;
    btlr?: number;
    btrr?: number;
    bw?: number;
    bBW?: number;
    bc?: string;
    center?: boolean;
    opacity?: number;
    zIndex?: number;
    overflow?: 'visible' | 'hidden';
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    position?: 'absolute' | 'relative';
    left?: number | string;
    right?: number | string;
    top?: number;
    bottom?: number;
    transform?: (
        | PerpectiveTransform
        | RotateTransform
        | RotateXTransform
        | RotateYTransform
        | RotateZTransform
        | ScaleTransform
        | ScaleXTransform
        | ScaleYTransform
        | TranslateXTransform
        | TranslateYTransform
        | SkewXTransform
        | SkewYTransform
        )[];
    round?: number;
    size?: number;
    absoluteFill?: boolean;
}

export const getViewStyle = (props?: PropsViewSimpleStyle): ViewStyle => {
    let styleObject: any = {
        marginBottom: (props && props.mb) ?? undefined,
        marginTop: (props && props.mt) ?? undefined,
        margin: (props && props.ma) ?? undefined,
        marginHorizontal: (props && props.mh) ?? undefined,
        marginVertical: (props && props.mv) ?? undefined,
        marginLeft: (props && props.ml) ?? undefined,
        marginRight: (props && props.mr) ?? undefined,
        padding: (props && props.pa) ?? undefined,
        paddingHorizontal: (props && props.ph) ?? undefined,
        paddingVertical: (props && props.pv) ?? undefined,
        paddingTop: (props && props.pt) ?? undefined,
        paddingBottom: (props && props.pb) ?? undefined,
        paddingRight: (props && props.pr) ?? undefined,
        paddingLeft: (props && props.pl) ?? undefined,
        flex: isBoolean(props?.flex) ? 1 : props?.flex ?? undefined,
        flexWrap: (props && props.flexWrap) ?? undefined,
        backgroundColor: (props && props.bg) ?? undefined,
        alignItems:
            (props && props.aI) ?? (props && props.center ? 'center' : undefined),
        alignSelf: props && props.aS ? props.aS : undefined,
        justifyContent:
            (props && props.jC) ?? (props && props.center ? 'center' : undefined),
        width: (props && props.width) ?? undefined,
        minWidth: (props && props.minWidth) ?? undefined,
        minHeight: (props && props.minHeight) ?? undefined,
        maxHeight: (props && props.maxHeight) ?? undefined,
        height: (props && props.height) ?? undefined,
        borderRadius: (props && props.br) ?? undefined,
        borderTopLeftRadius: (props && props.btlr) ?? undefined,
        borderTopRightRadius: (props && props.btrr) ?? undefined,
        borderWidth: (props && props.bw) ?? undefined,
        borderBottomWidth: (props && props.bBW) ?? undefined,
        borderColor: (props && props.bc) ?? undefined,
        opacity: (props && props.opacity) ?? undefined,
        zIndex: (props && props.zIndex) ?? undefined,
        overflow: (props && props.overflow) ?? undefined,
        position: (props && props.position) ?? undefined,
        top: (props && props.top) ?? undefined,
        bottom: (props && props.bottom) ?? undefined,
        left: (props && props.left) ?? undefined,
        right: (props && props.right) ?? undefined,
    };

    // @ts-ignore
    Object.keys(styleObject).forEach(function (key) {
        // @ts-ignore
        if (typeof styleObject[key] === 'undefined') {
            // @ts-ignore
            delete styleObject[key];
        }
    });

    if (props && props.absoluteFill) {
        styleObject = {
            ...styleObject,
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        };
    }

    if (props && !!props.round) {
        styleObject = {
            ...styleObject,
            width: props.round,
            height: props.round,
            borderRadius: props.round / 2,
        };
    }

    if (props && !!props.size) {
        styleObject = {
            ...styleObject,
            width: props.size,
            height: props.size,
        };
    }

    return styleObject;
};
