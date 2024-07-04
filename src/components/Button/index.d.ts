import React from "react";
import "./style.css";
type Props = {
    text?: string;
    textColor?: string;
    children?: React.ReactNode;
    variant?: "text" | "outlined" | "contained";
    style?: any;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick: () => void;
};
declare const Button: ({ text, textColor, children, variant, style, startIcon, endIcon, onClick, }: Props) => React.JSX.Element;
export default Button;
