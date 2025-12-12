// app/demo/page.tsx
import CounterClient from "./CounterClient";

export default async function Page() {
  // SERVER FETCH (runs on the server)
  const randomNumber = Math.floor(Math.random() * 100);

  return (
    <div style={{ padding: 20 }}>
      <h1>Server + Client 111Demo</h1>
      <p>Random number from server: {randomNumber}</p>

      <CounterClient initial={randomNumber} />
    </div>
  );
}