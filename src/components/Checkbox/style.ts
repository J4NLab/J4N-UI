import styled, { css } from "styled-components";
import checkmark from "../../assets/checkmark.svg";

export const CheckboxContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  cursor: pointer;
`;

export const CheckboxAndLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const CheckboxLabel = styled.div`
  margin-left: 8px;
  height: 24px;
`;

export const CheckboxDescription = styled.div`
  margin-left: 24px;
`;

export const CheckboxInput = styled.input`
  display: none;
`;
export const Checkmark = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 13px;
  width: 13px;
  background-color: ${(props) => (props.disabled ? "#e7e7e7" : "#fff")};
  border: ${(props) =>
    props.disabled ? "1px solid #b8b8b8" : "1px solid #848484"};
  border-radius: 2px;

  ${CheckboxInput}:not(:checked) + & {
    background-color: ${(props) => (props.disabled ? "#e7e7e7" : "#fff")};
    border: ${(props) =>
      props.disabled ? "1px solid #b8b8b8" : "1px solid #848484"};
  }

  ${CheckboxContainer}:hover ${CheckboxInput}:not(:checked) + & {
    background-color: ${(props) => (props.disabled ? "#e7e7e7" : "#fff")};
    border: ${(props) =>
      props.disabled ? "1px solid #b8b8b8" : "1px solid #626262"};
  }

  ${CheckboxInput}:checked + & {
    background-color: ${(props) => (props.disabled ? "#e7e7e7" : "#019cb0")};
    border: ${(props) =>
      props.disabled ? "1px solid #b8b8b8" : "1px solid #019cb0"};
  }

  ${CheckboxContainer}:hover ${CheckboxInput}:checked + & {
    background-color: ${(props) => (props.disabled ? "#e7e7e7" : "#097984")};
    border: ${(props) =>
      props.disabled ? "1px solid #b8b8b8" : "1px solid #097984"};
  }

  &:after {
    content: "";
    display: none;
    width: 10px;
    height: 10px;
  }

  ${CheckboxInput}:checked + &:after {
    display: ${(props) => (props.disabled ? "none" : "block")};
  }

  &:after {
    background-image: url(${checkmark});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`;
