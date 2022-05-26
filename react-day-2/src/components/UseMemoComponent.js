import React, { useMemo } from "react";

export default function UseMemoCompoent({ label, n }) {
  const expensiveComputeSum = (n) => {
    let result = 0;
    console.log("게산 시작");
    for (let i = 0; i < n; i++) {
      result = result + n;
    }
    console.log("게산 끝");
    return result;
  };

  const result = useMemo(() => expensiveComputeSum(n), [n]);

  return (
    <>
      <h3>UseMemo 사용 사례</h3>
      <div>
        <span>{label} : </span>
        <span>{result}</span>
      </div>
    </>
  );
}
