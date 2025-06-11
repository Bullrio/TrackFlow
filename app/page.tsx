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
