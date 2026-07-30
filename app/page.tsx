"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./page.module.css";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"tavuk" | "burger">("tavuk");

  return (
    <main className={styles.mainContainer}>
      {/* --- 1. HERO SECTION --- */}
      <header className={styles.heroSection} id="anasayfa">
        <div className={styles.heroBg}>
          <Image
            src="/assets/img/hero.webp"
            alt="Munchico Hero Desktop"
            fill
            priority
            className={`${styles.heroImg} ${styles.desktopImg}`}
          />
          <Image
            src="/assets/img/hero-mobile.webp"
            alt="Munchico Hero Mobile"
            fill
            priority
            className={`${styles.heroImg} ${styles.mobileImg}`}
          />
        </div>

        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          <h2 className={styles.heroSubtitle}>
            Demirtaş'ın Yeni Nesil Çıtır Tavukçusu
          </h2>
          <h1 className={styles.heroTitle}>
            <span className={styles.blockText}>MUNCHICO</span>
            <span className={`${styles.blockText} ${styles.outlineText}`}>
              CHICKEN
            </span>
          </h1>
          <p className={styles.heroDesc}>
            Özel baharatlarla harmanlanmış altın sarısı çıtır tavuklar, dev
            burgerler ve enfes makarnalar.
          </p>
        </div>

        <div className={styles.scrollIcon}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </header>

      {/* --- 2. MARQUEE SECTION --- */}
      <div className={styles.marqueeSection}>
        <div className={styles.marqueeContent}>
          <span>
            %100 TAZE TAVUK • ÇITIR ÇITIR LEZZET • NEFİS BURGERLER • ÖZEL SOSLAR
            • DEMİRTAŞ'IN FAVORİSİ •
          </span>
          <span>
            %100 TAZE TAVUK • ÇITIR ÇITIR LEZZET • NEFİS BURGERLER • ÖZEL SOSLAR
            • DEMİRTAŞ'IN FAVORİSİ •
          </span>
        </div>
      </div>

      {/* --- 3. SLIDER SECTION --- */}
      <section className={styles.sliderSection}>
        <div className={`${styles.container} ${styles.sectionHeader}`}>
          <div className={styles.headerText}>
            <h3>Munchico İmzası</h3>
            <h2>En Sevilen Lezzetlerimiz</h2>
          </div>
        </div>

        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.5 },
            }}
            className={styles.mySwiper}
          >
            <SwiperSlide>
              <div className={`${styles.productCard} ${styles.cardPrimary}`}>
                <div className={styles.badge}>BESTSELLER</div>
                <img src="/assets/menu/1.webp" alt="Chicken Burger" />
                <div className={styles.cardInfo}>
                  <h3>Chicken Burger</h3>
                  <p>
                    Pofuduk ekmek, kalın çıtır tavuk fileto ve efsane soslarla.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.productCard}>
                <img src="/assets/menu/2.webp" alt="Çıtır Tavuk" />
                <div className={styles.cardInfo}>
                  <h3>Beef Burger</h3>
                  <p>
                    Ustası elinden çıkma sulu dana köfte, taze yeşillikler ve
                    özel şef sosu.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.productCard}>
                <img src="/assets/menu/3.webp" alt="Beef Burger" />
                <div className={styles.cardInfo}>
                  <h3>BunS</h3>
                  <p>
                    Pofuduk bun ekmek, çıtır tavuk fileto ve efsane salatalarla.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.productCard}>
                <img src="/assets/menu/4.webp" alt="Penne Makarna" />
                <div className={styles.cardInfo}>
                  <h3>Penne Makarna</h3>
                  <p>
                    Kremsi özel soslarla harmanlanmış, doyurucu taze makarna
                    şöleni.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`${styles.productCard} ${styles.cardPrimary}`}>
                <img src="/assets/menu/6.webp" alt="French Fries" />
                <div className={styles.cardInfo}>
                  <h3>Çılgın Kanatlar</h3>
                  <p>
                    Özel Munchico baharatlarıyla tatlandırılmış, sıcacık ve
                    çıtır kanatlar.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.sliderBottomAction}>
          <Link href="/menu" className={styles.btnViewMenu}>
            TÜM MENÜYÜ İNCELE
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </section>

      {/* --- 4. DELIVERY SECTION --- */}
      <section className={styles.deliverySection} id="delivery">
        <div className={styles.container}>
          <div className={styles.deliveryBox}>
            <div className={styles.deliveryText}>
              <h3>LEZZET KAPINDA</h3>
              <h2>
                SICACIK VE HIZLI <br />
                <span>SİPARİŞ VER</span>
              </h2>
              <p>Çıtır çıtır Munchico lezzetleri anında kapında.</p>
            </div>
            <div className={styles.deliveryLogos}>
              <a
                href="https://tgoyemek.com/restoranlar/466593"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.platformBtn} ${styles.ty}`}
              >
                Trendyol Yemek
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. NASIL YAPIYORUZ SECTION --- */}
      <section className={styles.processSection} id="nasil-yapiyoruz">
        <div className={styles.container}>
          <div className={styles.centerHeader}>
            <h3>Mutfak Sırları</h3>
            <h2>
              NASIL <span>HAZIRLIYORUZ?</span>
            </h2>
          </div>

          <div className={styles.processTabs}>
            <button
              className={`${styles.tabBtn} ${activeTab === "tavuk" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("tavuk")}
            >
              Çıtır Tavuk
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === "burger" ? styles.activeTab : ""}`}
              onClick={() => setActiveTab("burger")}
            >
              Burger & Makarna
            </button>
          </div>

          {activeTab === "tavuk" && (
            <div className={styles.processGrid}>
              <div className={styles.processCard}>
                <div className={styles.stepNumber}>01</div>
                <h4>%100 Taze Et</h4>
                <p>
                  Asla donuk ürün kullanmıyoruz. Tavuklarımızı günlük olarak
                  taze tedarik ediyor ve özenle hazırlıyoruz.
                </p>
              </div>
              <div className={styles.processCard}>
                <div className={styles.stepNumber}>02</div>
                <h4>Özel Kaplama</h4>
                <p>
                  Sırrımız baharatlarımızda! Tavuklarımızı özel baharat
                  karışımımıza bulayıp ekstra çıtırlık kazandırıyoruz.
                </p>
              </div>
              <div className={styles.processCard}>
                <div className={styles.stepNumber}>03</div>
                <h4>Altın Sarısı Kızartma</h4>
                <p>
                  Tam kıvamında, içi sulu dışı çıtır çıtır olacak şekilde, temiz
                  ve ideal sıcaklıktaki yağda altın sarısı olana dek
                  pişiriyoruz.
                </p>
              </div>
              <div className={styles.processCard}>
                <div className={styles.stepNumber}>04</div>
                <h4>Sıcak Sunum</h4>
                <p>
                  Özel soslarımız ve sıcacık patateslerimizle birlikte
                  çıtırlığını kaybetmeden anında servis ediyoruz.
                </p>
              </div>
            </div>
          )}

          {activeTab === "burger" && (
            <div className={styles.processGrid}>
              <div className={styles.processCard}>
                <div className={styles.stepNumber}>01</div>
                <h4>Yumuşacık Ekmek</h4>
                <p>
                  Burgerlerimizin temeli olan pofuduk ve taze ekmeklerimizi en
                  kaliteli unlarla hazırlıyoruz.
                </p>
              </div>
              <div className={styles.processCard}>
                <div className={styles.stepNumber}>02</div>
                <h4>Usta İşi Hazırlık</h4>
                <p>
                  İster dana köfte ister çıtır tavuk olsun, tüm etlerimizi
                  kurutmadan, en sulu ve lezzetli halinde pişiriyoruz.
                </p>
              </div>
              <div className={styles.processCard}>
                <div className={styles.stepNumber}>03</div>
                <h4>Taze Makarnalar</h4>
                <p>
                  Sadece burgerde değil, makarnada da iddialıyız. Kremsi
                  soslarımızı sipariş anında taze taze tavada hazırlıyoruz.
                </p>
              </div>
              <div className={styles.processCard}>
                <div className={styles.stepNumber}>04</div>
                <h4>Şefin Dokunuşu</h4>
                <p>
                  Eriyen peynirler, taze yeşillikler ve Munchico'nun gizli
                  soslarıyla lezzeti devasa boyutlara taşıyoruz.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* --- 6. PARALLAX VIDEO SECTION --- */}
      <section className={styles.videoSection}>
        <div className={styles.parallaxWrapper}>
          <video
            className={styles.parallaxVideo}
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-a-burger-being-made-16006-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className={styles.videoOverlay}></div>
        </div>
        <div className={`${styles.videoContent} ${styles.container}`}>
          <h2 className={styles.neonTitleLarge}>
            MUNCHICO <span className={styles.outlineText}>DENEYİMİ</span>
          </h2>
          <p className={styles.videoDesc}>
            Kızgın yağın çıtırtısı ve altın sarısı tavukların efsanevi kokusu
            mutfağımızdan taşıyor.
          </p>
        </div>
      </section>

      {/* --- 7. YORUMLAR SECTION --- */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={styles.centerHeader}>
            <h3>Sosyal Kanıt</h3>
            <h2>
              MÜŞTERİ <span>YORUMLARI</span>
            </h2>
          </div>
          <div className={styles.reviewsGrid}>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>
              <p>
                "Demirtaş'ta yediğim açık ara en iyi çıtır tavuk. Dışı cidden
                efsane çıtır, içi ise sulu suluydu."
              </p>
              <div className={styles.reviewer}>
                <strong>Burak K.</strong>
                <span>Google Yorumu</span>
              </div>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>
              <p>
                "Chicken burger ve penne makarna muazzamdı. Porsiyonlar çok
                doyurucu ve sosları harika."
              </p>
              <div className={styles.reviewer}>
                <strong>Ayşe N.</strong>
                <span>Trendyol Yemek</span>
              </div>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>
              <p>
                "Siparişim çok hızlı geldi, patatesler bile sıcacıktı. Beef
                burgerin eti tam istediğim gibiydi, ellerinize sağlık."
              </p>
              <div className={styles.reviewer}>
                <strong>Emir T.</strong>
                <span>Google Yorumu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 8. HAKKIMIZDA SECTION --- */}
      <section className={styles.aboutSection} id="hakkimizda">
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <h3 className={styles.neonSubtitle}>HİKAYEMİZ</h3>
              <h2 className={styles.branchTitle}>
                MUNCHICO'NUN <span>SIRRI</span>
              </h2>
              <p className={styles.aboutDesc}>
                Munchico olarak sıradanlığa karşı çıkıyoruz. Hazır ve donuk
                ürünlerden tamamen uzak duruyor, her bir malzemeyi özenle ve
                taze seçiyoruz.
              </p>
              <p className={styles.aboutDesc}>
                Demirtaş'taki mutfağımızda, lezzetin asıl kaynağı olan doğru
                marinasyon ve mükemmel pişirme tekniklerini kullanarak sizlere
                en çıtır ve en doyurucu deneyimi sunmayı hedefliyoruz.
              </p>
              <div className={styles.statsContainer}>
                <div className={styles.statBox}>
                  <span className={styles.statNumber}>1</span>
                  <span className={styles.statLabel}>Şube</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statNumber}>100K+</span>
                  <span className={styles.statLabel}>Mutlu Müşteri</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statNumber}>12</span>
                  <span className={styles.statLabel}>Özel Sos</span>
                </div>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <img
                src="assets/img/hero-mobile.webp"
                alt="Munchico Ekibi"
                className={styles.mainImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 9. İLETİŞİM / ŞUBELERİMİZ SECTION --- */}
      <section className={styles.contactSection} id="subelerimiz">
        <div className={styles.container}>
          <div className={styles.contactContainer}>
            <div className={styles.contactInfoCard}>
              <h3 className={styles.neonSubtitle}>BİZİ ZİYARET ET</h3>
              <h2 className={styles.branchTitle}>
                DEMİRTAŞ <span>ŞUBESİ</span>
              </h2>
              <p className={styles.branchDesc}>
                Demirtaş'ın kalbinde, çıtır çıtır Munchico lezzetlerini sıcak
                bir atmosferde yerinde tatmanız için bekliyoruz.
              </p>
              <div className={styles.detailBox}>
                <div className={styles.textGroup}>
                  <span className={styles.label}>Adres</span>
                  <p>
                    Demirtaş Cumhuriyet Mh. Panayır Yolu Cad. No:20 <br />
                    Osmangazi / BURSA
                  </p>
                </div>
              </div>
              <div className={styles.detailBox}>
                <div className={styles.textGroup}>
                  <span className={styles.label}>Çalışma Saatleri</span>
                  <p>
                    Her Gün:{" "}
                    <span
                      style={{ color: "var(--color-primary)", fontWeight: 700 }}
                    >
                      11:00 - 02:00
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.mapFrame}>
              <div className={styles.mapOverlayText}>MUNCHICO</div>
              <iframe
                src="https://maps.google.com/maps?width=100%25&height=100%25&hl=tr&q=Demirta%C5%9F%20Cumhuriyet%20Mh.%20Panay%C4%B1r%20Yolu%20Cad.%20No:20%20Osmangazi%20/%20BURSA&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* --- 10. AWWWARDS STİLİ FOOTER --- */}
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
                Altın sarısı çıtır tavuklar, devasa burgerler ve unutulmaz
                Munchico lezzet deneyimi.
              </p>
            </div>

            {/* Sağ: Hızlı Linkler ve Sosyal Medya */}
            <div className={styles.footerNavGroup}>
              <div className={styles.footerNavCol}>
                <h4>NAVİGASYON</h4>
                <Link href="#anasayfa">Anasayfa</Link>
                <Link href="#nasil-yapiyoruz">Mutfak Sırları</Link>
                <Link href="#hakkimizda">Hikayemiz</Link>
                <Link href="#subelerimiz">Demirtaş Şubesi</Link>
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
