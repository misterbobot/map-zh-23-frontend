import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';
import * as Application from 'expo-application';
import React from "react";

const getLocalStoredId = async () => {
    return AsyncStorage.getItem('uuid').then((value) => {
        if (value) {
            return value;
        }
        else {
            let uid = uuid.v4();
            if (typeof uid === 'object') {
                uid = uid.reduce((acc, val) => acc + val, 'x');
            }
            AsyncStorage.setItem('uuid', uid);
            return uid;
        }
    });
}

export const getDeviceId = async () => {
    let androidId = await getLocalStoredId();
    return Application.androidId || androidId

}

export const useDeviceId = () => {
    const [deviceId, setDeviceId] = React.useState<string | undefined>(undefined);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        getDeviceId().then((id) => {
            setDeviceId(id);
        }).finally(() => {
            setLoading(false);
        }
        );
    }, []);

    return {
        deviceId,
        loading
    }
}
