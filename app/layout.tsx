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
      <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content={metadata.description}/>
            <title>{metadata.title}</title>
            <link rel="icon" href="https://istad.co/resources/img/CSTAD_120.png"/>
        </head>
      <body className={inter.className}>
      <NavBarComponent />
      {children}</body>
        <FooterComponent />
    </html>
  );
}
