import { useEffect } from "react";
import { useBoolean } from "react-use-ez";

import downArrow from "../../assets/downArrow.svg";
import "./style.css";

type Props = {
  label: string;
  options: Array<{ key: number; value: string }>;
  value: any;
  onChange: (value: any) => void;
  disabled?: boolean;
};

/**
 * REFERENCE: https://codesandbox.io/p/sandbox/react-custom-select-bpsi7?file=%2Fsrc%2FCustomSelect.js%3A36%2C41
 */

const Select = ({
  label,
  options,
  value,
  onChange,
  disabled = false,
}: Props) => {
  const { value: isShowOptions, setFalse, toggle } = useBoolean(false);

  const handleClickContainer = () => {
    if (disabled) return;
    toggle();
  };

  const handleClickOption = (e: any) => {
    const { name } = e.target.dataset;
    const option = options.find((item) => item.value === name);
    onChange(option?.value);
    setFalse();
  };

  const handleClickOutside = (e: any) => {
    if (
      !e.target.classList.contains("custom-select-option") &&
      !e.target.classList.contains("selected-text")
    ) {
      setFalse();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="inline-block min-w-[250px] text-center relative cursor-pointer">
      <div
        className={`
        flex
        justify-between
        bg-[#fff]
        px-[8px]
        py-1.5
        border
        border-[#d0d0d0]
        rounded-[4px]
        relative
        `}
        style={{
          ...(disabled && {
            backgroundColor: "#f0f0f0",
            color: "#b0b0b0",
            cursor: "not-allowed",
          }),
          ...(isShowOptions && {
            border: "1px solid #019CB0",
          }),
        }}
        onClick={handleClickContainer}
      >
        {value === "" ? label : value}
        <img src={downArrow} alt="down_arrow" />
      </div>

      {isShowOptions && (
        <ul className="select-options">
          {options.map((option) => (
            <li
              className="custom-select-option"
              data-name={option.value}
              key={option.key}
              onClick={handleClickOption}
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Select;
