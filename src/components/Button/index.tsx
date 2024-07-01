import React from "react";

import { colorFilter } from "../../utils/function";
// import { _colorContext } from "../../utils/context";
import { colorList } from "../../theme/color";

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

const Button = ({
  text,
  textColor = "#fff",
  children,
  variant = "contained",
  style,
  startIcon,
  endIcon,
  onClick,
}: Props) => {
  const containedStyle = variant === "contained" ? colorList.primary[400] : "";
  // const colorLists = _colorContext() ? (_colorContext() as any) : colorList;

  // 獲取滑鼠點擊位置
  const getClickPosition = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    return { x, y };
  };

  // 監聽點擊事件
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { x, y } = getClickPosition(e);
    const rippleContainer = e.currentTarget.querySelector(
      ".ripple-container"
    ) as HTMLElement;
    const ripple = document.createElement("div");
    ripple.classList.add("ripple-effect");
    ripple.style.top = `${y}px`;
    ripple.style.left = `${x}px`;
    rippleContainer.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <button
      className={`relative flex items-center gap-[4px] px-[11px] text-[14px] rounded-[4px] ${containedStyle}`}
      style={style}
      onClick={(e) => {
        onClick();
        handleClick(e);
      }}
    >
      {startIcon}
      <div style={{ color: `${colorFilter(textColor)}` }}>
        {children || text}
      </div>
      {endIcon}
      <div className="ripple-container absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"></div>
    </button>
  );
};

export default Button;
