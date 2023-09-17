import React, { useEffect } from "react";
import { Map } from "../map/map";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { ThunkDispatch, Action } from "@reduxjs/toolkit";
import { updateUsersList } from "../../store/thunks/mapThunk";
import { CircledButton } from "../circledButton/circledButton";
import { View } from "react-native";
import { styled } from "nativewind";
import { router } from "expo-router";

const StyledView = styled(View);

export const FilterableUsersMap: React.FC = () => {

    const dispatch = useDispatch<ThunkDispatch<RootState, void, Action>>();

    useEffect(() => {
        dispatch(updateUsersList())
        let interval = setInterval(() => {
            dispatch(updateUsersList())
        }, 10000)
        
        return () => {
            clearInterval(interval)
        }
    }, [])

    const filters = useSelector((state: RootState) => state.filters);
    const usersList = useSelector((state: RootState) => state.usersList.list);

    const filteredList = usersList ? usersList.filter(user => !filters.tags.length || user.tags.find(tag => filters.tags.includes(tag))) : [];
    console.log(filteredList)

    return (
        <>
            <StyledView className="absolute top-14 z-20 right-3" >
                <CircledButton img={require("../../../assets/filters.svg")} onPress={() => router.push('/gnida/')} />
            </StyledView>
            <Map usersList={filteredList} />

        </>
    )
}