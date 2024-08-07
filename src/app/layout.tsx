import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multi-step form",
  description: "Multi-step form with React Hook Form and Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-ubuntu-reg">
        <link rel="icon" href="/assets/images/favicon.ico" sizes="any" />
        <div className="min-h-screen bg-custom-neutral-magnolia">
          {children}
        </div>
      </body>
    </html>
  );
}
