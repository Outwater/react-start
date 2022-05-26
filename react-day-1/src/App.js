import { useState, useRef } from "react";
import AutoCounter from "./components/AutoCounter";
import Board from "./components/Board";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Pagination from "./components/Pagination";
function App() {
  const [canSeeAll, setCanSeeAll] = useState(false);
  const inputRef = useRef();
  const [totalCnt, setTotalCnt] = useState(0);

  const articles = new Array(100)
    .fill()
    .map((_, i) => ({ id: i, title: `${i}번째 게시물입니다.` }));
  const [page, setPage] = useState(0);
  const limit = 10;
  const offset = page * limit;

  return (
    <div className="App">
      <button onClick={() => setCanSeeAll(!canSeeAll)}>이전 예제 보기</button>
      <Board articles={articles.slice(offset, offset + limit)} />
      <Pagination
        defaultPage={0}
        limit={10}
        total={articles.length}
        onChange={setPage}></Pagination>
      {!canSeeAll ? (
        <></>
      ) : (
        <>
          <h1>AutoCounter</h1>
          <AutoCounter />
          <br />
          <h1>Focus Input</h1>
          <Input ref={inputRef} />
          <br />
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
        </>
      )}
    </div>
  );
}

export default App;
