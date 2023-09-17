import {isIphoneX} from 'react-native-iphone-x-helper';
import {Platform, StatusBar, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export function RFPercentage(percent: number) {
    const standardLength = width > height ? width : height;
    const offset =
        (width > height
            ? 0
            : Platform.OS === 'ios'
                ? 78
                : StatusBar.currentHeight) ?? 0; // iPhone X style SafeAreaView size in portrait

    const deviceHeight =
        isIphoneX() || Platform.OS === 'android'
            ? standardLength - offset
            : standardLength;

    const heightPercent = (percent * deviceHeight) / 100;
    return Math.round(heightPercent);
}

export function RFValue(fontSize: number, standardScreenHeight = 812) {
    const standardLength = width > height ? width : height;
    const offset =
        (width > height
            ? 0
            : Platform.OS === 'ios'
                ? 78
                : StatusBar.currentHeight) ?? 0; // iPhone X style SafeAreaView size in portrait

    const deviceHeight =
        isIphoneX() || Platform.OS === 'android'
            ? standardLength - offset
            : standardLength;

    const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
    return Math.round(heightPercent);
}
