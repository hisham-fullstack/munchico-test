import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  // KENDİ DOMAIN ADRESİNİZ (WhatsApp kapak resmini bulabilmek için tam site adresine ihtiyaç duyar)
  metadataBase: new URL("https://munchico.com.tr"), // Domain adresinizle değiştirin (örn: https://munchico.com)

  title: {
    default: "Munchico | Demirtaş Cumhuriyet Çıtır Tavuk & Burger Restoranı",
    template: "%s | Munchico Demirtaş",
  },
  description:
    "Demirtaş Bursa'nın en sevilen çıtır tavuk, burger ve makarna lokantası. %100 taze malzemeler, lezzetli menüler ve hızlı paket servis. Hemen sipariş verin!",
  keywords: [
    "Demirtaş lokanta",
    "Demirtaş restoran",
    "Demirtaş yemek siparişi",
    "Bursa çıtır tavuk",
    "Demirtaş burger",
    "Panayır lokanta",
    "Osmangazi fast food",
    "Munchico Demirtaş",
    "Demirtaş hamburgerci",
    "Bursa uygun fiyatlı lokanta",
  ],
  authors: [{ name: "Munchico" }],
  creator: "HEXA Dijital",

  // =========================================================
  // WHATSAPP, INSTAGRAM, FACEBOOK PAYLAŞIM KARTLARI (OPEN GRAPH)
  // =========================================================
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://munchico.com",
    title: "Munchico | Demirtaş Çıtır Tavuk & Burger Lokantası",
    description:
      "Nar gibi kızarmış çıtır tavuklar, devasa burgerler ve efsane makarnalar. Demirtaş Osmangazi'de lezzetin adresi!",
    siteName: "Munchico",
    images: [
      {
        url: "/assets/img/hero.webp", // WhatsApp'ta gözükecek olan Hero görseliniz
        width: 1200,
        height: 630,
        alt: "Munchico Lezzet Kartı",
      },
    ],
  },

  // =========================================================
  // TWITTER / X PAYLAŞIM KARTI
  // =========================================================
  twitter: {
    card: "summary_large_image",
    title: "Munchico | Demirtaş Çıtır Tavuk & Burger Lokantası",
    description: "Demirtaş'ın en çıtır tavuk ve burger restoranı.",
    images: ["/assets/img/hero.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Google Arama Sonuçları İçin Restoran Şema Verisi (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FastFoodRestaurant",
    name: "Munchico",
    image: "https://munchico.com/assets/img/hero.webp",
    "@id": "https://munchico.com",
    url: "https://munchico.com",
    telephone: "+905555555555",
    priceRange: "₺₺",
    menu: "https://munchico.com/menu",
    servesCuisine: [
      "Fast Food",
      "Chicken",
      "Burger",
      "Pasta",
      "Turkish Fast Food",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Demirtaş Cumhuriyet Mh. Panayır Yolu Cad. No:20",
      addressLocality: "Osmangazi",
      addressRegion: "Bursa",
      postalCode: "16245",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.266,
      longitude: 29.066,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "02:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/munchico.fc",
      "https://tgoyemek.com/restoranlar/466593",
      "https://www.yemeksepeti.com/restaurant/x6so/munchico-fried-chicken-x6so",
      "https://www.migros.com.tr/yemek/munchico-fried-chicken-osmangazi-demirtas-cumhuriyet-mah-st-36a99",
    ],
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={outfit.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
