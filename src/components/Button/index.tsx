import React, { useContext } from "react";
import { DoggyContext } from "../../context/index";

type Props = {
  text?: string;
  children?: React.ReactNode;
  /**
   * 按鈕本身的大小
   */
  // size?: "small" | "medium" | "large";
  variant?: "text" | "outlined" | "contained";
  /**
   * custom inline style
   */
  style?: any;
  /**
   * icons for button
   */
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

const Button = ({
  text,
  children,
  // size,
  variant,
  style,
  startIcon,
  endIcon,
}: Props) => {
  const containedStyle = variant === "contained" ? "bg-red-500" : "";
  /**
   * 使用者傳遞過來的色號
   * 取 Primary 當作預設色號
   */
  const _basicColor = useContext(DoggyContext);

  console.log(_basicColor, "_basicColor");

  return (
    <>
      <button
        className={`flex items-center gap-[4px] px-[11px] border border-[colorList.infi.700] text-[14px] rounded-[4px] ${containedStyle}`}
        style={style}
      >
        {startIcon}
        {children || text}
        {endIcon}
      </button>
    </>
  );
};

export default Button;

// color
