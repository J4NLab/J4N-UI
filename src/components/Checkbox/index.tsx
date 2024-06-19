import React from "react";
import { useBoolean } from "react-use-ez";
import Typography from "../Typography";
import {
  CheckboxContainer,
  CheckboxWrapper,
  CheckboxLabel,
  CheckboxDescription,
  CheckboxInput,
  CheckMark,
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
  const { value, toggle } = useBoolean(checked);
  return (
    <CheckboxContainer>
      <CheckboxWrapper>
        <CheckboxInput
          type="checkbox"
          checked={checked || value}
          onChange={() => {
            if (onChange) {
              onChange();
            }
            toggle();
          }}
          disabled={disabled}
        />
        <CheckMark disabled={disabled} />
        {label && (
          <CheckboxLabel>
            <Typography variant="h5" disabled={disabled} sprites="regular">
              {label}
            </Typography>
          </CheckboxLabel>
        )}
      </CheckboxWrapper>
      {description && (
        <CheckboxDescription>
          <Typography variant="h5" disabled={disabled} sprites="regular">
            {description}
          </Typography>
        </CheckboxDescription>
      )}
    </CheckboxContainer>
  );
};

export default Checkbox;
