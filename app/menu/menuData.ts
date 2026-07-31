export interface MenuItem {
  name: string;
  description: string;
  price: number;
  currency: string;
  img?: string;
}

export interface MenuCategory {
  categoryName: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    categoryName: "Chicken Burger",
    items: [
      {
        name: "Cheeky Chicken Burger",
        description:
          "İsmi gibi biraz yaramaz, lezzetiyle çok iddialı! Yumuşacık burger ekmeği arasında 100 gr çıtır tavuk, ferahlatan yoğurtlu mısır salatası ve lezzet...",
        price: 419,
        currency: "TL",
        img: "/assets/menu/chicken_burger/cheeky.webp",
      },
      {
        name: "İnferno Chicken Burger",
        description:
          "Acı sevenler toplanın, ateşle oynamaya geldik! 100 gr çıtır tavuğun, sweet chilli sos ve ateşli jalapeno biberiyle buluştuğu inferno burger. Taptaze...",
        price: 429,
        currency: "TL",
        img: "/assets/menu/chicken_burger/inferno.webp",
      },
      {
        name: "Lilac Chicken Burger",
        description:
          "Rengiyle göz alan, lezzetiyle baş döndüren! Yumuşacık burger ekmeği arasında 100 gr çıtır tavuk ona eşlik eden kıtır soğan ve özel lilac...",
        price: 429,
        currency: "TL",
        img: "/assets/menu/chicken_burger/lilac.webp",
      },
      {
        name: "Win Win Chicken Burger",
        description:
          "Bu lezzet yarışında kaybetmek yok, tam bir kazan-kazan durumu! Yumuşacık burger ekmeği arasında 100 gr çıtır tavuk, eriyen nefis cheddar sosu ve...",
        price: 439,
        currency: "TL",
        img: "/assets/menu/chicken_burger/win_win.webp",
      },
      {
        name: "Rocca Chicken Burger",
        description:
          "Pesto ve rokanın efsanevi uyumu tek menüde! Yumuşak beyaz ekmekte 100 gr tavuk, taptaze roka, nefis pesto sos, domates ve kıtır soğan...",
        price: 449,
        currency: "TL",
        img: "/assets/menu/chicken_burger/naneli.webp",
      },
    ],
  },
  {
    categoryName: "BunS",
    items: [
      {
        name: "Bao D'oro Bun",
        description:
          "Klasik burgerleri unutun, bulutların üzerinde bir lezzet yolculuğuna çıkıyoruz! Pamuk gibi yumuşacık sade bun ekmeğinin arasında 100 gr i...",
        price: 459,
        currency: "TL",
        img: "/assets/menu/buns/bao_doro.webp",
      },
      {
        name: "Pazzo Bun",
        description:
          "Fesleğen kokusunun çıtır tavukla enfes buluşması! Özel hazırladığımız fesleğenli pofuduk bun ekmeği, 100 gr çıtır tavuğu sararken; hafif ve fer...",
        price: 449,
        currency: "TL",
        img: "/assets/menu/buns/pazzo.webp",
      },
      {
        name: "Rustico Bun",
        description:
          "Sıradan ekmeklere kısa bir mola, sahnede rustico var! Özel baharatlarla hazırlanan acılı ve kekikli pofuduk bun ekmeğinin arasında, 100 gr. içi sulu,...",
        price: 449,
        currency: "TL",
        img: "/assets/menu/buns/rustico.webp",
      },
    ],
  },
  {
    categoryName: "Penne Rigate Makarna",
    items: [
      {
        name: "Mac & Cheese Makarna",
        description:
          "Peynir krizlerine en lezzetli çözüm! Özenle hazırlanmış 300 gr penne makarna, yoğun, akışkan ve efsanevi mac and cheese sosumuzla...",
        price: 289,
        currency: "TL",
        img: "/assets/menu/makarna/mac_and_cheese.webp", // Örnek yol
      },
      {
        name: "Snitz Mac",
        description:
          "Hem yoğun peynirli makarna hem de çıtır çıtır tavuk. Neden seçim yapasınız ki, bu menüde ikisi de var! Yoğun ve akışkan mac and cheese sosuy...",
        price: 439,
        currency: "TL",
        img: "/assets/menu/makarna/snitz_mac.webp", // Örnek yol
      },
      {
        name: "Snitz Mac Mix Salad",
        description:
          "Bugün ne yesem diye düşünmeye son, çünkü bu menüde yok yok! Akışkan mac and cheese sosuyla harmanlanmış 300 gr penne makarna ve...",
        price: 519,
        currency: "TL",
        img: "/assets/menu/makarna/snitz_curry_salad.webp", // Örnek yol
      },
      {
        name: "Curry Makarna",
        description:
          "Uzak doğu'nun büyüleyici esintisi, en sevdiğimiz lezzetle buluştu! Özenle hazırlanan 300 gr penne makarna, damak çatlatan nefis köri (curry)...",
        price: 279,
        currency: "TL",
        img: "/assets/menu/makarna/curry.webp", // Örnek yol
      },
      {
        name: "SNitz Curry",
        description:
          "Köri aromasının sıcaklığı, çıtır tavuğun efsane dokusuyla birleşti, ortaya bu muhteşem ikili çıktı! Özel köri sosumuzla harmanlanmış 300 gr penne...",
        price: 419,
        currency: "TL",
        img: "/assets/menu/makarna/snitz_curry.webp", // Örnek yol
      },
      {
        name: "SNitz Curry Mix Salad",
        description:
          "Renklerin, aromaların ve çıtırtının kusursuz uyumu tek bir tabakta toplandı! 300 gr enfes köri sosuyla harmanlanmış makarna ve 100 gr çıtır tavuk...",
        price: 489,
        currency: "TL",
        img: "/assets/menu/makarna/snitz_curry_salad.webp", // Örnek yol
      },
      {
        name: "Pesto Makarna",
        description:
          "Sofranıza taptaze bir italyan rüzgarı esiyor! Fesleğenin o eşsiz ve ferahlatıcı aromasıyla hazırlanan kremsi pesto sosumuz, 300 gr tam...",
        price: 289,
        currency: "TL",
        img: "/assets/menu/makarna/pesto.webp", // Örnek yol
      },
      {
        name: "SNitz Pesto",
        description:
          "Fesleğenin ferahlığı, çıtır tavuğun efsanevi dokusuyla buluştu! Taptaze aromatik pesto sosumuzla harmanlanmış 300 gr penne makarna...",
        price: 439,
        currency: "TL",
        img: "/assets/menu/makarna/snitz_pesto.webp", // Örnek yol
      },
      {
        name: "Snitz Pesto Mix Salad",
        description:
          "İtalyan esintisi, çıtır çıtır bir lezzet ve taptaze bir salata şöleni aynı tabakta! Fesleğen ferahlığıyla harmanlanmış 300 gr enfes pesto soslu makarna...",
        price: 519,
        currency: "TL",
        img: "/assets/menu/makarna/snitz_pesto_salad.webp", // Örnek yol
      },
    ],
  },
  {
    categoryName: "Et Burger",
    items: [
      {
        name: "Munchi Cheese Burger",
        description:
          "Açlığını tek seferde nakavt edecek o menü! 90 gr nefis köfte, sıcacık cheddar ve kıtır soğanın muazzam uyumu. İçindeki ranch sos, fransız...",
        price: 499,
        currency: "TL",
        img: "/assets/menu/beef_burger/cheese_burger.webp",
      },
    ],
  },
  {
    categoryName: "SNitz Sandwich",
    items: [
      {
        name: "Rine Sandwich",
        description:
          "Sıradan sandviçleri unut, sahneye snitz sandwich'in! 100 gr nefis tavuğumuzu eriyen cheddar, kıtır soğan ve o çok sevilen trüflü...",
        price: 439,
        currency: "TL",
        img: "/assets/menu/snitz_sandwich/rine.webp", // Örnek yol
      },
    ],
  },
  {
    categoryName: "Alevli Tavuk Sandwich",
    items: [
      {
        name: "Mantarlı Körili Tavuk Sandviç Menü",
        description:
          "Açlığa meydan okuyan, lezzetiyle efsaneleşen dev bir ikili! Yumuşacık iki adet sandviç ekmeği arasında köri sosunun sıcaklığıyla harmanlanmış...",
        price: 469,
        currency: "TL",
        img: "/assets/menu/sandwich/mantar.webp", // Örnek yol
      },
      {
        name: "Sweet Chilli Tavuk Sandwich Menü",
        description:
          "Tatlı ve acının en doyurucu, en iştah açıcı fırtınasına hazır olun! İki adet yumuşacık sandviç ekmeğinin arasına sığdırdığımız 150 gr (2x 75 gr)...",
        price: 469,
        currency: "TL",
        img: "/assets/menu/sandwich/sweet.webp", // Örnek yol
      },
    ],
  },
  {
    categoryName: "Wrap",
    items: [
      {
        name: "Fiesta Wrap",
        description: ".",
        price: 469,
        currency: "TL",
        img: "/assets/menu/wrap/fiesta.webp", // Örnek yol
      },
    ],
  },

  {
    categoryName: "Çıtır Tavuklar",
    items: [
      {
        name: "Çıtır Tavuk 4'lü",
        description:
          "Sosa batırmalık efsanevi lezzet şöleni! Kusursuz bir çıtırlıkla kaplanmış 4 adet (160 gr) taptaze tavuk parçası. Kendi seçeceğiniz özel sosunuzla...",
        price: 299,
        currency: "TL",
        img: "/assets/menu/citir_tavuk/4.webp", // Örnek yol
      },
      {
        name: "Çıtır Tavuk 6'lı",
        description:
          "Sosa batırmalık efsanevi lezzet şöleni! Kusursuz bir çıtırlıkla kaplanmış 6 adet (240 gr) taptaze tavuk parçası. Kendi seçeceğiniz özel sosunuzla...",
        price: 429,
        currency: "TL",
        img: "/assets/menu/citir_tavuk/6.webp", // Örnek yol
      },
      {
        name: "Çıtır Tavuk 8'li",
        description:
          "Sosa batırmalık efsanevi lezzet şöleni! Kusursuz bir çıtırlıkla kaplanmış 8 adet (320 gr) taptaze tavuk parçası. Kendi seçeceğiniz özel sosunuzla...",
        price: 489,
        currency: "TL",
        img: "/assets/menu/citir_tavuk/8.webp", // Örnek yol
      },
      {
        name: "Nitz Box",
        description:
          "Açlık krizlerine renkli ve doyurucu bir son! dışı çıtır çıtır, içi sulu 120 gr tavuğumuza, patates kızartmalarımız eşlik ediyor. İşin sırrı ise enfes...",
        price: 469,
        currency: "TL",
        img: "/assets/menu/citir_tavuk/nitz_box.webp", // Örnek yol
      },
      {
        name: "Snitz Chips",
        description:
          "Bazen sadece iyi bir tavuk ve çıtır patates tüm dertleri çözer! İçi sulu sulu, dışı efsane 120 gr tavuğumuz ve yanında sıcacık patates kızartması...",
        price: 399,
        currency: "TL",
        img: "/assets/menu/citir_tavuk/chips.webp", // Örnek yol
      },
    ],
  },
  {
    categoryName: "Çılgın Kanatlar",
    items: [
      {
        name: "Çıtır Kanat, But 4'lü",
        description:
          "Atıştırmalık krizlerine veya ana öğünlere en çıtır çözüm! 2 nefis kanat ve 2 sulu but (200 gr) ile o çok sevdiğin çıtır tavuk deneyimini zirveye...",
        price: 349,
        currency: "TL",
        img: "/assets/menu/cilgin_kanat/4.webp", // Örnek yol
      },
      {
        name: "Çıtır Kanat, But 6'lı",
        description:
          "Atıştırmalık krizlerine veya ana öğünlere en çıtır çözüm! 3 nefis kanat ve 3 sulu but (300 gr) ile o çok sevdiğin çıtır tavuk deneyimini zirveye...",
        price: 439,
        currency: "TL",
        img: "/assets/menu/cilgin_kanat/6.webp", // Örnek yol
      },
      {
        name: "Çıtır Kanat, But 8'li",
        description:
          "Atıştırmalık krizlerine veya ana öğünlere en çıtır çözüm! 4 nefis kanat ve 4 sulu but (400 gr) ile o çok sevdiğin çıtır tavuk deneyimini zirveye...",
        price: 499,
        currency: "TL",
        img: "/assets/menu/cilgin_kanat/8.webp", // Örnek yol
      },
    ],
  },
  {
    categoryName: "Krokets",
    items: [
      {
        name: "Soğan Halkası 6'lı",
        description:
          "Yemeğinin yanına en çıtır eşlikçi! Kıtırlığıyla iştah açan, dışı çıtır çıtır, içi yumuşacık tam 6 adet nefis soğan halkası. Ana öğününü taçlandırmak veya...",
        price: 79,
        currency: "TL",
        img: "/assets/menu/korket/sogan_halkasi.webp", // Örnek yol
      },
      {
        name: "Patates Kroket 6'lı",
        description:
          "Dışı çıtır çıtır, içi yumuşacık patates dolgusu! İştah kabartan, tam kıvamında kızarmış 6 adet nefis patates çubuğu. Klasik patates kızartmasına...",
        price: 109,
        currency: "TL",
        img: "/assets/menu/korket/patates_kroket.webp", // Örnek yol
      },
      {
        name: "Hexa Pizza Kroket 6'lı",
        description:
          "Pizzanın en çıtır ve en üçgen hali! Hem çıtır bir şeyler atıştırayım hem de pizza tadı alayım diyenler için tek lokmalık mutluluk. Dışı efsane çıtır, içi...",
        price: 119,
        currency: "TL",
        img: "/assets/menu/korket/pizza_kroket.webp", // Örnek yol
      },
      {
        name: "Mozzarella Kroket 6'lı",
        description:
          "İçi akışkan, dışı efsane çıtır! baharatlı özel kaplamasıyla nar gibi kızarmış, tam 6 adet sıcacık mozzarella çubuğu. Isırdığınız an uzayan o nefis...",
        price: 139,
        currency: "TL",
        img: "/assets/menu/korket/mozzarella_kroket.webp", // Örnek yol
      },
    ],
  },
  {
    categoryName: "French Fries",
    items: [
      {
        name: "Patates Kızartması (Sade)",
        description:
          "Sadelikten şaşmayanlar için! Baharat eklemeden, tam kıvamında kızarttığımız 250 gr doyurucu ve çıtır çıtır patates. Ana yemeğinin yanına ekle,...",
        price: 150,
        currency: "TL",
        img: "/assets/menu/fries/sade.webp", // Örnek yol
      },
      {
        name: "Patates Kızartması (Baharatlı)",
        description:
          "Patates kızartmasını bir üst seviyeye taşıdık! 250 gr çıtır çıtır patateslerimizi, damakta iz bırakan efsane kajun baharatıyla harmanladık. Yemeğinin...",
        price: 160,
        currency: "TL",
        img: "/assets/menu/fries/baharatli.webp", // Örnek yol
      },
      {
        name: "Patates Kızartması (Soslu)",
        description:
          "Klasik patates kızartmasını kendi tarzına göre şekillendir! Tam kıvamında kızarttığımız 250 gr. çıtır patateslerimizi, tamamen senin seçeceğin...",
        price: 200,
        currency: "TL",
        img: "/assets/menu/fries/soslu.webp", // Örnek yol
      },
    ],
  },
];
