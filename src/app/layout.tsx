import type { Metadata } from "next";
import { Lexend_Deca, Michroma } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
});

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://symverge.tech"),
  title: {
    default: "SYMVERGE Platforms | Solutions Engineered For You",
    template: "%s | SYMVERGE Platforms",
  },
  description:
    "SYMVERGE Platforms is a software engineering and EdTech SaaS company based in Laurel, Maryland. We build custom software and education technology platforms engineered for the way you actually work.",
  keywords: [
    "SYMVERGE",
    "SYMVERGE Platforms",
    "software development",
    "software engineering",
    "custom software development",
    "EdTech",
    "SaaS",
    "education technology",
    "education software",
    "EdTech SaaS platform",
    "learning management system",
    "web application development",
    "Laurel Maryland",
    "Maryland software company",
  ],
  authors: [{ name: "SYMVERGE Platforms LLC", url: "https://symverge.tech" }],
  creator: "SYMVERGE Platforms LLC",
  publisher: "SYMVERGE Platforms LLC",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "SYMVERGE Platforms | Solutions Engineered For You",
    description:
      "Custom software development and EdTech SaaS platforms built for the education sector. Based in Laurel, Maryland.",
    type: "website",
    locale: "en_US",
    url: "https://symverge.tech",
    siteName: "SYMVERGE Platforms",
  },
  twitter: {
    card: "summary_large_image",
    title: "SYMVERGE Platforms | Solutions Engineered For You",
    description:
      "Custom software development and EdTech SaaS platforms built for the education sector.",
  },
  alternates: {
    canonical: "https://symverge.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className={`${lexendDeca.variable} ${michroma.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
