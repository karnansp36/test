import React, { useState, useMemo, useCallback } from "react";

const calculateExpensiveValue = (count) => {
  console.log("Expensive function running...");

  let i = 0;
  while (i < 1000000000) {
    i++;
  }

  return count * 2;
};

export default function New() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  const expensiveValue = useCallback(() => calculateExpensiveValue(count), [count]);

  console.log("Component Re-rendered");

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Data: {data}</h1>
      <h1>Expensive Value: {expensiveValue}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <button onClick={() => setData(data + 1)}>
        Increment Data
      </button>
    </div>
  );
}


