import styled from "styled-components";

export const BreadcrumbWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
`;
export const CrumbItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const CrumbLabel = styled.span`
  font-family: "Noto Sans TC";
  font-weight: 400;
  font-size: 16px;
  padding: 0 5px;
  color: #9a9ea4;

  &.active {
    color: #424242;
  }
`;
