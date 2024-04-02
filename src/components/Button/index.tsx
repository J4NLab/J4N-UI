import React, { useContext } from "react";
import { DoggyContext } from "@/theme/provider";

type Props = {
  text?: string;
  children?: React.ReactNode;
  /**
   * 按鈕本身的大小
   */
  size?: "small" | "medium" | "large";
  variant?: "text" | "outlined" | "contained";
  /**
   * inline style
   */
  style?: any;
};

const Button = ({ text, children, size, variant, style }: Props) => {
  const containedStyle = variant === "contained" ? "bg-red-500" : "";
  const _basicColor = useContext(DoggyContext);

  return (
    <button
      className={`px-[11px] border border-red-100 text-[14px] ${containedStyle}`}
      style={style}
    >
      {children || text}
    </button>
  );
};

export default Button;
