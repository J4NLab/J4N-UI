import React, { useState } from 'react';
import { StyledTextField, TextFieldWrapper, TextFieldLabel, TextFieldErrorWrapper, TextFieldError, TextFieldPlaceholder, TextFieldIcon, TextFieldInputWrapper, ErrorIcon } from './style';
import { FaTimesCircle } from "react-icons/fa";

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

const TextField = ({
  label,
  value,
  onChange,
  error,
  placeholder,
  icon,
  width = '100%',
  clearable = false,
  disabled = false
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onChange('');
  };

  return (
    <TextFieldWrapper width={width}>
      {label && (
        <TextFieldLabel isFocused={isFocused} error={!!error} disabled={disabled}>
          {label}
        </TextFieldLabel>
      )}
      <TextFieldInputWrapper>
        {!isFocused && !error && !disabled && icon && (
          <TextFieldIcon>
            {icon}
          </TextFieldIcon>
        )}
        {clearable && !disabled && error && (
          <ErrorIcon onClick={handleClear}>
            <FaTimesCircle />
          </ErrorIcon>
        )}
        <StyledTextField
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          error={!!error}
          disabled={disabled}
          placeholder={placeholder}
        />

      </TextFieldInputWrapper>
      <TextFieldErrorWrapper error={!!error}>
        {error && <TextFieldError disabled={disabled}>{error}</TextFieldError>}
      </TextFieldErrorWrapper>
      <TextFieldPlaceholder showPlaceholder={!error}>
        {placeholder}
      </TextFieldPlaceholder>
    </TextFieldWrapper>
  );
};

export default TextField;