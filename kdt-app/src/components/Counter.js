import { useState } from "react";

export default function Counter({ onIncrease, onDecrease }) {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
    onIncrease();
  };
  const handleDecrease = () => {
    setCount(count - 1);
    onDecrease();
  };
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleIncrease}> +1 증가</button>
      <button onClick={handleDecrease}> -1 감사</button>
    </div>
  );
}
