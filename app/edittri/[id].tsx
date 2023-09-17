import { useLocalSearchParams } from "expo-router";
import React from "react";
import Step3 from "../../src/screens/updateProfile/step3";

const Edittri: React.FC = () => {
    const { id } = useLocalSearchParams();
    
    return (
        <Step3  userId={id} />
    );
}

export default Edittri;