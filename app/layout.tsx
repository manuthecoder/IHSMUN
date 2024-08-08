import { CssBaseline } from "@mui/material";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import * as React from "react";
import { Navbar } from "./(app)/Navbar";
import { ClientLayout } from "./(app)/client-layout";
import "./globals.css";
import { Footer } from "./(app)/Footer";

const font = IBM_Plex_Sans({
  weight: ["500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IHSIMUN",
  description:
    "IHSIMUN is a Model United Nations conference hosted by Irvine High School.",

  openGraph: {
    images: ["/banner.png"],
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0"
        />
      </head>
      <body className={font.className}>
        <ClientLayout>
          <Navbar />
          {children}
          <Footer />
          <CssBaseline />
        </ClientLayout>
      </body>
    </html>
  );
}

