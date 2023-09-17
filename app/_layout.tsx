import { Provider } from "react-redux";
import { RootState, store } from "../src/store";
import { Slot } from 'expo-router';
import React, { useEffect } from "react";
import { userLocation } from "../src/utils/location/Location";
import { useFonts } from 'expo-font';

userLocation.startUpdating();

export default function Layout() {

    const [fontsLoaded] = useFonts({
        'Montserrat-Black': require('../assets/Montserrat/static/Montserrat-Black.ttf'),
        'Montserrat-BlackItalic': require('../assets/Montserrat/static/Montserrat-BlackItalic.ttf'),
        'Montserrat-Bold': require('../assets/Montserrat/static/Montserrat-Bold.ttf'),
        'Montserrat-BoldItalic': require('../assets/Montserrat/static/Montserrat-BoldItalic.ttf'),
        'Montserrat-ExtraBold': require('../assets/Montserrat/static/Montserrat-ExtraBold.ttf'),
        'Montserrat-ExtraBoldItalic': require('../assets/Montserrat/static/Montserrat-ExtraBoldItalic.ttf'),
        'Montserrat-ExtraLight': require('../assets/Montserrat/static/Montserrat-ExtraLight.ttf'),
        'Montserrat-ExtraLightItalic': require('../assets/Montserrat/static/Montserrat-ExtraLightItalic.ttf'),
        'Montserrat-Italic': require('../assets/Montserrat/static/Montserrat-Italic.ttf'),
        'Montserrat-Light': require('../assets/Montserrat/static/Montserrat-Light.ttf'),
        'Montserrat-LightItalic': require('../assets/Montserrat/static/Montserrat-LightItalic.ttf'),
        'Montserrat-Medium': require('../assets/Montserrat/static/Montserrat-Medium.ttf'),
        'Montserrat-MediumItalic': require('../assets/Montserrat/static/Montserrat-MediumItalic.ttf'),
        'Montserrat-Regular': require('../assets/Montserrat/static/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('../assets/Montserrat/static/Montserrat-SemiBold.ttf'),
        'Montserrat-SemiBoldItalic': require('../assets/Montserrat/static/Montserrat-SemiBoldItalic.ttf'),
        'Montserrat-Thin': require('../assets/Montserrat/static/Montserrat-Thin.ttf'),
        'Montserrat-ThinItalic': require('../assets/Montserrat/static/Montserrat-ThinItalic.ttf'),
      });

    return (
        <Provider store={store}>
            <Slot />
        </Provider>
    )
}