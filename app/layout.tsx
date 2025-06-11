// app/layout.tsx
import { ReactNode } from 'react';

export const metadata = {
  title: 'TrackFlow',
  description: 'Interactive Farcaster music frames',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
