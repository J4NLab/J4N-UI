import React, { ReactNode } from "react";
/**
 * crumbs: 所有麵包屑
 */
type Props = {
    crumbs: Crumb[];
};
type Crumb = {
    iconPosition: string;
    icon?: ReactNode;
    label: ReactNode;
    onClick?: () => void;
};
declare const Breadcrumb: ({ crumbs }: Props) => React.JSX.Element;
export default Breadcrumb;
