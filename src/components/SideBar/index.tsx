import React, { ReactNode } from "react";
import "./style.css";

type Props = {
  isOpen: boolean;
  children?: ReactNode;
};
const SideBar = ({ isOpen, children }: Props) => (
  <div className={`sideBar ${isOpen ? "show" : "hide"}`}>{children}</div>
);
export default SideBar;
