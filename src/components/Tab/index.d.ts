import React from "react";
type Props = {
    tabs: {
        label: string;
        content: React.ReactNode;
        icon?: React.ReactNode;
        notification?: number;
    }[];
    shape?: "capsule" | "rectangle";
    alignment?: "left" | "center" | "right";
};
declare const Tab: ({ tabs, shape, alignment }: Props) => React.JSX.Element;
export default Tab;
