import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Row} from '../Row';
import {Text, TextStyleEnum} from '../Text';
import {themeColors} from '../../theme';
import {PropsViewSimpleStyle} from '../../../../hack-expo-app/app/utils/styles';

export interface Props extends PropsViewSimpleStyle {
    readonly disabled?: boolean;
    readonly title?: string;
    readonly icon?: () => React.ReactNode;
    readonly onPress?: () => void;
}

export const HeaderButton = (props: Props) => {
    const {title, icon, onPress, disabled, ...otherProps} = props;

    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} activeOpacity={0.8}>
            <Row
                br={8}
                ph={12}
                pv={12}
                opacity={disabled ? 0.5 : 1}
                bg={themeColors.bgInput}
                aI={'center'}
                {...otherProps}>
                {icon?.()}
                <Text color={themeColors.gray} textStyle={TextStyleEnum.p2}>
                    {title}
                </Text>
            </Row>
        </TouchableOpacity>
    );
};