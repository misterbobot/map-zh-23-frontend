import { styled } from "nativewind";
import { View, Text } from "react-native";
import { Image } from 'expo-image';
import { Link } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const StyledView = styled(View)
const StyledImage = styled(Image)

export type TFloatingMenuProps = { 
    onTabSelect: (tabIndex: number) => void;
}

export const FloatingMenu: React.FC<TFloatingMenuProps> = ({onTabSelect}) => {
    const currentUserId = useSelector((state: RootState) => state.usersList.currentUserUid);
    return (
        <StyledView className="fixed border-2 border-toxic flex py-3 px-[25px] bg-black bottom-40 w-36 flex-row rounded-3xl ml-auto mr-auto box-border">
            <StyledView className="flex flex-col ">
                <StyledImage className="w-7 h-7 mr-8" source={require('../../../assets/home-active.svg')}  />
                <StyledView className=" bg-toxic w-[6px] h-[6px] rounded-full mt-1.5 ml-3" />
            </StyledView>
            <Link href={"/user/"+currentUserId}>
                <StyledView className="flexflex-col ">
                    <StyledImage className="w-7 h-7" source={require('../../../assets/profiles.svg')}  />
                    <StyledView className=" bg-black w-[6px] h-[6px] rounded-full mt-1" />
                </StyledView>
            </Link>
        </StyledView>
    )
}