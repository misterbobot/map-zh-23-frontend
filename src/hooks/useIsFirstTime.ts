import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useLayoutEffect } from "react";

export const useIsFirstTime = () => {
    const [isFirstTime, setIsFirstTime] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    useLayoutEffect(() => {
        AsyncStorage.getItem('isFirstTime').then((value) => {
            if (value !== 'false') {
                setIsFirstTime(true);
            }
        }
        ).finally(() => {
            setLoading(false);
        }
        );
    }
    , []);

    return {
        isFirstTime,
        loading
    };
}