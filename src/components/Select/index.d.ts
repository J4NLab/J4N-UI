/// <reference types="react" />
type Props = {
    label: string;
    options: Array<{
        key: number;
        value: string;
    }>;
    value: any;
    onChange: (value: any) => void;
    disabled?: boolean;
    sx?: {
        bgColor: string;
        color: string;
    };
};
/**
 * REFERENCE: https://codesandbox.io/p/sandbox/react-custom-select-bpsi7?file=%2Fsrc%2FCustomSelect.js%3A36%2C41
 */
declare const Select: ({ label, options, value, onChange, disabled, sx, }: Props) => import("react").JSX.Element;
export default Select;
