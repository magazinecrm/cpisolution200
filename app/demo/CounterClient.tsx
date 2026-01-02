"use client";

import { useState } from "react";

type CounterClientProps = {
  initial: number;
};

export default function CounterClient({ initial }: CounterClientProps) {
  const [count, setCount] = useState<number>(initial);

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Client Counter</h2>
      <p>Value: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        style={{ padding: 10, background: "lightblue" }}
      >
        Increment
      </button>
    </div>
  );
}