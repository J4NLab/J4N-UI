# JAN-UI

## Install

```js
npm i janlab-ui
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