import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Thiago Piola | Farmacêutico',
    description: 'Thiago Piola — Farmacêutico Responsável (CRF/SP 58.519). 15 anos em operação, liderança e inovação com IA na farmácia.',
      keywords: 'farmacêutico, thiago piola, farmácia, inteligência artificial',
        openGraph: {
            title: 'Thiago Piola | Farmacêutico',
                description: 'Farmacêutico Responsável (CRF/SP 58.519). 15 anos em operação.',
                    url: 'https://www.thiagopiola.com.br',
                        siteName: 'Thiago Piola',
                            locale: 'pt_BR',
                                type: 'website',
                                  },
                                  };

                                  export default function RootLayout({
                                    children,
                                    }: {
                                      children: React.ReactNode;
                                      }) {
                                        return (
                                            <html lang="pt-BR">
                                                  <body className={inter.className}>{children}</body>
                                                      </html>
                                                        );
                                                        }
