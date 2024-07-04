import { ReactNode } from "react";
type TDialog = {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
};
declare const Dialog: ({ isOpen, onClose, children }: TDialog) => false | import("react").JSX.Element;
/**
 * title
 *
 * startIcon: custom icon
 * status: 'correct' | 'info' | 'error' | 'warning'
 */
type TDialogTitle = {
    title?: string;
    startIcon?: ReactNode;
    onClose?: () => void;
    status?: "correct" | "info" | "error" | "warning";
    children?: ReactNode;
};
declare const DialogTitle: ({ startIcon, onClose, status, children, }: TDialogTitle) => import("react").JSX.Element;
/**
 * content
 */
type TDialogContent = {
    children?: ReactNode;
};
declare const DialogContent: ({ children }: TDialogContent) => import("react").JSX.Element;
type TDialogActions = {
    children?: ReactNode;
};
declare const DialogActions: ({ children }: TDialogActions) => import("react").JSX.Element;
export { Dialog, DialogTitle, DialogContent, DialogActions };
