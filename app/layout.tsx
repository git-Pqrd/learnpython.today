import "@/styles/globals.css";
import Script from 'next/script'
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import Head from "next/head";
import { Toaster as DefaultToaster } from "@/components/ui/toaster";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  other: { "google-adsense-account": "ca-pub-1597486652294367" },
  description: siteConfig.description,
  keywords: [
    "LearnPython.today",
    "How to learn python",
    "Learn Python",
    "Python",
  ],
  authors: [
    {
      name: "piquard",
      url: "https://learnpython.today",
    },
  ],
  creator: "piquard",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "piquard",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <Head>
          <title>
            Learn Python Today - Master Python With Interactive Blogs and Games
          </title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Join Learn Python Today to dive into the world of Python through engaging blogs and interactive games. Start your coding journey and become a Python expert in no time!"
          />
          {/* Open Graph / Facebook */}
          <meta
            property="og:title"
            content="Learn Python Today - Master Python With Interactive Blogs and Games"
          />
          <meta
            property="og:description"
            content="Join Learn Python Today to dive into the world of Python through engaging blogs and interactive games. Start your coding journey and become a Python expert in no time!"
          />
          <meta property="og:url" content="https://learnpython.today" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://learnpython.today/og-image.jpg"
          />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Learn Python Today - Master Python With Interactive Blogs and Games"
          />
          <meta
            name="twitter:description"
            content="Join Learn Python Today to dive into the world of Python through engaging blogs and interactive games. Start your coding journey and become a Python expert in no time!"
          />
          <meta name="twitter:url" content="https://learnpython.today" />
          <meta
            name="twitter:image"
            content="https://learnpython.today/twitter-card-image.jpg"
          />

          {/* Additional tags for enhanced link appearance and SEO */}
          <link rel="canonical" href="https://learnpython.today" />
          <meta name="author" content="Learn Python Today" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
        </Head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1 p-1 md:ml-12 py-8">{children}</div>
              <SiteFooter />
            </div>
          </ThemeProvider>
          <DefaultToaster />
        </body>
        <GoogleTagManager gtmId="G-RK1D7R0HK7" />
        <Script id='hotjar'>
           {`(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:4972330,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </Script>
      </html>
    </>
  );
}
