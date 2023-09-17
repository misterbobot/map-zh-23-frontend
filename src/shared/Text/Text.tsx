import React, {useEffect, useState} from 'react';
import {StyleProp, TextStyle, TextProps, Text as TextRN, View} from 'react-native';
import {Col} from '../Col';
import {themeColors} from '../../theme';
import {RFValue} from '../../theme/fontResizer';
import {NextArrow} from "../../../assets/svg";
import { PropsViewSimpleStyle } from '../../utils/styles';
import { isDeviceNarrow, isIos } from '../../utils/helper';

export enum TextStyleEnum {
    body = 'body',
    huge = 'huge',
    hTitle = 'hTitle',
    hTitleRegular = 'hTitleRegular',
    h2 = 'h2',
    h3 = 'h3',
    p1Input = 'p1Input',
    p1EB = 'p1EB',
    p1Button = 'p1Button',
    p2 = 'p2',
    menu = 'menu',
}

interface TextFontWeight {
    fontWeight?:
        | 'normal'
        | 'bold'
        | '100'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900';
}
export interface PropsText extends PropsViewSimpleStyle {
    textProps?: TextProps;
    style?: TextStyle;
    textStyle?: TextStyleEnum;
    color?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    fontWeight?: TextFontWeight['fontWeight'];
    ta?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    textDecorationLine?:
        | 'none'
        | 'underline'
        | 'line-through'
        | 'underline line-through'
        | undefined;
    lH?: number;
    showBase?: boolean;
    baseHeight?: number;
    selected?: boolean;
    numberOfLines?: number;
}

export const Text = (props: PropsText) => {
    const {
        textStyle,
        style,
        fontWeight,
        ta,
        numberOfLines,
        color,
        children,
        textProps,
        lH,
        textDecorationLine,
        showBase = false,
        baseHeight,
        selected,
        ...otherProps
    } = props;
    const styleText = getRawTextStyle(textStyle, color);

    const [selectedText, setSelectedText] = useState(selected);

    useEffect(() => {
        setSelectedText(selected);
    }, [selected]);

    return (
        <Col {...otherProps}>
            <TextRN
                numberOfLines={numberOfLines}
                style={[
                    styleText,
                    style,
                    {textDecorationLine: textDecorationLine},
                    {textAlign: ta},
                    {lineHeight: lH},
                    {
                        fontFamily: 'Montserrat-Bold'
                    },
                    !!(fontWeight && isIos) && {
                        fontWeight: fontWeight,
                    },
                    
                ]}
                {...textProps}>
                {children !== undefined ? children : null}
            </TextRN>
            {showBase ? (
              <View style={{
                  backgroundColor: selectedText ? themeColors.graylight : themeColors.green,
                  height: baseHeight ?? 20,
                  marginTop: (baseHeight && -baseHeight) ?? -20,
                  zIndex: -1
              }} />
            ) : null}
        </Col>
    );
};

export const getRawTextStyle = (
    textStyle?: TextStyleEnum,
    color?: string,
): StyleProp<TextStyle> => {
    let result;
    switch (textStyle) {
        case TextStyleEnum.body:
            result = {
                fontSize: !isDeviceNarrow ? 14 : RFValue(14),
                lineHeight: !isDeviceNarrow ? 14 : RFValue(14),
            };
            break;
        case TextStyleEnum.huge:
            result = {
                fontSize: !isDeviceNarrow ? 51 : RFValue(51),
                lineHeight: !isDeviceNarrow ? 55 : RFValue(55),
            };
            break;
        case TextStyleEnum.hTitle:
            result = {
                fontSize: !isDeviceNarrow ? 32 : RFValue(32),
                lineHeight: !isDeviceNarrow ? 41 : RFValue(41),
            };
            break;
        case TextStyleEnum.hTitleRegular:
            result = {
                fontSize: !isDeviceNarrow ? 32 : RFValue(32),
                lineHeight: !isDeviceNarrow ? 32 : RFValue(32),
            };
            break;
        case TextStyleEnum.h2:
            result = {
                fontSize: !isDeviceNarrow ? 24 : RFValue(24),
                lineHeight: !isDeviceNarrow ? 24 : RFValue(24),
            };
            break;
        case TextStyleEnum.h3:
            result = {
                fontSize: !isDeviceNarrow ? 20 : RFValue(20),
                lineHeight: !isDeviceNarrow ? 20 : RFValue(20),
            };
            break;
        case TextStyleEnum.p1Input:
            result = {
                fontSize: !isDeviceNarrow ? 16 : RFValue(16),
                lineHeight: !isDeviceNarrow ? 20 : RFValue(20),
            };
            break;
        case TextStyleEnum.p1EB:
            result = {
                fontSize: !isDeviceNarrow ? 16 : RFValue(16),
                lineHeight: !isDeviceNarrow ? 20 : RFValue(20),
            };
            break;
        case TextStyleEnum.p1Button:
            result = {
                fontSize: !isDeviceNarrow ? 16 : RFValue(16),
                lineHeight: !isDeviceNarrow ? 20 : RFValue(20),
            };
            break;
        case TextStyleEnum.p2:
            result = {
                fontSize: !isDeviceNarrow ? 14 : RFValue(14),
                lineHeight: !isDeviceNarrow ? 18 : RFValue(18),
            };
            break;
        case TextStyleEnum.menu:
            result = {
                fontSize: !isDeviceNarrow ? 11 : RFValue(11),
                lineHeight: !isDeviceNarrow ? 14 : RFValue(14),
            };
            break;
        default:
            result = {};
    }

    // @ts-ignore
    return {
        color: color ?? themeColors.black,
        ...result,
    };
};
