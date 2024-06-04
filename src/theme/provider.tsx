import React, { useState, useEffect } from "react";
import { colorList } from "./color";
import { DoggyContext } from "../context";

const JanUIProvider = ({ customColor, children }: any) => {
  const [color, setColor] = useState(colorList);

  useEffect(() => {
    setColor(customColor);
  }, [customColor]);

  return (
    <DoggyContext.Provider value={{ color }}>{children}</DoggyContext.Provider>
  );
};

export default JanUIProvider;
