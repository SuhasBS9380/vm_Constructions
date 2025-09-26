import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "V M Constructions - Professional Construction Services",
  description:
    "V M Constructions offers professional construction, engineering, and building services for residential, commercial, and infrastructure projects across Karnataka.",
  generator: "v0.app",
  keywords: "construction, building, residential, commercial, infrastructure, Karnataka, civil works, interior design",
  authors: [{ name: "V M Constructions" }],
  creator: "V M Constructions",
  publisher: "V M Constructions",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vmconstructions.in",
    siteName: "V M Constructions",
    title: "V M Constructions - Professional Construction Services",
    description: "V M Constructions offers professional construction, engineering, and building services for residential, commercial, and infrastructure projects across Karnataka.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "V M Constructions - Professional Construction Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "V M Constructions - Professional Construction Services",
    description: "V M Constructions offers professional construction, engineering, and building services for residential, commercial, and infrastructure projects across Karnataka.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/logo.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="V M Constructions offers professional construction, engineering, and building services for residential, commercial, and infrastructure projects across Karnataka." />
        <meta name="keywords" content="construction, building, residential, commercial, infrastructure, Karnataka, civil works, interior design" />
        <meta name="author" content="V M Constructions" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vmconstructions.in" />
        <meta property="og:title" content="V M Constructions - Professional Construction Services" />
        <meta property="og:description" content="V M Constructions offers professional construction, engineering, and building services for residential, commercial, and infrastructure projects across Karnataka." />
        <meta property="og:image" content="https://vmconstructions.in/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="V M Constructions - Professional Construction Services" />
        <meta property="og:site_name" content="V M Constructions" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="V M Constructions - Professional Construction Services" />
        <meta name="twitter:description" content="V M Constructions offers professional construction, engineering, and building services for residential, commercial, and infrastructure projects across Karnataka." />
        <meta name="twitter:image" content="https://vmconstructions.in/logo.png" />
        
        {/* WhatsApp specific meta tags */}
        <meta property="whatsapp:title" content="V M Constructions - Professional Construction Services" />
        <meta property="whatsapp:description" content="V M Constructions offers professional construction, engineering, and building services for residential, commercial, and infrastructure projects across Karnataka." />
        <meta property="whatsapp:image" content="https://vmconstructions.in/logo.png" />
        
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
      </head>
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
