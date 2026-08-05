"use client";
import Link from "next/link";

import { useState, useEffect } from "react";
import Image from "next/image";
import { menuData, MenuCategory } from "./menuData";
import styles from "./page.module.css";

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength) + "...";
};

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(
    null,
  );
  const [selectedProductIndex, setSelectedProductIndex] = useState<
    number | null
  >(null);

  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  // Görünüm değiştiğinde en üste kaydırma
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCategory, selectedProductIndex]);

  // YENİ: Telefondaki Fiziksel Geri Tuşunu Dinleyen useEffect
  useEffect(() => {
    const handlePopState = () => {
      if (selectedProductIndex !== null) {
        // Ürün detayındayken geri basıldıysa kategoriye (ürün listesine) dön
        setSelectedProductIndex(null);
      } else if (selectedCategory !== null) {
        // Kategori listesindeyken geri basıldıysa ana menüye dön
        setSelectedCategory(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [selectedCategory, selectedProductIndex]);

  // YENİ: Kategori Seçildiğinde Çalışacak Fonksiyon
  const handleCategorySelect = (category: MenuCategory) => {
    window.history.pushState({ view: "category" }, "");
    setSelectedCategory(category);
  };

  // YENİ: Ürün Seçildiğinde Çalışacak Fonksiyon
  const handleProductSelect = (index: number) => {
    window.history.pushState({ view: "product" }, "");
    setSelectedProductIndex(index);
  };

  // YENİ: Ekranda Görünen "Geri Dön" Butonları İçin (Tarayıcı geçmişini tetikler)
  const handleGoBack = () => {
    window.history.back();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) handleNext();
    if (distance < -minSwipeDistance) handlePrev();

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleNext = () => {
    if (selectedCategory && selectedProductIndex !== null) {
      if (selectedProductIndex < selectedCategory.items.length - 1) {
        setSelectedProductIndex(selectedProductIndex + 1);
      }
    }
  };

  const handlePrev = () => {
    if (selectedCategory && selectedProductIndex !== null) {
      if (selectedProductIndex > 0) {
        setSelectedProductIndex(selectedProductIndex - 1);
      }
    }
  };

  return (
    <main className={styles.menuLayout}>
      <div className={styles.honeycombBg}></div>
      <div className={styles.ambientGlow}></div>

      <div className={styles.container}>
        {/* =========================================
            GÖRÜNÜM 1: KATEGORİ SEÇİM EKRANI
        ========================================= */}
        {!selectedCategory && (
          <div className={styles.viewFadeIn}>
            <header className={styles.header}>
              <h1 className={styles.mainTitle}>
                LEZZETİ <span>KEŞFET</span>
              </h1>
              <p className={styles.subtitle}>
                Duyularınızı harekete geçirecek koleksiyonumuzu inceleyin.
              </p>
            </header>

            <div className={styles.floatingGrid}>
              {menuData.map((category, index) => (
                <div
                  key={index}
                  className={styles.floatingCard}
                  onClick={() => handleCategorySelect(category)} /* DEĞİŞTİ */
                >
                  <div className={styles.floatingImgWrapper}>
                    <Image
                      src={`${category.items[0]?.img || "/assets/menu/placeholder.webp"}`}
                      alt={category.categoryName}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.floatingImg}
                    />
                  </div>
                  <div className={styles.floatingTextContent}>
                    <h2 className={styles.floatingName}>
                      {category.categoryName}
                    </h2>
                    <span className={styles.exploreText}>Koleksiyonu Gör</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================
            GÖRÜNÜM 2: KATEGORİ İÇİ ÜRÜN LİSTESİ
        ========================================= */}
        {selectedCategory && selectedProductIndex === null && (
          <div className={styles.viewSlideUp}>
            <div className={styles.topBar}>
              <button
                onClick={handleGoBack} /* DEĞİŞTİ */
                className={styles.backBtn}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Geri Dön
              </button>
            </div>

            <header className={styles.selectedHeader}>
              <h1 className={styles.selectedTitle}>
                {selectedCategory.categoryName}
              </h1>
              <span className={styles.itemBadge}>
                {selectedCategory.items.length} Özel Ürün
              </span>
            </header>

            <div className={styles.productGrid}>
              {selectedCategory.items.map((item, index) => (
                <div
                  key={index}
                  className={styles.productCard}
                  onClick={() => handleProductSelect(index)} /* DEĞİŞTİ */
                >
                  <div className={styles.productImgWrapper}>
                    <Image
                      src={`${item.img || "/assets/menu/placeholder.webp"}`}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className={styles.productImg}
                      priority={
                        index < 6
                      } /* YENİ: İlk 6 resmi lazy-load yapmadan anında yükle */
                    />{" "}
                  </div>
                  <div className={styles.productInfo}>
                    <div className={styles.productTitleRow}>
                      <h3 className={styles.productName}>{item.name}</h3>
                      <span className={styles.productPrice}>
                        {item.price} {item.currency}
                      </span>
                    </div>
                    <p className={styles.productDesc}>
                      {truncateText(item.description, 95)}
                    </p>
                    <span className={styles.readMore}>Detayları Keşfet</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================
            GÖRÜNÜM 3: TEKİL ÜRÜN DETAYI (SLIDER)
        ========================================= */}
        {selectedCategory && selectedProductIndex !== null && (
          <div
            className={styles.viewSlideUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={styles.topBar}>
              <button
                onClick={handleGoBack} /* DEĞİŞTİ */
                className={styles.backBtn}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Menüye Dön
              </button>
            </div>

            <div className={styles.sliderContainer}>
              <button
                className={styles.sliderBtn}
                onClick={handlePrev}
                disabled={selectedProductIndex === 0}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div key={selectedProductIndex} className={styles.sliderContent}>
                <div className={styles.swipeIndicator}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span>Kaydır</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M7 16l-4-4m0 0l4-4m-4 4h20" />
                  </svg>
                </div>

                <div className={styles.sliderMain}>
                  <div className={styles.sliderImgWrapper}>
                    <div className={styles.sliderImgReveal}>
                      <Image
                        src={`${selectedCategory.items[selectedProductIndex].img || "/assets/menu/placeholder.webp"}`}
                        alt={selectedCategory.items[selectedProductIndex].name}
                        fill
                        sizes="100vw"
                        className={styles.sliderImg}
                        priority
                      />
                    </div>
                  </div>

                  <div className={styles.sliderInfo}>
                    <h2 className={styles.sliderTitle}>
                      {selectedCategory.items[selectedProductIndex].name}
                    </h2>
                    <p className={styles.sliderDesc}>
                      {selectedCategory.items[selectedProductIndex].description}
                    </p>
                    <div className={styles.sliderPrice}>
                      {selectedCategory.items[selectedProductIndex].price}{" "}
                      {selectedCategory.items[selectedProductIndex].currency}
                    </div>

                    <div className={styles.sliderDots}>
                      {selectedCategory.items.map((_, idx) => (
                        <span
                          key={idx}
                          className={`${styles.dot} ${idx === selectedProductIndex ? styles.activeDot : ""}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button
                className={styles.sliderBtn}
                onClick={handleNext}
                disabled={
                  selectedProductIndex === selectedCategory.items.length - 1
                }
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            {/* Sol: Marka ve Motto */}
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <span>MUNCHICO</span>
                <span className={styles.logoDot}></span>
              </div>
              <p className={styles.footerMotto}>
                Nar gibi kızarmış çıtır tavuklar, devasa burgerler ve unutulmaz
                Munchico lezzet deneyimi.
              </p>
            </div>

            {/* Sağ: Hızlı Linkler ve Sosyal Medya */}
            <div className={styles.footerNavGroup}>
              <div className={styles.footerNavCol}>
                <h4>NAVİGASYON</h4>
                <Link href="/#anasayfa">Anasayfa</Link>
                <Link href="/#nasil-yapiyoruz">Mutfak Sırları</Link>
                <Link href="/#hakkimizda">Hikayemiz</Link>
                <Link href="/#subelerimiz">Demirtaş Şubesi</Link>
              </div>

              <div className={styles.footerNavCol}>
                <h4>TAKİP ET</h4>
                <a
                  href="https://instagram.com/munchico.fc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://tgoyemek.com/restoranlar/466593"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trendyol Yemek
                </a>
              </div>
            </div>
          </div>

          {/* Alt Telif ve Imza Satırı */}
          <div className={styles.footerBottom}>
            <p>&copy; 2026 Munchico. Tüm hakları saklıdır.</p>
            <p>
              Tasarım & Geliştirme:{" "}
              <a
                href="https://hexadijital.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>HEXA Dijital</span>
              </a>
            </p>
          </div>
        </div>

        {/* DEVA SA DEVAM EDEN TİPOGRAFİK İMZA */}
        <div className={styles.bigTextContainer}>
          <h1 className={styles.bigFooterText}>MUNCHICO</h1>
        </div>
      </footer>
    </main>
  );
}
