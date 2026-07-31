"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { menuData, MenuCategory } from "./menuData";
import styles from "./page.module.css";

export default function MenuPage() {
  // 1. Kategori seçimi state'i
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(
    null,
  );
  // 2. Ürün detayı (slider) için seçilen ürünün indeks numarası (null ise liste görünümündedir)
  const [selectedProductIndex, setSelectedProductIndex] = useState<
    number | null
  >(null);

  // Kaydırma (Swipe) işlemlerini yakalamak için state'ler
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  // Kategori değiştiğinde en üste kaydır
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCategory, selectedProductIndex]);

  // --- KAYDIRMA (SWIPE) FONKSİYONLARI ---
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50; // Kaydırma hassasiyeti

    if (distance > minSwipeDistance) handleNext(); // Sola kaydırma (Sonraki)
    if (distance < -minSwipeDistance) handlePrev(); // Sağa kaydırma (Önceki)

    // Değerleri sıfırla
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
                İncelemek istediğiniz kategoriyi seçin.
              </p>
            </header>

            <div className={styles.floatingGrid}>
              {menuData.map((category, index) => (
                <div
                  key={index}
                  className={styles.floatingCard}
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className={styles.floatingImgWrapper}>
                    <Image
                      src={category.items[0]?.img || "/assets/menu/1.webp"}
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
                    <span className={styles.exploreText}>İncele →</span>
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
                onClick={() => setSelectedCategory(null)}
                className={styles.backBtn}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Kategorilere Dön
              </button>
            </div>

            <header className={styles.selectedHeader}>
              <h1 className={styles.selectedTitle}>
                {selectedCategory.categoryName}
              </h1>
              <span className={styles.itemBadge}>
                {selectedCategory.items.length} Ürün
              </span>
            </header>

            <div className={styles.productGrid}>
              {selectedCategory.items.map((item, index) => (
                <div
                  key={index}
                  className={styles.productCard}
                  onClick={() => setSelectedProductIndex(index)} // Ürüne tıklanınca detaya git
                  style={{ cursor: "pointer" }}
                >
                  <div className={styles.productImgWrapper}>
                    <Image
                      src={item.img || "/assets/menu/placeholder.webp"}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className={styles.productImg}
                    />
                  </div>
                  <div className={styles.productInfo}>
                    <div className={styles.productTitleRow}>
                      <h3 className={styles.productName}>{item.name}</h3>
                      <span className={styles.productPrice}>
                        {item.price} {item.currency}
                      </span>
                    </div>
                    {/* Listede açıklamayı kısaltarak gösterebilirsin veya tamamen kaldırabilirsin. Şu an mevcut haliyle bıraktım. */}
                    <p className={styles.productDesc}>{item.description}</p>
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
                onClick={() => setSelectedProductIndex(null)} // Listeye dön
                className={styles.backBtn}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Ürünlere Dön
              </button>
            </div>

            <div className={styles.sliderContainer}>
              {/* Masaüstü için Sol Buton (Mobilde gizleyebilirsin) */}
              <button
                className={styles.sliderBtn}
                onClick={handlePrev}
                disabled={selectedProductIndex === 0}
              >
                ❮
              </button>

              <div className={styles.sliderContent}>
                <div className={styles.sliderImgWrapper}>
                  <Image
                    src={
                      selectedCategory.items[selectedProductIndex].img ||
                      "/assets/menu/placeholder.webp"
                    }
                    alt={selectedCategory.items[selectedProductIndex].name}
                    fill
                    sizes="100vw"
                    className={styles.sliderImg}
                    priority // Detay görseli hızlı yüklensin
                  />
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
                </div>

                {/* Kaçıncı üründe olduğunu gösteren noktalar (Pagination) */}
                <div className={styles.sliderDots}>
                  {selectedCategory.items.map((_, idx) => (
                    <span
                      key={idx}
                      className={`${styles.dot} ${idx === selectedProductIndex ? styles.activeDot : ""}`}
                    />
                  ))}
                </div>
              </div>

              {/* Masaüstü için Sağ Buton */}
              <button
                className={styles.sliderBtn}
                onClick={handleNext}
                disabled={
                  selectedProductIndex === selectedCategory.items.length - 1
                }
              >
                ❯
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
