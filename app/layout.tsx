import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

// Initialize the fonts
const inter = Inter({ subsets: ['latin'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Apply the font to the whole body
    <html lang="en" className={`${inter.className} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}