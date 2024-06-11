import React, { useState } from "react";
import "./style.css";
import Typography from "../Typography";

type CheckboxProps = {
  name?: string;
  description?: string;
  disabled?: boolean;
};

const Checkbox = ({
  name = "",
  description = "",
  disabled = false,
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="checkbox-container">
      <div className="checkbox-and-name">
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => !disabled && setChecked(!checked)}
            disabled={disabled}
          />
          <span className={`checkmark ${disabled ? "disabled" : ""}`}></span>
        </label>
        {name ? (
          <span className="checkbox-name">
            <Typography
              style={{ fontSize: "14px", color: disabled ? "#ccc" : "" }}
              sprites="regular"
            >
              {name}
            </Typography>
          </span>
        ) : null}
      </div>
      {description ? (
        <p className="checkbox-description">
          <Typography
            style={{ fontSize: "14px", color: disabled ? "#ccc" : "" }}
            sprites="regular"
          >
            {description}
          </Typography>
        </p>
      ) : null}
    </div>
  );
};

export default Checkbox;
