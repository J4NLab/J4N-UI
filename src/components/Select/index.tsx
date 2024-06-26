import { useEffect, useRef } from "react";
import { useBoolean } from "react-use-ez";

import downArrow from "../../assets/downArrow.svg";
import { colorFilter } from "../../utils/function";

type Props = {
  label: string;
  options: Array<{ key: number; value: string }>;
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

const Select = ({
  label,
  options,
  value,
  onChange,
  disabled = false,
  sx,
}: Props) => {
  const { value: isShowOptions, setFalse, toggle } = useBoolean(false);
  const { bgColor, color } = sx || {};
  const containerRef = useRef<HTMLDivElement>(null);

  const customStyle = {
    backgroundColor: bgColor ? colorFilter(bgColor) : "",
    color: color ? colorFilter(color) : "",
  };

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

  const handleClickOutside = (e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      setFalse();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="inline-block min-w-[250px] text-center relative cursor-pointer"
    >
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
          ...((customStyle.backgroundColor || customStyle.color) && {
            backgroundColor: customStyle.backgroundColor,
            color: customStyle.color,
          }),
        }}
        onClick={handleClickContainer}
      >
        {value === "" ? label : value}
        <img src={downArrow} alt="down_arrow" />
      </div>

      {isShowOptions && (
        <ul
          className="
          m-0
          p-0
          text-center
          absolute
          w-full
          border
          border-[#d0d0d0]
          border-t-0
          border-b-0"
        >
          {options.map((option) => (
            <li
              className="
                list-none
                px-5
                py-1.5
              bg-white
                border-b
              border-[#d0d0d0]
                cursor-pointer
              hover:bg-white
              hover:text-black"
              data-name={option.value}
              key={option.key}
              onClick={handleClickOption}
              style={{
                ...(customStyle.backgroundColor && {
                  backgroundColor: customStyle.backgroundColor,
                }),
                ...(customStyle.color && { color: customStyle.color }),
              }}
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
