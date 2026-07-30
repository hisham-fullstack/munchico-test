import Link from "next/link";
import NextImage from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Munchico | Sosyal & Bağlantılar",
  description:
    "Munchico sosyal medya hesapları, online sipariş kanalları ve lokasyon bilgileri.",
};

export default function SosyalPage() {
  return (
    <main className={styles.container}>
      <div className={styles.bgOverlay}></div>

      <div className={styles.content}>
        {/* PROFİL ALANI */}
        <div className={styles.profileSection}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatarGlow}></div>
            <div className={styles.avatarInner}>
              <NextImage
                src="/assets/img/munchico.png"
                alt="Munchico Logo"
                width={128}
                height={128}
                className={styles.logoImg}
                priority
              />
            </div>
          </div>
          <h1 className={styles.title}>MUNCHICO</h1>
          <p className={styles.subtitle}>Yeni Nesil Çıtır Tavuk & Burger</p>
          <span className={styles.locationBadge}>
            📍 Demirtaş Cumhuriyet Mh. Panayır Yolu Cad. NO:20, Osmangazi /
            BURSA
          </span>
        </div>

        {/* BAĞLANTI KARTLARI (LINK IN BIO) */}
        <div className={styles.linksContainer}>
          {/* MENÜ */}
          <Link
            href="/menu"
            className={`${styles.linkCard} ${styles.highlightCard}`}
          >
            <span className={styles.icon}>🍔</span>
            <div className={styles.linkText}>
              <strong>MENÜMÜZÜ İNCELE</strong>
              <small>Çıtır tavuklar, burgerler ve efsane makarnalar</small>
            </div>
            <span className={styles.arrow}>→</span>
          </Link>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/munchico.fc"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkCard}
          >
            <span className={styles.icon}>📸</span>
            <div className={styles.linkText}>
              <strong>Instagram</strong>
              <small>@munchico.fc</small>
            </div>
            <span className={styles.arrow}>↗</span>
          </a>

          {/* TRENDYOL GO */}
          <a
            href="https://tgoyemek.com/restoranlar/466593"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.linkCard} ${styles.tyCard}`}
          >
            <span className={styles.icon}>🛵</span>
            <div className={styles.linkText}>
              <strong>Trendyol Yemek'ten Sipariş Ver</strong>
              <small>Sıcak ve hızlı teslimat</small>
            </div>
            <span className={styles.arrow}>↗</span>
          </a>

          {/* GOOGLE HARİTA LOKASYON */}
          <a
            href="https://maps.app.goo.gl/D3soV8LPwLytqHjo7"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkCard}
          >
            <span className={styles.icon}>🗺️</span>
            <div className={styles.linkText}>
              <strong>Google Haritalar Konumu</strong>
              <small>Demirtaş Şubemize Yol Tarifi Al</small>
            </div>
            <span className={styles.arrow}>↗</span>
          </a>
        </div>

        {/* FOOTER İMZASI */}
        <div className={styles.footerNote}>
          <p>%100 Taze, Çıtır Çıtır Lezzetler</p>
          <small>
            Powered by{" "}
            <a
              href="https://hexadijital.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              HEXA Dijital
            </a>
          </small>
        </div>
      </div>
    </main>
  );
}
