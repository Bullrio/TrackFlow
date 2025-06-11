import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-500 via-black to-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🎵 Trackflow</h1>
      <form action="/frame" method="get" className="w-full max-w-md">
        <input
          type="text"
          name="url"
          placeholder="Paste YouTube or Spotify link here"
          className="w-full p-3 rounded bg-gray-900 text-white mb-4"
        />
        <button
          type="submit"
          className="w-full bg-white text-black font-semibold py-2 rounded"
        >
          Generate Frame
        </button>
      </form>
    </main>
  );
}
// app/frame/page.tsx
"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FramePage() {
  const params = useSearchParams();
  const url = params.get("url") || "";

  const [meta, setMeta] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/metadata`, {
      method: "POST",
      body: JSON.stringify({ url })
    })
      .then((res) => res.json())
      .then((data) => setMeta(data));
  }, [url]);

  if (!meta) return <p>Loading...</p>;

  return (
    <html lang="en">
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta
          property="fc:frame:button:1"
          content={`Open on ${meta.platform === "youtube" ? "YouTube" : "Spotify"}`}
        />
        <meta
          property="fc:frame:button:1:action"
          content="link"
        />
        <meta
          property="fc:frame:button:1:target"
          content={url}
        />
      </head>
      <body style={{padding: 20, background: "#000", color: "#fff"}}>
        <img src={meta.image} width="100%" />
        <h1>{meta.title}</h1>
        <a href={url} style={{ color: "#1DB954", textDecoration: "none" }}>
          {meta.platform === "youtube" ? "▶️ Open on YouTube" : "🎧 Open on Spotify"}
        </a>
      </body>
    </html>
  );
}
