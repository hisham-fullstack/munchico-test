export interface MenuItem {
  name: string;
  description: string;
  price: number;
  currency: string;
  img?: string; // <-- Bu satırı ekledik
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
      },
      {
        name: "İnferno Chicken Burger",
        description:
          "Acı sevenler toplanın, ateşle oynamaya geldik! 100 gr çıtır tavuğun, sweet chilli sos ve ateşli jalapeno biberiyle buluştuğu inferno burger. Taptaze...",
        price: 429,
        currency: "TL",
      },
      {
        name: "Lilac Chicken Burger",
        description:
          "Rengiyle göz alan, lezzetiyle baş döndüren! Yumuşacık burger ekmeği arasında 100 gr çıtır tavuk ona eşlik eden kıtır soğan ve özel lilac...",
        price: 429,
        currency: "TL",
      },
      {
        name: "Win Win Chicken Burger",
        description:
          "Bu lezzet yarışında kaybetmek yok, tam bir kazan-kazan durumu! Yumuşacık burger ekmeği arasında 100 gr çıtır tavuk, eriyen nefis cheddar sosu ve...",
        price: 439,
        currency: "TL",
      },
      {
        name: "Rocca Chicken Burger",
        description:
          "Pesto ve rokanın efsanevi uyumu tekde! Yumuşak beyaz ekmekte 100 gr tavuk, taptaze roka, nefis pesto sos, domates ve kıtır soğan...",
        price: 449,
        currency: "TL",
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
      },
      {
        name: "Pazzo Bun",
        description:
          "Fesleğen kokusunun çıtır tavukla enfes buluşması! Özel hazırladığımız fesleğenli pofuduk bun ekmeği, 100 gr çıtır tavuğu sararken; hafif ve fer...",
        price: 449,
        currency: "TL",
      },
      {
        name: "Rustico Bun",
        description:
          "Sıradan ekmeklere kısa bir mola, sahnede rustico var! Özel baharatlarla hazırlanan acılı ve kekikli pofuduk bun ekmeğinin arasında, 100 gr. içi sulu,...",
        price: 449,
        currency: "TL",
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
      },
      {
        name: "Snitz Mac",
        description:
          "Hem yoğun peynirli makarna hem de çıtır çıtır tavuk. Neden seçim yapasınız ki, bude ikisi de var! Yoğun ve akışkan mac and cheese sosuy...",
        price: 439,
        currency: "TL",
      },
      {
        name: "Snitz Mac Mix Salad",
        description:
          "Bugün ne yesem diye düşünmeye son, çünkü bude yok yok! Akışkan mac and cheese sosuyla harmanlanmış 300 gr penne makarna ve...",
        price: 519,
        currency: "TL",
      },
      {
        name: "Curry Makarna",
        description:
          "Uzak doğu'nun büyüleyici esintisi, en sevdiğimiz lezzetle buluştu! Özenle hazırlanan 300 gr penne makarna, damak çatlatan nefis köri (curry)...",
        price: 279,
        currency: "TL",
      },
      {
        name: "SNitz Curry",
        description:
          "Köri aromasının sıcaklığı, çıtır tavuğun efsane dokusuyla birleşti, ortaya bu muhteşem ikili çıktı! Özel köri sosumuzla harmanlanmış 300 gr penne...",
        price: 419,
        currency: "TL",
      },
      {
        name: "SNitz Curry Mix Salad",
        description:
          "Renklerin, aromaların ve çıtırtının kusursuz uyumu tek bir tabakta toplandı! 300 gr enfes köri sosuyla harmanlanmış makarna ve 100 gr çıtır tavuk...",
        price: 489,
        currency: "TL",
      },
      {
        name: "Pesto Makarna",
        description:
          "Sofranıza taptaze bir italyan rüzgarı esiyor! Fesleğenin o eşsiz ve ferahlatıcı aromasıyla hazırlanan kremsi pesto sosumuz, 300 gr tam...",
        price: 289,
        currency: "TL",
      },
      {
        name: "SNitz Pesto",
        description:
          "Fesleğenin ferahlığı, çıtır tavuğun efsanevi dokusuyla buluştu! Taptaze aromatik pesto sosumuzla harmanlanmış 300 gr penne makarna...",
        price: 439,
        currency: "TL",
      },
      {
        name: "Snitz Pesto Mix Salad",
        description:
          "İtalyan esintisi, çıtır çıtır bir lezzet ve taptaze bir salata şöleni aynı tabakta! Fesleğen ferahlığıyla harmanlanmış 300 gr enfes pesto soslu makarna...",
        price: 519,
        currency: "TL",
      },
    ],
  },
  {
    categoryName: "Et Burger",
    items: [
      {
        name: "Munchi Cheese Burger",
        description:
          "Açlığını tek seferde nakavt edecek o! 90 gr nefis köfte, sıcacık cheddar ve kıtır soğanın muazzam uyumu. İçindeki ranch sos, fransız...",
        price: 499,
        currency: "TL",
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
      },
    ],
  },
  {
    categoryName: "Alevli Tavuk Sandwich",
    items: [
      {
        name: "Mantarlı Körili Tavuk Sandviç",
        description:
          "Açlığa meydan okuyan, lezzetiyle efsaneleşen dev bir ikili! Yumuşacık iki adet sandviç ekmeği arasında köri sosunun sıcaklığıyla harmanlanmış...",
        price: 469,
        currency: "TL",
      },
      {
        name: "Sweet Chilli Tavuk Sandwich",
        description:
          "Tatlı ve acının en doyurucu, en iştah açıcı fırtınasına hazır olun! İki adet yumuşacık sandviç ekmeğinin arasına sığdırdığımız 150 gr (2x 75 gr)...",
        price: 469,
        currency: "TL",
      },
    ],
  },
  {
    categoryName: "Wrap",
    items: [
      {
        name: "Fiesta Wrap",
        description:
          "Damakta lezzet festivali başlatmaya hazır mısın? lavaşın içine sarılmış leziz tavuk parçaları, tatlı - acı dengesini kuran sweet chilli sos ve jalapeno...",
        price: 399,
        currency: "TL",
      },
    ],
  },
  {
    categoryName: "Çıtır Tavuklar",
    items: [
      {
        name: "Çıtır Tavuk 4'lü & Sos",
        description:
          "Sosa batırmalık efsanevi lezzet şöleni! Kusursuz bir çıtırlıkla kaplanmış 4 adet (160 gr) taptaze tavuk parçası. Kendi seçeceğiniz özel sosunuzla...",
        price: 299,
        currency: "TL",
      },
      {
        name: "Çıtır Tavuk 6'lı & Sos",
        description:
          "Sosa batırmalık efsanevi lezzet şöleni! Kusursuz bir çıtırlıkla kaplanmış 6 adet (240 gr) taptaze tavuk parçası. Kendi seçeceğiniz özel sosunuzla...",
        price: 429,
        currency: "TL",
      },
      {
        name: "Çıtır Tavuk 8'li & Sos",
        description:
          "Sosa batırmalık efsanevi lezzet şöleni! Kusursuz bir çıtırlıkla kaplanmış 8 adet (320 gr) taptaze tavuk parçası. Kendi seçeceğiniz özel sosunuzla...",
        price: 489,
        currency: "TL",
      },
      {
        name: "Nitz Box",
        description:
          "Açlık krizlerine renkli ve doyurucu bir son! dışı çıtır çıtır, içi sulu 120 gr tavuğumuza, patates kızartmalarımız eşlik ediyor. İşin sırrı ise enfes...",
        price: 469,
        currency: "TL",
      },
      {
        name: "Snitz Chips",
        description:
          "Bazen sadece iyi bir tavuk ve çıtır patates tüm dertleri çözer! İçi sulu sulu, dışı efsane 120 gr tavuğumuz ve yanında sıcacık patates kızartması...",
        price: 399,
        currency: "TL",
      },
    ],
  },
  {
    categoryName: "Çılgın Kanatlar",
    items: [
      {
        name: "Çıtır Kanat, But 4'lü & Sos",
        description:
          "Atıştırmalık krizlerine veya ana öğünlere en çıtır çözüm! 2 nefis kanat ve 2 sulu but (200 gr) ile o çok sevdiğin çıtır tavuk deneyimini zirveye...",
        price: 349,
        currency: "TL",
      },
      {
        name: "Çıtır Kanat, But 6'lı & Sos",
        description:
          "Atıştırmalık krizlerine veya ana öğünlere en çıtır çözüm! 3 nefis kanat ve 3 sulu but (300 gr) ile o çok sevdiğin çıtır tavuk deneyimini zirveye...",
        price: 439,
        currency: "TL",
      },
      {
        name: "Çıtır Kanat, But 8'li & Sos",
        description:
          "Atıştırmalık krizlerine veya ana öğünlere en çıtır çözüm! 4 nefis kanat ve 4 sulu but (400 gr) ile o çok sevdiğin çıtır tavuk deneyimini zirveye...",
        price: 499,
        currency: "TL",
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
      },
      {
        name: "Patates Kroket 6'lı",
        description:
          "Dışı çıtır çıtır, içi yumuşacık patates dolgusu! İştah kabartan, tam kıvamında kızarmış 6 adet nefis patates çubuğu. Klasik patates kızartmasına...",
        price: 109,
        currency: "TL",
      },
      {
        name: "Hexa Pizza Kroket 6'lı",
        description:
          "Pizzanın en çıtır ve en üçgen hali! Hem çıtır bir şeyler atıştırayım hem de pizza tadı alayım diyenler için tek lokmalık mutluluk. Dışı efsane çıtır, içi...",
        price: 119,
        currency: "TL",
      },
      {
        name: "Mozzarella Kroket 6'lı",
        description:
          "İçi akışkan, dışı efsane çıtır! baharatlı özel kaplamasıyla nar gibi kızarmış, tam 6 adet sıcacık mozzarella çubuğu. Isırdığınız an uzayan o nefis...",
        price: 139,
        currency: "TL",
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
      },
      {
        name: "Patates Kızartması (Baharatlı)",
        description:
          "Patates kızartmasını bir üst seviyeye taşıdık! 250 gr çıtır çıtır patateslerimizi, damakta iz bırakan efsane kajun baharatıyla harmanladık. Yemeğinin...",
        price: 160,
        currency: "TL",
      },
      {
        name: "Patates Kızartması (Soslu)",
        description:
          "Klasik patates kızartmasını kendi tarzına göre şekillendir! Tam kıvamında kızarttığımız 250 gr. çıtır patateslerimizi, tamamen senin seçeceğin...",
        price: 200,
        currency: "TL",
      },
    ],
  },
];
