import {Alert, Dimensions, Linking, Platform, StatusBar} from 'react-native';
import atob from './atob';
import {isIphoneX as isIphoneXH} from 'react-native-iphone-x-helper';
// import RNFS, {
//     DownloadBeginCallbackResult,
//     DownloadProgressCallbackResult,
// } from 'react-native-fs';

import isBoolean from 'lodash/isBoolean';
import {isNumber} from 'lodash';
// import Share from 'react-native-share';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const isIphoneX = isIphoneXH();


// Get from expo-device;

// export const applicationName = getApplicationName();
// export const systemVersion = getSystemVersion();
// export const appVersion = getVersion();
// export const appBuildId = getBuildNumber();

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const isDeviceNarrow = !isIphoneX && isIos && SCREEN_WIDTH <= 375;

export const convertToBoolean = (value?: string | boolean | null | number) => {
    if (isBoolean(value)) {
        return value;
    }
    if (isNumber(value)) {
        return !!value;
    }
    return !!parseInt(value ?? '', 10);
};

export const convertToInt = (value?: string | number) => {
    if (isNumber(value)) {
        return value;
    }
    return parseInt(value ?? '', 10);
};

export const convertToFloat = (value?: string) => {
    return Math.floor(parseFloat(value ?? ''));
};

export function getStatusBarHeight(skipAndroid: boolean) {
    return Platform.select({
        ios: isIphoneX ? 44 : 20,
        android: skipAndroid ? 0 : StatusBar.currentHeight,
        default: 0,
    });
}

export const showAlert = (text?: string, title?: string) => {
    Alert.alert(title ?? '', text);
};

export const onPressLink = (link?: string | null) => {
    try {
        if (link) {
            let url = link;
            if (
                url.indexOf('mailto') === -1 &&
                link.indexOf('http://') === -1 &&
                link.indexOf('https://') === -1
            ) {
                url = 'https://' + url;
            }
            Linking.openURL(url).then();
        }
    } catch (e) {
        console.log('Error::onPressLink', e);
    }
};

export const phoneFormat = (s?: string, plus = true) => {
    if (!s) {
        return '';
    }
    const startsWith = plus ? '+7' : '8';

    let phone = s.replace(/[^0-9]/g, '');
    if (phone.startsWith('7') && plus) {
        phone = phone.substr(1);
    }
    if (phone.startsWith('8')) {
        phone = phone.substr(1);
    }

    return phone.replace(
        /(\d{3})(\d{3})(\d{2})(\d{2})/g,
        `${startsWith} ($1) $2 $3 $4`,
    );
};

export const formatForTimer = (value: string) => {
    const secNum = parseInt(value, 10);
    let hours = Math.floor(secNum / 3600);
    let minutes = Math.floor((secNum - hours * 3600) / 60);
    let seconds = secNum - hours * 3600 - minutes * 60;

    let result = '';
    if (hours !== 0) {
        if (hours < 10) {
            result += `0${hours}:`;
        } else {
            result += `${hours}:`;
        }
    }
    if (minutes === 0) {
        result += '00:';
    } else {
        if (minutes < 10) {
            result += `0${minutes}:`;
        } else {
            result += `${minutes}:`;
        }
    }

    if (seconds === 0) {
        result += '00';
    } else {
        if (seconds < 10) {
            result += `0${seconds}`;
        } else {
            result += `${seconds}`;
        }
    }

    return result;
};

export const phoneTrim = (phone: string): string => {
    return phone.replace(/[^\d]/g, '');
};

export function clearPhone(numberPhone: string) {
    return phoneTrim(phoneFormat(numberPhone));
}

export const getExtFile = (path?: string) => {
    if (!path) {
        return '';
    }
    const extension = /[.]/.exec(path) ? /[^.]+$/.exec(path) : undefined;
    if (extension) {
        return ('' + extension).toLocaleLowerCase();
    }
};

