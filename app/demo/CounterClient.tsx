"use client";

import { useState } from "react";

export default function CounterClient({ initial }) {
  const [count, setCount] = useState(initial);

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Client zzzCounter</h2>
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