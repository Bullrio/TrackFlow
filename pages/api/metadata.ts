// API to fetch link metadata
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { url } = req.body;
    let meta;

    if (url.includes("youtu")) {
      const id = /(?:v=|\/)([\w-]{11})/.exec(url)?.[1] ?? "";
      meta = {
        platform: "youtube",
        title: "YouTube Title", // nanti bisa ambil via YouTube API (opsional)
        image: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
      };
    } else if (url.includes("spotify.com")) {
      const parts = url.split("/");
      const id = parts[4];
      meta = {
        platform: "spotify",
        title: "Spotify Title",
        image: `https://i.scdn.co/image/${id}` // placeholder
      };
    } else {
      return res.status(400).json({ error: "Unsupported URL" });
    }

    return res.status(200).json(meta);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal error" });
  }
}
