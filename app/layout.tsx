import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBarComponent from "@/app/components/NavBarComponent";
import FooterComponent from "@/app/components/FooterComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iSTAD",
  description: "Build you IT skill",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBarComponent />
      {children}</body>
        <FooterComponent />
    </html>
  );
}