export const mimetype = (fileName?: string) => {
    if (!fileName) {
        return undefined;
    }
    let allow = {
        png: 'image/png',
        jpeg: 'image/jpeg',
        jpg: 'image/jpg',
        gif: 'image/gif',
        tif: 'image/tif',
        tiff: 'image/tiff',
        webp: 'image/webp',
        mp4: 'video/mp4',
        m4v: 'video/x-m4v',
        avi: 'video/avi',
        mov: 'video/quicktime',
        wmv: 'video/x-ms-wmv',
        '3gp': 'video/3gpp',
        mkv: 'video/x-matroska',
        webm: 'video/webm',
        ogg: 'video/ogg',
        mp3: 'audio/mpeg',
        aac: 'audio/aac',
    };
    const ext = getExtFile(fileName);
    // @ts-ignore
    if (ext && allow[ext as any] !== undefined) {
        // @ts-ignore
        return allow[ext];
    } else {
        return undefined;
    }
};

export const checkTypeImage = (type: string) => {
    return (
        type?.toLocaleLowerCase().indexOf('png') !== -1 ||
        type?.toLocaleLowerCase().indexOf('jpg') !== -1 ||
        type?.toLocaleLowerCase().indexOf('jpeg') !== -1
    );
};

export function parseJwt(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join(''),
    );

    return JSON.parse(jsonPayload);
}

export const shareFile = async (
    url: string,
    isRemove: boolean = false,
    callBackProgress?: (res: any) => void,
    // callBackProgress?: (res: DownloadProgressCallbackResult) => void,
) => {
    if (!url) {
        return;
    }
    const path = await saveFile(url, callBackProgress);
    try {
        if (!path) {
            return;
        }
        if (path) {

            // function sharing

            // await Share.open({
            //     title: langStoreInstance.keyString('shareFile'),
            //     url: normalizeFilePath(`file://${path}`),
            //     subject: applicationName,
            // });
        }
    } catch (e) {
        console.log('Error::_shareFile', e);
    } finally {
        if (path && isRemove) {
            // Remove file

            // await RNFS.unlink(path);
        }
    }
};

export const saveFile = async (
    url: string,
    callBackProgress?: (res: any) => void,
    // callBackProgress?: (res: DownloadProgressCallbackResult) => void,
) => {
    try {
        const checkPermission = false;
        // const checkPermission = await permissionsStorage.checkPermissions();
        // Проверка на возможность сохранить

        if (checkPermission) {
            const name = url.substring(url.lastIndexOf('/') + 1);
            const fileName = `${name}`;
            let path;
            if (isIos) {
                // Path to file in ios
                path = '';
                // path = `${RNFS.LibraryDirectoryPath}/${fileName}`;
            } else {
                // Path to file in anth
                path = '';
                // path = `${RNFS.DownloadDirectoryPath}/${fileName}`;
            }
            // Check if path file exist
            const isExist = false;
            // const isExist = await RNFS.exists(path);
            if (isExist) {
                return path;
            }
            await _downloadFile({
                fromUrl: url,
                toFile: path,
                callBackProgress: callBackProgress,
            });
            return path;
        }
    } catch (e) {
        console.log('Error::_saveFile', e);
    }
};

export const normalizeFilePath = (path: string) => {
    return isIos && path.startsWith('file://') ? path.slice(7) : path;
};

const _downloadFile = async (params: {
    fromUrl: string;
    toFile: string;
    headers?: {[key: string]: string};
    callBackProgress?: (res: any) => void;
    // callBackProgress?: (res: DownloadProgressCallbackResult) => void;
}) => {
    const exists = false;
    // const exists = await RNFS.exists(params.toFile);
    if (exists) {
        return params.toFile;
    } else {
        const pathSave = false;
        // const pathSave = await RNFS.downloadFile({
        //     fromUrl: params.fromUrl,
        //     toFile: params.toFile,
        //     begin: (res: DownloadBeginCallbackResult) =>
        //         console.log('begin upload', res),
        //     progress: params.callBackProgress,
        //     progressDivider: 10,
        // }).promise;

        if (__DEV__) {
            console.log('pathSave', pathSave);
        }
        if (pathSave) {
            return params.toFile;
        }
        return undefined;
    }
};
