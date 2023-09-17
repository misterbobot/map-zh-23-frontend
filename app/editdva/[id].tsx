import { useLocalSearchParams } from "expo-router";
import React from "react";
import Step2 from "../../src/screens/updateProfile/step2";

const EditDva: React.FC = () => {
    const { id } = useLocalSearchParams();
    
    return (
        <Step2  userId={id} />
    );
}

export default EditDva;