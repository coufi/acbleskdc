import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'ACbleskDC - Oficiální tribute AC/DC',
  description: 'ACbleskDC je česká tribute rocková skupina věnující se hudbě legendární kapely AC/DC.',
  keywords: ['ACbleskDC', 'AC/DC', 'tribute', 'rock', 'koncerty', 'česká kapela'],
  authors: [{ name: 'ACbleskDC' }],
  openGraph: {
    title: 'ACbleskDC - Oficiální tribute AC/DC',
    description: 'Česká tribute rocková skupina věnující se hudbě legendární kapely AC/DC.',
    type: 'website',
    locale: 'cs_CZ',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

