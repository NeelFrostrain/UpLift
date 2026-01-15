import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'UpLift',
  description: 'A Digital Marketing Agency',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('antialiased', spaceGrotesk.className)}>
        {children}
      </body>
    </html>
  );
}
