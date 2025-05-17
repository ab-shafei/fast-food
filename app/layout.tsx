import type { Metadata } from "next";
import { Rubik, Karla, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/heaader";
import { Footer } from "@/components/footer";

const rubic = Rubik({
  variable: "--font-rubic",
  subsets: ["latin"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fast Food Restaurant",
  description: "Fast food resturant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable} ${rubic.variable} ${inter.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
