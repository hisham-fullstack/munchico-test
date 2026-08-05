"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll hareketini dinleyip 'scrolled' state'ini güncelliyoruz
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.navbar}>
          {/* LOGO */}
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoText}>MUNCHICO</span>
            <span className={styles.logoDot}></span>
          </Link>

          {/* MASAÜSTÜ MENÜ (Merkezde) */}
          <nav className={styles.desktopNav}>
            <Link href="/#anasayfa" className={styles.navLink}>
              Anasayfa
            </Link>
            <Link
              href="/menu"
              className={`${styles.navLink} ${styles.activeLink}`}
            >
              Menü
            </Link>
            <Link href="/#nasil-yapiyoruz" className={styles.navLink}>
              Sırlarımız
            </Link>
            <Link href="/#hakkimizda" className={styles.navLink}>
              Hikayemiz
            </Link>
            <Link href="/#subelerimiz" className={styles.navLink}>
              Mekanımız
            </Link>
          </nav>

          {/* SAĞ AKSİYON ALANI */}
          <div className={styles.actions}>
            <Link href="/#delivery" className={styles.btnOrder}>
              <span className={styles.btnText}>Sipariş Ver</span>
              <span className={styles.btnIcon}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </Link>

            {/* Awwwards Tarzı Minimal Hamburger */}
            <button
              className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
              onClick={toggleMenu}
              aria-label="Menü"
            >
              <div className={styles.burgerLines}>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* TAM EKRAN MOBİL MENÜ OVERLAY */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ""}`}
      >
        <div className={styles.menuBackground}></div>
        <nav className={styles.mobileNavLinks}>
          <Link href="/#anasayfa" onClick={closeMenu}>
            Anasayfa
          </Link>
          <Link
            href="/menu"
            onClick={closeMenu}
            className={styles.mobileActive}
          >
            Menü
          </Link>
          <Link href="/#nasil-yapiyoruz" onClick={closeMenu}>
            Mutfak Sırları
          </Link>
          <Link href="/#hakkimizda" onClick={closeMenu}>
            Hikayemiz
          </Link>
          <Link href="/#subelerimiz" onClick={closeMenu}>
            Demirtaş Şubesi
          </Link>
        </nav>
      </div>
    </>
  );
}
