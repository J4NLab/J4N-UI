export enum ColorType {
  error = "error",
  warning = "warning",
  success = "success",
  info = "info",
  gray = "gray",
}

export type ColorLevels = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000: string;
};

export type ColorList = Record<ColorType, ColorLevels>;
