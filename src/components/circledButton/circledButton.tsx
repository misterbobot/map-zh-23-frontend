import { styled } from "nativewind";
import { TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";

const StyledView = styled(View);
const StyledImage = styled(Image);

type TCircledButtonProps = {
    img: string;
    onPress: () => void;
}

export const CircledButton: React.FC<TCircledButtonProps> = (
    {
        img,
        onPress
    }
) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <StyledView className="w-[50px] h-[50px] bg-toxic rounded-full flex items-center justify-center" >
                <StyledImage source={img} className="w-[30px] h-[30px]" />
            </StyledView>
        </TouchableOpacity>
    );
}