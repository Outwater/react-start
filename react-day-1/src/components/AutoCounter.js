import { useState, useRef } from "react";

const AutoCounter = () => {
  const [count, setCount] = useState(0);
  const intervalId = useRef();

  const handleStart = () => {
    intervalId.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 500);
  };

  const handleStop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default AutoCounter;
