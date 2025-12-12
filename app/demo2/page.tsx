// app/demo2/page.tsx
import RefreshClient from "./RefreshClient";

export default async function Page() {
  // SERVER FETCH
  const randomNumber = Math.floor(Math.random() * 1000);

  return (
    <div style={{ padding: 20 }}>
      <h1>Demo 2: Server Fetch +ddd Client Refresh</h1>

      <p>Random number from server: {randomNumber}</p>

      <RefreshClient />
    </div>
  );
}