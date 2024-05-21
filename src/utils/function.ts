import { colorList } from "../theme/color";

export const colorFilter = (color: string) => {
  /**
   * color => success.500 | #000 | red
   */
  if (color.split(".").length !== 2) {
    return color;
  }

  const [colorName, colorNumber] = color.split(".");
  return (colorList as any)[colorName][colorNumber];
};
