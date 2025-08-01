import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from "next/font/google";
import './styles.css';
import './globals.css';
// import GNB from '@/components/GNB'
// import Container from '@/components/Container'

import localFont from 'next/font/local';

// Esamanru 폰트 로드
const esamanru = localFont({
  src: '../../public/fonts/Esamanru-Medium.ttf',
  variable: '--font-esamanru',
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: '데카르트하우스',
  description: 'decarthouse counseling',
  openGraph: {
    title: '데카르트하우스',
    description: 'decarthouse counseling',
    images: ['/img/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={esamanru.variable}>
      <body className='supress page-home'>
        {/* <GNB /> */}
        {children}
        {/* <Container>{children}</Container> */}
      </body>
    </html>
  );
}
