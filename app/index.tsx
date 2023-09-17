import { Redirect } from "expo-router";
import { useIsFirstTime } from "../src/hooks/useIsFirstTime";
import React from "react";
import { getDeviceId, useDeviceId } from "../src/utils/getDeviceUid";
import { useDispatch } from "react-redux";
import { updateUsersList } from "../src/store/thunks/mapThunk";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../src/store";
import { Action } from "@reduxjs/toolkit";


export default function App() {
    const {isFirstTime, loading} = useIsFirstTime();
    const {deviceId, loading: deviceIdLoading} = useDeviceId()
    const dispatch = useDispatch<ThunkDispatch<RootState, void, Action>>();
    

    if (loading || deviceIdLoading) {
        return null;
    }

    if (isFirstTime) {
        dispatch(updateUsersList());
        return (
            <Redirect href={'/edit/'+deviceId} />
        );
    }

    return (
        <Redirect href={'/home'} />
    );
  }
  
  