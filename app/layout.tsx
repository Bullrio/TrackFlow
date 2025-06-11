import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TrackFlow',
  description: 'Mini app interaktif Farcaster untuk YouTube dan Spotify',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
export const metadata = {
  title: 'TrackFlow',
  description: 'Mini app interaktif Farcaster untuk YouTube & Spotify',
};
