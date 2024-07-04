/// <reference types="react" />
declare const _default: {
    JanUIProvider: ({ customColor, children }: any) => import("react").JSX.Element;
    Button: ({ text, textColor, children, variant, style, startIcon, endIcon, onClick, }: {
        text?: string | undefined;
        textColor?: string | undefined;
        children?: import("react").ReactNode;
        variant?: "text" | "outlined" | "contained" | undefined;
        style?: any;
        startIcon?: import("react").ReactNode;
        endIcon?: import("react").ReactNode;
        onClick: () => void;
    }) => import("react").JSX.Element;
    Breadcrumb: ({ crumbs }: {
        crumbs: {
            iconPosition: string;
            icon?: import("react").ReactNode;
            label: import("react").ReactNode;
            onClick?: (() => void) | undefined;
        }[];
    }) => import("react").JSX.Element;
    Checkbox: ({ label, description, checked, onChange, disabled, }: {
        label?: string | undefined;
        description?: string | undefined;
        checked?: boolean | undefined;
        onChange?: (() => void) | undefined;
        disabled?: boolean | undefined;
    }) => import("react").JSX.Element;
    Dialog: ({ isOpen, onClose, children }: {
        isOpen: boolean;
        onClose: () => void;
        children?: import("react").ReactNode;
    }) => false | import("react").JSX.Element;
    DialogTitle: ({ startIcon, onClose, status, children, }: {
        title?: string | undefined;
        startIcon?: import("react").ReactNode;
        onClose?: (() => void) | undefined;
        status?: "error" | "warning" | "info" | "correct" | undefined;
        children?: import("react").ReactNode;
    }) => import("react").JSX.Element;
    DialogContent: ({ children }: {
        children?: import("react").ReactNode;
    }) => import("react").JSX.Element;
    DialogActions: ({ children }: {
        children?: import("react").ReactNode;
    }) => import("react").JSX.Element;
    Select: ({ label, options, value, onChange, disabled, sx, }: {
        label: string;
        options: {
            key: number;
            value: string;
        }[];
        value: any;
        onChange: (value: any) => void;
        disabled?: boolean | undefined;
        sx?: {
            bgColor: string;
            color: string;
        } | undefined;
    }) => import("react").JSX.Element;
    SideBar: ({ isOpen, children }: {
        isOpen: boolean;
        children?: import("react").ReactNode;
    }) => import("react").JSX.Element;
    Stepper: ({ currentStep, numberOfSteps, sx, stepMap }: {
        currentStep: number;
        numberOfSteps: number;
        sx?: {
            stepLineWidth: string;
        } | undefined;
        stepMap: {
            title?: string | undefined;
            content: string;
        }[];
    }) => import("react").JSX.Element;
    Tab: ({ tabs, shape, alignment }: {
        tabs: {
            label: string;
            content: import("react").ReactNode;
            icon?: import("react").ReactNode;
            notification?: number | undefined;
        }[];
        shape?: "capsule" | "rectangle" | undefined;
        alignment?: "left" | "right" | "center" | undefined;
    }) => import("react").JSX.Element;
    TextField: ({ label, value, onChange, error, placeholder, icon, width, clearable, disabled }: import("./components/TextField").TextFieldProps) => import("react").JSX.Element;
    Typography: ({ variant, sprites, color, style, children, disabled, }: {
        variant?: import("@/types").TVariant | undefined;
        sprites?: import("@/types").TSprites | undefined;
        color?: string | undefined;
        style?: import("react").CSSProperties | undefined;
        children?: import("react").ReactNode;
        disabled?: boolean | undefined;
    }) => import("react").JSX.Element;
};
export default _default;
