import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import '@/style/globals.css';
import siteMetadata from '@/data/siteMetadata';
// import MaxWidthContainer from '@/components/max-width-container';
import Header from '@/components/header';
import Footer from '@/components/footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),

  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },

  description: siteMetadata.description,

  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      {
        url: siteMetadata.socialBanner,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
    locale: siteMetadata.locale,
    type: 'website',
  },

  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [
      {
        url: siteMetadata.socialBanner,
        alt: siteMetadata.title,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = siteMetadata.siteUrl;

  return (
    <html lang={siteMetadata.language} suppressHydrationWarning>
      <head>
        <link
          rel='icon'
          type='image/png'
          href={`${baseUrl}/favicons/favicon-96x96.png`}
          sizes='96x96'
        />
        <link
          rel='icon'
          type='image/svg+xml'
          href={`${baseUrl}/favicons/favicon.svg`}
        />
        <link rel='shortcut icon' href={`${baseUrl}/favicons/favicon.ico`} />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={`${baseUrl}/favicons/apple-touch-icon.png`}
        />
        <meta name='apple-mobile-web-app-title' content='JMB' />

        <link rel='manifest' href={`${baseUrl}/favicons/site.webmanifest`} />

        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />
      </head>
      <body
        className={`${spaceGrotesk.className} scroll-smooth bg-amber-50 antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
// pl-[calc(100vw-100%)]
