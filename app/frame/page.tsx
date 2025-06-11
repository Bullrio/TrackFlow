export default function FramePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 via-black to-black text-white">
      <h1 className="text-xl font-semibold">🎬 Frame will show here!</h1>
    </div>
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
