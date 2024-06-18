import styled from "styled-components";

export const StepperContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StepTitle = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 8px;
  white-space: nowrap;
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const StepCircle = styled.div<{ isActive?: boolean; isImage?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${(props) => !props.isImage && "2px solid #3b82f6"};
  background-color: ${(props) => (props.isActive ? "#3b82f6" : "transparent")};
`;

export const StepLine = styled.div<{ isActive: boolean; customWidth?: string }>`
  height: 4px;
  width: ${(props) => props.customWidth || "100%"};
  background-color: ${(props) => (props.isActive ? "#3b82f6" : "#d1d5db")};
`;
