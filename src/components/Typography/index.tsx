import React from "react";
import { colorFilter } from "../../utils/function";
import { TVariant, TSprites } from "../../types";

/**
 * sprite: solid regular thin
 *
 * font-weight: 700 500 400
 *
 * variant: h1 h2 h3 h4 h5 h6 p span
 */
type Props = {
  variant?: TVariant;
  sprites?: TSprites;
  color?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

/**
 * @param variant: h1, h2, h3, h4, h5, h6,
 * @param sprites: solid, regular, thin
 * @param color
 * @param style
 * @param children
 * @returns
 */
const Typography = ({
  variant = "h3",
  sprites = "solid",
  color = "#000",
  style,
  children,
}: Props) => {
  // font-size
  const variantStyle = (v: TVariant = "h3"): string => {
    switch (v) {
      case "h1":
        return "text-[32px]";
      case "h2":
        return "text-[24px]";
      case "h3":
        return "text-[18px]";
      case "h4":
        return "text-[16px]";
      case "h5":
        return "text-[14px]";
      case "h6":
        return "text-[12px]";
      default:
        return "text-[18px]";
    }
  };

  // font-weight
  const spriteStyle = (s: TSprites = "regular") => {
    switch (s) {
      case "solid":
        return "font-bold";
      case "regular":
        return "font-medium";
      case "thin":
        return "font-normal";
      default:
        return "font-medium";
    }
  };

  return (
    <div
      className={`${variantStyle(variant)} ${spriteStyle(sprites)}`}
      style={{ color: `${colorFilter(color)}`, ...style }}
    >
      {children}
    </div>
  );
};

export default Typography;
