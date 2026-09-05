import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menü ve Fiyatlar | Demirtaş Çıtır Tavuk & Burger Menüleri",
  description:
    "Munchico Demirtaş güncel menü ve fiyat listesi. Çıtır tavuk menüleri, burgerler, penne makarnalar ve nefis soslar. Hemen sipariş verin!",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
