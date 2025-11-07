import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abhaygupta.dev'),
  title: {
    default: "Abhay Gupta - Software Engineer & Freelance Developer",
    template: "%s | Abhay Gupta"
  },
  description: "Premium portfolio showcasing full-stack development, web applications, and mobile solutions. Software Engineer at Vsingh CPA LLC offering freelance services for web development, mobile apps, and custom software solutions.",
  keywords: [
    "Abhay Gupta",
    "Software Engineer",
    "Full Stack Developer",
    "Web Development",
    "Mobile App Development",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Freelance Developer",
    "Vsingh CPA LLC",
    "Custom Software Development",
    "ERP Systems",
    "E-commerce Development",
    "API Development",
  ],
  authors: [{ name: "Abhay Gupta", url: "https://abhaygupta.dev" }],
  creator: "Abhay Gupta",
  publisher: "Abhay Gupta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhaygupta.dev",
    title: "Abhay Gupta - Software Engineer & Freelance Developer",
    description: "Premium portfolio showcasing full-stack development expertise. Specializing in React, Next.js, Node.js, and mobile applications.",
    siteName: "Abhay Gupta Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abhay Gupta - Software Engineer & Freelance Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Gupta - Software Engineer & Freelance Developer",
    description: "Premium portfolio showcasing full-stack development expertise. Specializing in React, Next.js, Node.js, and mobile applications.",
    images: ["/og-image.jpg"],
    creator: "@abhaygupta",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://abhaygupta.dev",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abhay Gupta",
              url: "https://abhaygupta.dev",
              sameAs: [
                "https://github.com/amay369",
                "https://linkedin.com/in/abhayg369",
              ],
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Vsingh CPA LLC",
              },
              description: "Software Engineer and Freelance Developer specializing in full-stack development, web applications, and mobile solutions.",
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "MongoDB",
                "PostgreSQL",
                "Web Development",
                "Mobile Development",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
