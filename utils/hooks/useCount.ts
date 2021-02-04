import { useState } from "react";

const useCount = (
  initValue: number
): [number, (value: number) => void, (value: number) => void] => {
  const [count, setCount] = useState(initValue);
  const increase = (value: number) => {
    setCount(count + value);
  };
  const decrease = (value: number) => {
    setCount(count - value);
  };

  return [count, increase, decrease];
};

export default useCount;
