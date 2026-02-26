import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MIXER | Deep AI Research & Execution',
  description: 'Deep research and execution in the AI platform space.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="font-sans antialiased">{children}</body>
    </html>
  );
}
