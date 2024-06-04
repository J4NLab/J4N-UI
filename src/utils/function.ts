import { colorList } from "../theme/color";
import { _colorContext } from "./context";

export const colorFilter = (color: string) => {
  /**
   * color => success.500 | #000 | red
   */
  const colorLists = _colorContext() ? (_colorContext() as any) : colorList;

  if (color.split(".").length !== 2) {
    return color;
  }

  const [colorName, colorNumber] = color.split(".");
  return (colorLists.color as any)[colorName][colorNumber];
};
