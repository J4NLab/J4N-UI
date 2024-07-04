import React from "react";
type Props = {
    currentStep: number;
    numberOfSteps: number;
    sx?: {
        stepLineWidth: string;
    };
    stepMap: {
        title?: string;
        content: string;
    }[];
};
declare const Stepper: ({ currentStep, numberOfSteps, sx, stepMap }: Props) => React.JSX.Element;
export default Stepper;
