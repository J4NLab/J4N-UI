import styled, { keyframes } from "styled-components";
// Define keyframes for animations
const flyIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  20% {
    transform: translateX(-100%);
    opacity: 0.75;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const flyOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;
export const StyledSideBar = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: fit-content;
  background: white;
  padding: 20px;
  border-radius: 4px;
  opacity: 0;
  &.show {
    animation: ${flyIn} 1s forwards;
  }

  &.hide {
    animation: ${flyOut} 1s forwards;
  }
`;
