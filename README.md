# JAN-UI

## Install

```js
npm i janlab-ui
```

## Components

### Button

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

```js
type TDialog = {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
}
```

### DialogTitle

```js
type TDialogTitle = {
    title?: string;
    startIcon?: ReactNode;
    onClose?: () => void;
    status?: 'correct' | 'info' | 'error' | 'warning';
    children?: ReactNode;
};
```

### DialogContent

```js
type TDialogContent = {
    children?: ReactNode;
};
```

### DialogActions - with button group

```js
type TDialogActions = {
    children?: ReactNode;
}
```

### Typography

```js
type Props = {
  variant?: TVariant;
  sprites?: TSprites;
  color?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
```