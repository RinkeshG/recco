// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Lexend_Deca, Inter } from 'next/font/google';

/* ───────────────────  FONTS  ─────────────────── */

const lexend = Lexend_Deca({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-lexend',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});

/* ───────────────────  META  ─────────────────── */

export const metadata: Metadata = {
  title: 'Recommend — curate and share what you love',
  description: 'One link to share everything you love. Build your page and start recommending.',
  openGraph: {
    title: 'Recommend — curate and share what you love',
    description:
      'One link to share everything you love. Build your page and start recommending.',
    images: ['https://reccomend.app/preview.jpg'],
    url: 'https://reccomend.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recommend — curate and share what you love',
    description:
      'One link to share everything you love. Build your page and start recommending.',
    images: ['https://reccomend.app/preview.jpg'],
  },
};

/* ───────────────────  LAYOUT  ─────────────────── */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lexend.variable} ${inter.variable}`}>
      <body
        className="min-h-screen flex flex-col antialiased text-gray-200"
        style={{
          background: 'radial-gradient(circle at 30% 20%, #15151b 0%, #0d0d0f 80%)',
        }}
      >
        {children}
      </body>
    </html>
  );
}
