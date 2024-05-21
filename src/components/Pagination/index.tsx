import React, { useState, useEffect } from "react";
import { StyledButton } from "./style";

// icons
import RightArrowIcon from "../../assets/rightArrowIcon.svg";
import LeftArrowIcon from "../../assets/leftArrowIcon.svg";

// < number >

// 1 2 3 4 5 6 7 8 9 10
// 1 ... 4 5 6 ..... 10
// 1 2 3 4 5 ....... 10
// 1 ..... 5 6 7 ... 10
// 1 ....... 6 7 8 9 10

// 每次 3 筆，如果 3 筆 + 1 或 - 1，等於 頭尾，就要多加一個 數字，以 start 為準
// Math.floor()

/**
 * count: 所有筆數
 */
type Props = {
  count: number;
};

const Pagination = ({ count }: Props) => {
  const [showItem, setShowItem] = useState({
    start: 1,
    end: 10,
    length: 10,
  });

  const allPageState = new Array(10).fill(0).map((_, index) => index + 1);

  const [current, setCurrent] = useState(Math.round(allPageState.length / 2));

  const handleAdd = () => {
    if (current === 0) return;

    setCurrent(current - 1);
  };

  const handleSub = () => {
    if (current === allPageState.length - 1) return;

    setCurrent(current + 1);
  };

  return (
    <div className="flex">
      <StyledButton onClick={handleAdd} disabled={current === 0}>
        <img src={LeftArrowIcon} alt="left arrow" />
      </StyledButton>
      {allPageState.map((item, index) => (
        <StyledButton
          onClick={() => setCurrent(index)}
          current={index === current}
        >
          {item}
        </StyledButton>
      ))}
      <StyledButton
        onClick={handleSub}
        disabled={current === allPageState.length - 1}
      >
        <img src={RightArrowIcon} alt="right arrow" />
      </StyledButton>
    </div>
  );
};

export default Pagination;
