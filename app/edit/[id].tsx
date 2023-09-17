import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";

import Step1  from "../../src/screens/updateProfile/step1";

export const UpdateProfileScreen = () => {
    const { id } = useLocalSearchParams();

    const [activeStep, setActiveStep] = useState(0);

 
    return (
        <Step1 userId={id} />
    )

}

export default UpdateProfileScreen;