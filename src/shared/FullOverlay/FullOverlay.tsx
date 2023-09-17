import React from 'react';
import {ActivityIndicator} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {themeColors} from '../../theme';
import {Col} from '../Col';

interface Props {
    readonly visible: boolean;
    readonly textContent?: () => JSX.Element;
}

export const FullOverlay = (props: Props) => {
    return (
        <Spinner
            visible={props.visible}
            overlayColor={'#fff'}>
            <Col flex={1} center>
                <ActivityIndicator size={'large'} color={themeColors.white} />
                {!!props.textContent && props.textContent()}
            </Col>
        </Spinner>
    );
};
