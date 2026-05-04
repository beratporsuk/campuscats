import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'PatiDurak — Kampüs Hayvanları Akıllı Destek Sistemi',
  description:
    'TEDU kampüsündeki sokak hayvanları için QR tabanlı beslenme takip sistemi. Sorumlu besleme alışkanlıkları için Pati-Durak.',
  keywords: 'kampüs hayvanları, sokak kedisi, TEDU, beslenme takip, QR sistem',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
