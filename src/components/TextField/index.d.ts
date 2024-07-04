import React from 'react';
export interface TextFieldProps {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    clearable?: boolean;
    error?: string;
    disabled?: boolean;
    placeholder?: string;
    icon?: React.ReactNode;
    width?: string;
}
declare const TextField: ({ label, value, onChange, error, placeholder, icon, width, clearable, disabled }: TextFieldProps) => React.JSX.Element;
export default TextField;
