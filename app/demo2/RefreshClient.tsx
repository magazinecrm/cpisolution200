// app/demo2/RefreshClient.tsx
"use client";

import { useRouter } from "next/navigation";

export default function RefreshClient() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.refresh()}
      style={{ padding: 10, background: "lightgreen", marginTop: 20 }}
    >
      Refresh Server Data
    </button>
  );
}