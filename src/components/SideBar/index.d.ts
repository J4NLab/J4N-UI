import React, { ReactNode } from "react";
type Props = {
    isOpen: boolean;
    children?: ReactNode;
};
declare const SideBar: ({ isOpen, children }: Props) => React.JSX.Element;
export default SideBar;
