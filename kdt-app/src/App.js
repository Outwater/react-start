import { useState, useRef } from "react";
import Counter from "./components/Counter";
import Input from "./components/Input";
function App() {
  const inputRef = useRef();
  const [totalCnt, setTotalCnt] = useState(0);

  return (
    <div className="App">
      <Input ref={inputRef} />
      <h1>Total Count : {totalCnt}</h1>
      <Counter
        onIncrease={() => setTotalCnt(totalCnt + 1)}
        onDecrease={() => setTotalCnt(totalCnt - 1)}></Counter>
      <Counter
        onIncrease={() => setTotalCnt(totalCnt + 1)}
        onDecrease={() => setTotalCnt(totalCnt - 1)}></Counter>
      <Counter
        onIncrease={() => setTotalCnt(totalCnt + 1)}
        onDecrease={() => setTotalCnt(totalCnt - 1)}></Counter>
      <Counter
        onIncrease={() => setTotalCnt(totalCnt + 1)}
        onDecrease={() => setTotalCnt(totalCnt - 1)}></Counter>
      <Counter
        onIncrease={() => setTotalCnt(totalCnt + 1)}
        onDecrease={() => setTotalCnt(totalCnt - 1)}></Counter>
    </div>
  );
}

export default App;
