import { useBoolean } from "react-use-ez";
import "./style.css";

type Props = {
  id?: string;
  label: string;
  options: Array<{ id: number; name: string }>;
  value: any;
  onChange: (value: any) => void;
  disabled?: boolean;
};

const Select = ({
  id,
  label,
  options,
  value,
  onChange,
  disabled = false,
}: Props) => {
  const { value: isShowOptions, setFalse, toggle } = useBoolean(false);

  const handleClickContainer = () => {
    toggle();
  };

  const handleClickOption = (e: any) => {
    const { name } = e.target.dataset;
    const option = options.find((option) => option.name === name);
    onChange(option);
    setFalse();
  };

  return (
    <div className="inline-block min-w-[250px] text-center relative cursor-pointer">
      <div
        className={`
        bg-[#47eded]
        px-5
        py-1.5
        border-b
        border-[#d0d0d0]
        relative
        ${
          options
            ? 'after:content-[""] after:absolute after:right-2.5 after:top-4 after:border-2 after:border-t-[#fff] after:border-r-transparent after:border-b-transparent after:border-l-transparent'
            : 'after:content-[""] after:absolute after:right-2.5 after:top-2 after:border-2 after:border-t-transparent after:border-r-transparent after:border-b-[#fff] after:border-l-transparent'
        }`}
        // 客製化顏色
        onClick={handleClickContainer}
      >
        {value === "" ? label : value}
      </div>
      {isShowOptions && (
        <ul className="select-options">
          {options.map((option) => (
            <li
              className="custom-select-option"
              data-name={option.name}
              key={option.id}
              onClick={handleClickOption}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Select;
