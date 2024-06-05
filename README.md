# JAN-UI

## Install

```js
npm i janlab-ui
```

### 客製化顏色

```js
import JanUIProvider from "./theme/provider";

<JanUIProvider customColor={colorList}>{children}</JanUIProvider>;
```

#### colorList 格式

```js
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
```

## Components

### Button

props:

```js
type Props = {
  text?: string;
  children?: React.ReactNode;
  variant?: "text" | "outlined" | "contained";
  style?: any;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
};
```

### Dialog

props:

```js

type Props = {
    isOpen: boolean;
    onClose: () => void;
    okText?: string;
    closeText?: string;
    title?: string;
    startIcon?: React.ReactNode;
    content?: React.ReactNode;
}

```

### Typography

props:

```js
type Props = {
  variant?: TVariant;
  sprites?: TSprites;
  color?: string;
  children?: React.ReactNode;
}
```

### Select

props:

```js
type Props = {
  label: string;
  options: Array<{ key: number; value: string }>;
  value: any;
  onChange: (value: any) => void;
  disabled?: boolean;
  sx?: {
    bgColor: string;
    color: string;
  };
};

```
