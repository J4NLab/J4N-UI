import React, { useState } from "react";
import Typography from "../Typography";
import { useBoolean } from "react-use-ez";
import {
  CheckboxContainer,
  CheckboxAndLabel,
  CheckboxLabel,
  CheckboxDescription,
  CheckboxInput,
  Checkmark,
} from "./style";

type CheckboxProps = {
  label?: string;
  description?: string;
  checked?: boolean;
  onChange?: () => void;
  disabled?: boolean;
};

const Checkbox = ({
  label = "",
  description = "",
  checked = false,
  onChange,
  disabled = false,
}: CheckboxProps) => {
  const { value, setTrue, setFalse, toggle } = useBoolean(checked);
  return (
    <CheckboxContainer>
      <label>
        <CheckboxAndLabel>
          <CheckboxInput
            type="checkbox"
            checked={checked || value}
            onChange={() => {
              onChange && onChange();
              toggle();
            }}
            disabled={disabled}
          />
          <Checkmark disabled={disabled} />
          {label && (
            <CheckboxLabel>
              <Typography
                variant="h5"
                color={disabled ? "#b8b8b8" : ""}
                sprites="regular"
              >
                {label}
              </Typography>
            </CheckboxLabel>
          )}
        </CheckboxAndLabel>
      </label>
      {description && (
        <CheckboxDescription>
          <Typography
            variant="h5"
            color={disabled ? "#b8b8b8" : ""}
            sprites="regular"
          >
            {description}
          </Typography>
        </CheckboxDescription>
      )}
    </CheckboxContainer>
  );
};

export default Checkbox;
