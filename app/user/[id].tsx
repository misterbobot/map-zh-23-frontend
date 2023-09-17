import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import { UserScreen } from "../../src/screens/user/user";
import { useSelector } from "react-redux";
import { RootState } from "../../src/store";

export const User = () => {
    const { id } = useLocalSearchParams();

    const currentUserId = useSelector((state: RootState) => state.usersList.currentUserUid);
    
    if (typeof id !== 'string') {
        return (
            <UserScreen id={currentUserId} isSelf />
        )
    }

    return (
        <UserScreen id={id} isSelf={currentUserId === id} />
    )

}

export default User;