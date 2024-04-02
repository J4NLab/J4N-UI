import React, { useState, createContext, useEffect } from "react";
import { colorList } from "./color";

export const DoggyContext: any = createContext({
  color: colorList,
});

const JanlabUIProvider = ({ customColor, children }: any) => {
  const [color, setColor] = useState(colorList);

  useEffect(() => {
    setColor(customColor);
  }, [customColor]);

  return (
    <DoggyContext.Provider value={color}>{children}</DoggyContext.Provider>
  );
};

export default JanlabUIProvider;
