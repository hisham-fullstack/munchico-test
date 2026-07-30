import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Munchico | Menü Yakında!",
  description: "Munchico lezzet menüsü çok yakında sizlerle.",
};

export default function MenuPage() {
  return (
    <main className={styles.container}>
      <div className={styles.bgOverlay}></div>

      <div className={styles.content}>
        {/* BADGE */}
        <div className={styles.badge}>
          <span className={styles.pulseDot}></span>
          <span>HAZIRLANACAK ÇOK LEZZET VAR</span>
        </div>

        {/* ANA BAŞLIK */}
        <h1 className={styles.title}>
          MENÜ <br />
          <span className={styles.highlightText}>ÇOK YAKINDA!</span>
        </h1>

        <p className={styles.description}>
          Çıtır çıtır tavuklarımız, devasa burgerlerimiz ve nefis
          makarnalarımızla menümüzü dijitale taşıyoruz.
        </p>

        {/* AKSİYON BUTONLARI */}
        <div className={styles.actions}>
          <Link href="/sosyal" className={styles.primaryBtn}>
            Sipariş Kanalları & Sosyal
          </Link>
          <Link href="/" className={styles.secondaryBtn}>
            Anasayfaya Dön
          </Link>
        </div>

        {/* DEVAM EDEN BİLGİ */}
        <div className={styles.footerInfo}>
          <span>
            Şimdilik siparişlerinizi Trendyol Yemek üzerinden verebilirsiniz.
          </span>
        </div>
      </div>
    </main>
  );
}
