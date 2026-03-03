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
  title: "SYMVERGE Platforms | Solutions Engineered For You",
  description:
    "SYMVERGE Platforms is a software development and EdTech SaaS company based in Laurel, Maryland. We build custom software and education technology platforms engineered for the way you actually work.",
  keywords: [
    "SYMVERGE",
    "SYMVERGE Platforms",
    "software development",
    "EdTech",
    "SaaS",
    "education technology",
    "custom software",
    "Laurel Maryland",
    "education software",
    "EdTech SaaS platform",
  ],
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
      <body className={`${lexendDeca.variable} ${michroma.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
