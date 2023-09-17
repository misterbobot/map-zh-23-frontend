import { useLocalSearchParams } from "expo-router";
import React from "react";
import Step4 from "../../src/screens/updateProfile/step4";

const EditChetiri: React.FC = () => {
    const { id } = useLocalSearchParams();
    
    return (
        <Step4  userId={id} />
    );
}

export default EditChetiri;