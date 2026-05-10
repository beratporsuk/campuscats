import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'PatiDurak — Smart Support System for Campus Animals',
  description:
    'A QR-based feeding tracking system for stray animals on the TEDU campus. Promoting responsible feeding habits with PatiDurak.',
  keywords: 'campus cats, stray animals, TEDU, feeding tracker, QR system',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
