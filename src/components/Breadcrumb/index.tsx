import React, { ReactNode } from "react";
import { BreadcrumbWrapper, CrumbItem, CrumbLabel } from "./style";

/**
 * crumbs: 所有麵包屑
 */
type Props = {
  crumbs: Crumb[];
};
type Crumb = {
  iconPosition: string; // 左|右|沒有icon
  icon?: ReactNode;
  label: ReactNode;
  onClick?: () => void;
};

const Breadcrumb = ({ crumbs }: Props) => (
  <BreadcrumbWrapper>
    {crumbs.map((crumb, index) => (
      <CrumbItem key={index} onClick={crumb.onClick}>
        {crumb.iconPosition === "left" && crumb.icon}
        <CrumbLabel className={`${index < crumbs.length - 1 ? "" : "active"}`}>
          {crumb.label}
        </CrumbLabel>
        {crumb.iconPosition === "right" && crumb.icon}
        {index < crumbs.length - 1 && <CrumbLabel>/</CrumbLabel>}
      </CrumbItem>
    ))}
  </BreadcrumbWrapper>
);

export default Breadcrumb;
