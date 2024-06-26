import React from "react";
import Typography from "../Typography";

import emptyCorrect from "../../assets/emptyCorrect.svg";
import {
  StepperContainer,
  StepCircle,
  StepLine,
  StepTitle,
  StepItem,
} from "./style";

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

const Stepper = ({ currentStep, numberOfSteps, sx, stepMap }: Props) => (
  <StepperContainer>
    {stepMap.map((item, index) => (
      <React.Fragment key={item.content}>
        <StepItem>
          {currentStep > index ? (
            <StepCircle isPrev={true}>
              <img src={emptyCorrect} alt="" />
            </StepCircle>
          ) : (
            <>
              <StepCircle isActive={currentStep === index} isPrev={false}>
                <Typography
                  variant="h6"
                  color={currentStep === index ? "primary.300" : "gray.600"}
                >
                  {index + 1}
                </Typography>
              </StepCircle>
            </>
          )}
          <StepTitle>
            <Typography variant="h5" color="gray.900">
              {item.content}
            </Typography>
          </StepTitle>
        </StepItem>
        {index < numberOfSteps - 1 && (
          <StepLine
            isActive={currentStep >= index + 1}
            customWidth={sx?.stepLineWidth}
          />
        )}
      </React.Fragment>
    ))}
  </StepperContainer>
);

export default Stepper;
