import alpha from 'color-alpha';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import { Col, Text, Row, TextStyleEnum } from '..';
import {themeColors} from '../../theme';
import { PropsViewSimpleStyle } from '../../utils/styles';

interface Props extends PropsViewSimpleStyle {
    readonly phButton?: number;
    readonly bgColor?: string;
    readonly borderColor?: string;
    readonly colorText?: string;
    readonly title?: string;
    readonly disabled?: boolean;
    readonly onPress?: () => void;
    readonly textStyle?: TextStyleEnum;
    readonly paddingVertical?: number;
    readonly borderRadius?: number;
    readonly icon?: () => React.ReactNode;
    showBase?: boolean;
    baseHeight?: number;
    readonly iconRight?: () => React.ReactNode;
}

export const Button = (props: Props) => {
    const {
        onPress,
        title,
        disabled,
        bgColor,
        borderColor,
        colorText,
        icon,
        iconRight,
        phButton,
        textStyle,
        paddingVertical,
        borderRadius,
        showBase = false,
        baseHeight,
        ...otherProps
    } = props;

    return (
        <Col {...otherProps}>
            <TouchableOpacity
                onPress={onPress}
                disabled={disabled}
                activeOpacity={0.8}>
                <Col
                    center
                    pv={paddingVertical}
                    bg={disabled ? alpha(bgColor ?? themeColors.gold, 0.6) : bgColor}
                    br={borderRadius}
                    bc={borderColor}>
                    <Row aI={'center'} ph={phButton}>
                        {icon?.()}
                        <Text
                            textStyle={textStyle}
                            color={colorText ?? themeColors.bgTabBarBg}>
                            {title}
                        </Text>
                        {!!iconRight && <Col ml={10}>{iconRight?.()}</Col>}
                    </Row>

                    {showBase ? (
                      <View style={{
                          backgroundColor: themeColors.green,
                          height: baseHeight ?? 20,
                          marginTop: (baseHeight && -baseHeight) ?? -20,
                          zIndex: -1
                      }} />
                    ) : null}
                </Col>
            </TouchableOpacity>
        </Col>
    );
};