import React from 'react';
import {ViewProps, View, StyleSheet} from 'react-native';
import {getViewStyle, PropsViewSimpleStyle} from '../../utils/styles';

interface Props extends PropsViewSimpleStyle, ViewProps {
    children?: React.ReactNode;
}

export const Row = (props: Props) => {
    const {style, children, ...otherProps} = props;
    const simpleStyle = StyleSheet.create({
        item: getViewStyle(otherProps) ? getViewStyle(otherProps) : {},
    });

    return (
        <View style={[SS.style, simpleStyle.item, style]} {...otherProps}>
            {children}
        </View>
    );
};

const SS = StyleSheet.create({
    style: {flexDirection: 'row'},
});
