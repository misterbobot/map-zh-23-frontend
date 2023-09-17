import React, { useEffect, useLayoutEffect, useMemo } from "react";
import { View } from "react-native";
import { FilterableUsersMap } from "../../components/filterableUsersMap";
import { FloatingMenu } from "../../components/floatingMenu/floatingMenu";
import { styled } from "nativewind";
import Constants from 'expo-constants';
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { router } from "expo-router";


const StyledView = styled(View)

export const HomeScreen: React.FC = () => {

    const currentUserId = useSelector((state: RootState) => state.usersList.currentUserUid);
    const usersList = useSelector((state: RootState) => state.usersList.list);

    const [activeTab, setActiveTab] = React.useState(0);

    useEffect(() => {
        const x = usersList?.find(user => user.uuid === currentUserId);
        if (x) {
            if (!x.nickname) {
                router.push('/edit/'+currentUserId);
            }
        }
    }, [])

    const tabs = useMemo(() => [
        <FilterableUsersMap />
    ], []);

    return (
        <StyledView className="relative" style={{
            marginTop: Constants.statusBarHeight
        }}>
            {tabs[activeTab]}
            <FloatingMenu onTabSelect={(tabIndex) => setActiveTab(tabIndex)} />
        </StyledView>
    );
}