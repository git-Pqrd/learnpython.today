import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Toaster as DefaultToaster } from "@/components/ui/toaster";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://learnpython.today"),
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
      <html
        lang="en"
        className={`${inter.variable} ${jetbrains.variable}`}
        suppressHydrationWarning
      >
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
            <div className="relative flex min-h-screen w-full flex-col ">
              <SiteHeader />
              <div className="flex-1 p-1 py-8 w-full mx-auto max-w-[2000px]">
                {children}
              </div>
              <SiteFooter />
            </div>
          </ThemeProvider>
          <DefaultToaster />
        </body>
        <GoogleTagManager gtmId="GTM-5D69HVRJ" />
      </html>
    </>
  );
}
