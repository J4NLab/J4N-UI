import { useContext } from "react";
import { DoggyContext } from "../context/index";

export const _colorContext = () => {
    return  useContext(DoggyContext);
}