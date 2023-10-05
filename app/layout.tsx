import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import "./code.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import { ModalProvider } from "@/components/ModalProvider";
import ToasterProvider from "@/components/ToasterProvider";
import CrispChat from "@/components/CrispChat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genius",
  description: "AI Saas Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <html lang="en">
        <CrispChat />
        <body className={inter.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
