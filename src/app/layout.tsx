import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Coding Relay - Feedback Form",
  description: "Feedback form portal for Coding Relay'25 by SIAM-VIT.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bruno+Ace&family=JetBrains+Mono:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <meta name="apple-mobile-web-app-title" content="Coding Relay Form" />
      </head>
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
