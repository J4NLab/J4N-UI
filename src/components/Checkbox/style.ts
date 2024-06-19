import styled, { css } from "styled-components";
import checkmark from "../../assets/checkmark.svg";

export const CheckboxContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  cursor: pointer;
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: left;
  cursor: pointer;
`;

export const CheckboxLabel = styled.div`
  margin-left: 8px;
  display: flex;
`;

export const CheckboxDescription = styled.div`
  margin-left: 24px;
`;

export const CheckboxInput = styled.input`
  display: none;
`;

const commonStyles = css<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? "#e7e7e7" : "#fff")};
  border: ${({ disabled }) =>
    disabled ? "1px solid #b8b8b8" : "1px solid #848484"};

  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        border-color: #626262;
      }
    `}
`;

export const CheckMark = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 13px;
  width: 13px;
  border-radius: 2px;
  ${commonStyles}

  ${CheckboxInput}:checked + & {
    background-color: ${({ disabled }) => (disabled ? "#e7e7e7" : "#019cb0")};
    border-color: ${({ disabled }) => (disabled ? "#b8b8b8" : "#019cb0")};

    ${({ disabled }) =>
      !disabled &&
      css`
        &:hover {
          background-color: #097984;
          border-color: #097984;
        }
      `}
  }

  &:after {
    content: "";
    display: none;
    width: 10px;
    height: 10px;
    background-image: url(${checkmark});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  ${CheckboxInput}:checked + &:after {
    display: ${({ disabled }) => (disabled ? "none" : "block")};
  }
`;
