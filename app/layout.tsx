import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Munchico | Yeni Nesil Lezzet",
  description: "Munchico - Eşsiz lezzet deneyimi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={outfit.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
