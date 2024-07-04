import React from "react";
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
    disabled?: boolean;
};
/**
 * @param variant: h1, h2, h3, h4, h5, h6,
 * @param sprites: solid, regular, thin
 * @param color
 * @param style
 * @param children
 * @returns
 */
declare const Typography: ({ variant, sprites, color, style, children, disabled, }: Props) => React.JSX.Element;
export default Typography;
