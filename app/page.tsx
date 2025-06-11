'use client';
import { useState } from 'react';

export default function Page() {
  const [url, setUrl] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedUrl(url);
  };

  const getPlatform = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    if (url.includes('spotify.com')) return 'spotify';
    return 'unknown';
  };

  const platform = getPlatform(submittedUrl);

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: platform === 'youtube'
        ? 'linear-gradient(to right, #FF0000, #CC0000)'
        : platform === 'spotify'
        ? 'linear-gradient(to right, #1DB954, #1ED760)'
        : '#f9f9f9',
      color: '#fff',
      padding: '2rem'
    }}>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Paste YouTube or Spotify link"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          style={{ padding: '10px', width: '300px' }}
        />
        <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>Submit</button>
      </form>

      {submittedUrl && (
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p>Preview URL:</p>
          <p>{submittedUrl}</p>
          {platform !== 'unknown' && (
            <a href={submittedUrl} target="_blank" rel="noopener noreferrer">
              <button style={{ padding: '10px', marginTop: '1rem' }}>
                Open on {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </button>
            </a>
          )}
        </div>
      )}
    </main>
  );
}