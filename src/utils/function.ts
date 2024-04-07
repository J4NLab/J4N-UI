import { colorList } from "@/theme/color";

export const colorFilter = (color: string) => {
  /**
   * color => success.500
   */
  const [colorName, colorNumber] = color.split(".");
  return (colorList as any)[colorName][colorNumber];
};
