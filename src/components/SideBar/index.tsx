import React, { ReactNode } from "react";
import { StyledSideBar } from "./style";

type Props = {
  isOpen: boolean;
  children?: ReactNode;
};
const SideBar = ({ isOpen, children }: Props) => (
  <div>
    <StyledSideBar className={`${isOpen ? "show" : "hide"}`}>
      {children}
    </StyledSideBar>
  </div>
);
export default SideBar;
