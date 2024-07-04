import React from "react";
type CheckboxProps = {
    label?: string;
    description?: string;
    checked?: boolean;
    onChange?: () => void;
    disabled?: boolean;
};
declare const Checkbox: ({ label, description, checked, onChange, disabled, }: CheckboxProps) => React.JSX.Element;
export default Checkbox;
