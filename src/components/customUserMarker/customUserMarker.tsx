import { styled } from "nativewind";
import React from "react";
import { View,Image,Text } from "react-native";
import { Image as ExpoImage } from "expo-image";

const StyledView = styled(View)
const StyledImage = styled(Image)
const StyledExpoImage = styled(ExpoImage)

type TCustomUserMarkerProps = {
    image: string;
}

export const CustomUserMarker: React.FC<TCustomUserMarkerProps> = React.memo((
    {
        image
    }
) => {
    return (
        <StyledView className=" flex flex-col relative">
            <StyledView className="bg-black rounded-2xl p-1.5 z-20">
                <StyledView className=" border-toxic border-2 overflow-visible border-solid box-border rounded-full">
                    <StyledImage source={{
                        uri: image
                    }} className="w-[45px] h-[45px] rounded-full " />
                </StyledView>
            </StyledView>
            <StyledExpoImage className="h-[40px] w-[40px] relative -top-5 left-2 z-10 " source={require('../../../assets/traingle-down.svg')}  />
        </StyledView>
    );
})