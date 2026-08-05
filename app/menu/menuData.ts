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
          "İsmi gibi biraz yaramaz, lezzetiyle çok iddialı! Yumuşacık burger ekmeği arasında 100 gr çıtır tavuk, ferahlatan yoğurtlu mısır salatası ve lezzeti katlayan kıtır soğan ile damakta iz bırakan bir deneyim.",
        price: 270,
        currency: "TL",
        img: "/assets/menu/chicken_burger/cheeky.webp",
      },
      {
        name: "İnferno Chicken Burger",
        description:
          "Acı sevenler toplanın, ateşle oynamaya geldik! 100 gr çıtır tavuğun, sweet chilli sos ve ateşli jalapeno biberiyle buluştuğu inferno burger. Taptaze iceberg marul ve kıtır soğanla taçlandırılan bu efsaneyi denemeye cesaretin var mı?",
        price: 270,
        currency: "TL",
        img: "/assets/menu/chicken_burger/inferno.webp",
      },
      {
        name: "Lilac Chicken Burger",
        description:
          "Rengiyle göz alan, lezzetiyle baş döndüren! Yumuşacık burger ekmeği arasında 100 gr çıtır tavuk, kıtır soğan ve taptaze mor lahana, mayonez ve süzme yoğurttan oluşan özel lilac salatası.",
        price: 290,
        currency: "TL",
        img: "/assets/menu/chicken_burger/lilac.webp",
      },
      {
        name: "Win Win Chicken Burger",
        description:
          "Bu lezzet yarışında kaybetmek yok! Yumuşacık burger ekmeği arasında 100 gr çıtır tavuk, eriyen nefis cheddar ve ferahlatıcı ranch sosun kusursuz uyumu. Taptaze iceberg marul ile masadaki zafer senin!",
        price: 290,
        currency: "TL",
        img: "/assets/menu/chicken_burger/win_win.webp",
      },
      {
        name: "BBQ Chicken Burger",
        description:
          "İçi sulu dışı çıtır 100 gr tavuğun, yoğun aromalı bbq sos ve eriyen cheddar peyniriyle kusursuz uyumu. Jalapeno biberinin hafif heyecanı ve kıtır soğanla tabağa atılan enfes imza.",
        price: 290,
        currency: "TL",
        img: "/assets/menu/chicken_burger/bbq.webp",
      },
      {
        name: "Rocca Chicken Burger",
        description:
          "Pesto ve rokanın efsanevi uyumu! Yumuşak beyaz ekmekte 100 gr tavuk, taptaze roka, nefis pesto sos, domates ve kıtır soğan bir arada. Ferah ama tam doyurucu bir ziyafet seni bekliyor.",
        price: 290,
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
          "Klasik burgerleri unutun, bulutların üzerinde bir lezzet yolculuğuna çıkıyoruz! Pamuk gibi yumuşacık sade bun ekmeğinin arasında 100 gr içi sulu dışı çıtır tavuk, akışkan cheddar, ferahlatıcı ranch sos ve taptaze iceberg marul.",
        price: 290,
        currency: "TL",
        img: "/assets/menu/buns/bao_doro.webp",
      },
      {
        name: "Pazzo Bun",
        description:
          "Fesleğen kokusunun çıtır tavukla enfes buluşması! Özel fesleğenli pofuduk bun ekmeği 100 gr çıtır tavuğu sararken; hafif ve ferah lilac salatası damağını şenlendiriyor. Kıtır soğanın dokunuşuyla gurme bir deneyim.",
        price: 270,
        currency: "TL",
        img: "/assets/menu/buns/pazzo.webp",
      },
      {
        name: "Rustico Bun",
        description:
          "Sıradan ekmeklere kısa bir mola, sahnede rustico var! Özel baharatlarla hazırlanan acılı ve kekikli pofuduk bun ekmeğinin arasında 100 gr çıtır tavuk. Ekmeğin hafif acısını dengeleyen serinletici yoğurtlu mısır salatası ve kıtır soğanla ezber bozan bir lezzet.",
        price: 270,
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
          "Peynir krizlerine en lezzetli çözüm! Özenle hazırlanmış 300 gr penne makarna, yoğun, akışkan ve efsanevi mac and cheese sosumuzla buluştu. Sosu içine hapseden nefis penne dokusuyla bu şölene karşı koyamayacaksınız.",
        price: 220,
        currency: "TL",
        img: "/assets/menu/makarna/mac_and_cheese.webp",
      },
      {
        name: "Snitz Mac",
        description:
          "Hem yoğun peynirli makarna hem de çıtır çıtır tavuk! Yoğun ve akışkan mac and cheese sosuyla harmanlanmış 300 gr penne makarnaya, 100 gr çıtır çıtır tavuk parçaları eşlik ediyor. Günün yıldızı olmaya aday.",
        price: 300,
        currency: "TL",
        img: "/assets/menu/makarna/snitz_mac.webp",
      },
      {
        name: "Snitz Mac Mix Salad",
        description:
          "Tek tabakta dev bir lezzet karnavalı! Akışkan mac and cheese sosuyla harmanlanmış 300 gr penne makarna ve üzerinde 100 gr çıtır tavuk. Yanında ferahlatıcı mor lahanalı lilac salatası, serinletici yoğurtlu mısır salatası ve sweet chilli soslu taptaze iceberg salata.",
        price: 370,
        currency: "TL",
        img: "/assets/menu/makarna/snitz_curry_salad.webp",
      },
      {
        name: "Curry Makarna",
        description:
          "Uzak Doğu'nun büyüleyici esintisi! Özenle hazırlanan 300 gr penne makarna, damak çatlatan nefis köri sosumuzla harmanlandı. Sosu tam kıvamında içine çeken doyurucu penne ile sıradan öğünleri renklendiriyoruz.",
        price: 220,
        currency: "TL",
        img: "/assets/menu/makarna/curry.webp",
      },
      {
        name: "SNitz Curry",
        description:
          "Köri aromasının sıcaklığı, çıtır tavuğun efsane dokusuyla birleşti! Özel köri sosumuzla harmanlanmış 300 gr penne makarna ve yanında dışı çıtır, içi sulu 100 gr tavuk parçaları.",
        price: 300,
        currency: "TL",
        img: "/assets/menu/makarna/snitz_curry.webp",
      },
      {
        name: "SNitz Curry Mix Salad",
        description:
          "Renklerin, aromaların ve çıtırtının kusursuz uyumu! 300 gr enfes köri soslu makarna ve 100 gr çıtır tavuk parçaları. Bu sıcak fırtınayı dengeleyen ferah lilac salatası, yoğurtlu mısır salatası ve sweet chilli soslu iceberg salata.",
        price: 370,
        currency: "TL",
        img: "/assets/menu/makarna/snitz_curry_salad.webp",
      },
      {
        name: "Pesto Makarna",
        description:
          "Taptaze bir İtalyan rüzgarı! Fesleğenin ferahlatıcı aromasıyla hazırlanan kremsi pesto sosumuz, 300 gr tam kıvamında penne makarna ile buluştu. Öğününüzü bir lezzet şölenine çevirin.",
        price: 250,
        currency: "TL",
        img: "/assets/menu/makarna/pesto.webp",
      },
      {
        name: "SNitz Pesto",
        description:
          "Fesleğenin ferahlığı, çıtır tavuğun efsanevi dokusuyla buluştu! Taptaze pesto sosumuzla harmanlanmış 300 gr penne makarna ve tabağın yıldızı 100 gr çıpçıtır tavuk parçaları.",
        price: 320,
        currency: "TL",
        img: "/assets/menu/makarna/snitz_pesto.webp",
      },
      {
        name: "Snitz Pesto Mix Salad",
        description:
          "İtalyan esintisi, çıtır lezzet ve taptaze bir salata şöleni aynı tabakta! 300 gr pesto soslu makarna ve ona eşlik eden 100 gr çıpçıtır tavuk. Tabağı renklendiren lilac salatası, yoğurtlu mısır salatası ve sweet chilli soslu iceberg salata.",
        price: 390,
        currency: "TL",
        img: "/assets/menu/makarna/snitz_pesto_salad.webp",
      },

      {
        name: "Arrabbiata Makarna",
        description:
          "İtalyan mutfağının tatlı sert rüzgarı! Taze domates, sarımsak ve iştah açan hafif bir acının muazzam dengesiyle hazırlanan arrabbiata sosumuz, 300 gr tam kıvamında penne makarna ile buluştu. Acı sevenler için vazgeçilmez bir lezzet şöleni.",
        price: 250,
        currency: "TL",
        img: "",
      },
      {
        name: "SNitz Arrabbiata",
        description:
          "İtalyan ateşi, çıtır tavuğun efsanevi dokusuyla buluştu! Hafif acılı nefis arrabbiata sosumuzla harmanlanmış 300 gr penne makarna ve tabağın yıldızı 100 gr çıpçıtır tavuk parçaları. Acı ve çıtırlığın kusursuz uyumu.",
        price: 310,
        currency: "TL",
        img: "",
      },
      {
        name: "Snitz Arrabbiata Mix Salad",
        description:
          "İtalyan ateşi, çıtır lezzet ve taptaze bir salata şöleni aynı tabakta! 300 gr hafif acılı arrabbiata soslu makarna ve ona eşlik eden 100 gr çıpçıtır tavuk. Tabağı dengeleyip renklendiren lilac salatası, yoğurtlu mısır salatası ve sweet chilli soslu iceberg salata.",
        price: 380,
        currency: "TL",
        img: "",
      },
    ],
  },
  {
    categoryName: "Et Burger",
    items: [
      {
        name: "Cheese Burger",
        description:
          "Açlığını tek seferde nakavt edecek efsane! Sulu sulu pişmiş 90 gr nefis köfte, sıcacık cheddar ve kıtır soğanın muazzam uyumu. İçindeki ranch sos, fransız turşusu ve taze iceberg maruluyla tam doygunluk garantisi.",
        price: 370,
        currency: "TL",
        img: "/assets/menu/beef_burger/cheese_burger.webp",
      },
      {
        name: "Cheese Burger XL",
        description:
          "Büyük açlıklara büyük çözüm! Tam kıvamında pişmiş 150 gr nefis köfte, sıcacık cheddar ve kıtır soğanın muazzam uyumu. Ranch sos, fransız turşusu ve taze iceberg maruluyla efsanevi bir burger deneyimi.",
        price: 440,
        currency: "TL",
        img: "/assets/menu/beef_burger/cheese_burger_xl.webp",
      },
    ],
  },
  {
    categoryName: "SNitz Sandwich",
    items: [
      {
        name: "Rine Sandwich",
        description:
          "Sıradan sandviçleri unut, sahneye Snitz Sandwich çıkıyor! 100 gr nefis çıtır tavuğumuzu eriyen cheddar, kıtır soğan ve o çok sevilen trüflü mayonezimizle hazırladık. Fransız turşusu ve taptaze iceberg maruluyla kıvamını bulan efsane lezzet.",
        price: 350,
        currency: "TL",
        img: "/assets/menu/snitz_sandwich/rine.webp",
      },
    ],
  },
  {
    categoryName: "Grilled Sandwich",
    items: [
      {
        name: "Mantarlı Körili Tavuk Sandviç",
        description:
          "Açlığa meydan okuyan, lezzetiyle efsaneleşen dev bir ikili! Yumuşacık iki adet sandviç ekmeği arasında köri sosunun sıcaklığıyla harmanlanmış 150 gr (2x 75 gr) tavuk, nefis mantar ve akışkan krema. Üzerindeki kıtır soğanlarla lezzeti katlanan benzersiz bir şölen.",
        price: 360,
        currency: "TL",
        img: "/assets/menu/sandwich/mantar.webp",
      },
      {
        name: "Sweet Chilli Tavuk Sandwich",
        description:
          "Tatlı ve acının en doyurucu fırtınasına hazır olun! İki adet yumuşacık sandviç ekmeğinin arasına sığdırdığımız 150 gr (2x 75 gr) enfes tavuk, efsanevi sweet chili sosumuzla harmanlandı. Taptaze iceberg marul ve lezzeti katlayan kıtır soğanla taçlandırılan çifte lezzet.",
        price: 360,
        currency: "TL",
        img: "/assets/menu/sandwich/sweet.webp",
      },
      {
        name: "Köz Biberli Sandwich",
        description:
          "Közlenmiş biberin o nefis isli aroması, tavukla buluşuyor! İki adet yumuşacık sandviç ekmeği arasına sığdırdığımız 150 gr (2x 75 gr) sulu tavuk, taptaze közlenmiş kırmızı biberin enfes tadıyla harmanlanıyor. Taptaze iceberg marul ve kıtır soğanla tamamlanan, her lokmada damak çatlatan efsane bir tat.",
        price: 360,
        currency: "TL",
        img: "/assets/menu/sandwich/",
      },
      {
        name: "Baharatlı Tereyağlı Sandwich",
        description:
          "Tereyağının sıcaklığı ve özel baharatların büyüleyici uyumu! İki adet yumuşacık sandviç ekmeğinin arasına sığdırdığımız 150 gr (2x 75 gr) enfes tavuk, gizli baharat karışımımızla eritilmiş nefis tereyağı ile harmanlandı. Iceberg marul ve kıtır soğanın dokunuşuyla zenginleşen bu sandviç, lezzet sınırlarını zorluyor.",
        price: 360,
        currency: "TL",
        img: "/assets/menu/sandwich/",
      },
    ],
  },
  {
    categoryName: "Wrap",
    items: [
      {
        name: "Fiesta Wrap",
        description:
          "Damakta lezzet festivali başlatmaya hazır mısın? Lavaşın içine sarılmış leziz 100 gr tavuk parçaları, tatlı-acı dengesini kuran sweet chilli sos ve jalapeno ateşi! Kıtır soğan ve taptaze iceberg marulun ferahlığıyla enfes bir dürüm deneyimi.",
        price: 280,
        currency: "TL",
        img: "/assets/menu/wrap/fiesta.webp",
      },
    ],
  },
  {
    categoryName: "Çıtır Tavuklar",
    items: [
      {
        name: "Çıtır Tavuk 4'lü",
        description:
          "Sosa batırmalık efsanevi lezzet şöleni! Kusursuz bir çıtırlıkla kaplanmış 4 adet (160 gr) taptaze tavuk parçası. Kendi seçeceğiniz özel sosunuzla bütünleştiğinde her lokmada ayrı bir keyif veren bu çıtırları elinizden bırakamayacaksınız.",
        price: 299,
        currency: "TL",
        img: "/assets/menu/citir_tavuk/4.webp",
      },
      {
        name: "Çıtır Tavuk 6'lı",
        description:
          "Sosa batırmalık efsanevi lezzet şöleni! Kusursuz bir çıtırlıkla kaplanmış 6 adet (240 gr) taptaze tavuk parçası. Özel sosunuzla bütünleştiğinde lezzeti zirveye taşıyan çıtır atıştırmalık.",
        price: 429,
        currency: "TL",
        img: "/assets/menu/citir_tavuk/6.webp",
      },
      {
        name: "Çıtır Tavuk 8'li",
        description:
          "Büyük ziyafetler için dev çıtırlık! Tam 8 adet (320 gr) taptaze ve kusursuz çıtırlıkta tavuk parçası. Seçtiğiniz soslarla lezzetine lezzet katacağınız doyurucu bir tabak.",
        price: 489,
        currency: "TL",
        img: "/assets/menu/citir_tavuk/8.webp",
      },
      {
        name: "Nitz Box",
        description:
          "Açlık krizlerine renkli ve doyurucu bir son! Dışı çıtır çıtır, içi sulu 120 gr tavuğumuza sıcacık patates kızartmaları eşlik ediyor. İşin sırrı ise enfes yancılarda: lilac salatası, yoğurtlu mısır salatası ve sweet chilli soslu iceberg salatası! Tek kutuda koca bir ziyafet.",
        price: 469,
        currency: "TL",
        img: "/assets/menu/citir_tavuk/nitz_box.webp",
      },
      {
        name: "Snitz Chips",
        description:
          "Bazen sadece iyi bir tavuk ve çıtır patates tüm dertleri çözer! İçi sulu sulu, dışı efsane çıtır 120 gr tavuğumuz ve yanında sıcacık patates kızartması. Klasikten şaşmayanlar için günün en doyurucu tabağı.",
        price: 399,
        currency: "TL",
        img: "/assets/menu/citir_tavuk/chips.webp",
      },
    ],
  },
  {
    categoryName: "Çılgın Kanatlar",
    items: [
      {
        name: "Çıtır Kanat, But 4'lü",
        description:
          "Atıştırmalık krizlerine veya ana öğünlere en çıtır çözüm! 2 nefis kanat ve 2 sulu but (200 gr) ile o çok sevdiğin çıtır tavuk deneyimini zirveye taşıyoruz. Sıcacık ve çıtır çıtır efsane lezzet.",
        price: 349,
        currency: "TL",
        img: "/assets/menu/cilgin_kanat/4.webp",
      },
      {
        name: "Çıtır Kanat, But 6'lı",
        description:
          "Doyasıya yemek isteyenlere! 3 nefis kanat ve 3 sulu but (300 gr) ile masanızı şenlendiriyoruz. Özel kaplamasıyla nar gibi kızarmış, içi sulu sulu tavuk ziyafeti.",
        price: 439,
        currency: "TL",
        img: "/assets/menu/cilgin_kanat/6.webp",
      },
      {
        name: "Çıtır Kanat, But 8'li",
        description:
          "Tavuk krizini tek seferde çözen dev paket! 4 nefis kanat ve 4 sulu but (400 gr) ile tavuğun en çıtır, en lezzetli halini masanıza getiriyoruz.",
        price: 499,
        currency: "TL",
        img: "/assets/menu/cilgin_kanat/8.webp",
      },
    ],
  },
  {
    categoryName: "Krokets",
    items: [
      {
        name: "Soğan Halkası 6'lı",
        description:
          "Yemeğinin yanına en çıtır eşlikçi! Dışı çıtır çıtır, içi yumuşacık tam 6 adet nefis soğan halkası. Sevdiğin soslara bandıra bandıra yemek için mükemmel bir tercih.",
        price: 79,
        currency: "TL",
        img: "/assets/menu/korket/onion.webp",
      },
      {
        name: "Patates Kroket 6'lı",
        description:
          "Dışı çıtır çıtır, içi yumuşacık patates dolgusu! İştah kabartan, tam kıvamında kızarmış 6 adet nefis patates çubuğu. Yemeğin yanına efsane bir eşlikçi.",
        price: 109,
        currency: "TL",
        img: "/assets/menu/korket/potato_kroked.webp",
      },
      {
        name: "Hexa Pizza Kroket 6'lı",
        description:
          "Pizzanın en çıtır ve en üçgen hali! Dışı efsane çıtır, içi sıcacık pizza lezzetiyle dolu 6 adet kroket seni bekliyor.",
        price: 119,
        currency: "TL",
        img: "/assets/menu/korket/hexa.webp",
      },
      {
        name: "Mozzarella Kroket 6'lı",
        description:
          "İçi akışkan, dışı efsane çıtır! Baharatlı özel kaplamasıyla nar gibi kızarmış, tam 6 adet sıcacık mozzarella çubuğu. Isırdığınız an uzayan o nefis peynir lezzeti.",
        price: 139,
        currency: "TL",
        img: "/assets/menu/korket/mozarella.webp",
      },
    ],
  },
  {
    categoryName: "French Fries",
    items: [
      {
        name: "Patates Kızartması (Sade)",
        description:
          "Sadelikten şaşmayanlar için! Baharat eklemeden, tam kıvamında kızarttığımız doyurucu ve çıtır çıtır patates. Ana yemeğinin yanına efsane bir eşlikçi.",
        price: 150,
        currency: "TL",
        img: "/assets/menu/fries/sade.webp",
      },
      {
        name: "Patates Kızartması (Baharatlı)",
        description:
          "Patates kızartmasını bir üst seviyeye taşıdık! Çıtır çıtır patateslerimizi, damakta iz bırakan efsane kajun baharatıyla harmanladık. Menüye eklenecek harika bir çıtır yancı.",
        price: 160,
        currency: "TL",
        img: "/assets/menu/fries/bahartli.webp",
      },
      {
        name: "Patates Kızartması (Soslu)",
        description:
          "Klasik patates kızartmasını kendi tarzına göre şekillendir! Tam kıvamında kızarttığımız çıtır patateslerimizi, senin seçeceğin favori sosunla buluşturuyoruz. Sosunu seç, lezzeti katla!",
        price: 200,
        currency: "TL",
        img: "/assets/menu/fries/patates_soslu.webp",
      },
    ],
  },
  {
    categoryName: "İçecekler",
    items: [
      {
        name: "Pepsi (33 Cl)",
        description: "",
        price: 70,
        currency: "TL",
        img: "/assets/menu/icecekler/pepsi.webp",
      },
      {
        name: "Pepsi Zero Sugar (33 Cl)",
        description: "",
        price: 70,
        currency: "TL",
        img: "/assets/menu/icecekler/cola_zero.webp",
      },
      {
        name: "Coca Cola (33 Cl)",
        description: "",
        price: 70,
        currency: "TL",
        img: "/assets/menu/icecekler/cocacola.webp",
      },
      {
        name: "7 Up (33 Cl)",
        description: "",
        price: 70,
        currency: "TL",
        img: "/assets/menu/icecekler/7up.webp",
      },
      {
        name: "Yedigün (33 Cl)",
        description: "",
        price: 70,
        currency: "TL",
        img: "/assets/menu/icecekler/yedigun.webp",
      },
      {
        name: "Cola Turka (33 Cl)",
        description: "",
        price: 70,
        currency: "TL",
        img: "/assets/menu/icecekler/turka_cola.webp",
      },
      {
        name: "Uludağ Gazoz (33 Cl)",
        description: "",
        price: 70,
        currency: "TL",
        img: "/assets/menu/icecekler/gazoz.webp",
      },
      {
        name: "Lipton Ice Tea Mango ve Egzotik Karışık Meyve (33 Cl)",
        description: "",
        price: 70,
        currency: "TL",
        img: "/assets/menu/icecekler/lipton.webp",
      },
      {
        name: "Lipton Ice Tea Şeftali (33 Cl)",
        description: "",
        price: 70,
        currency: "TL",
        img: "/assets/menu/icecekler/lipton1.webp",
      },
      {
        name: "Pepsi Şişe (25 Cl)",
        description: "",
        price: 50,
        currency: "TL",
        img: "/assets/menu/icecekler/pepsi_sise.webp",
      },
      {
        name: "Yedigün Şişe (25 Cl)",
        description: "",
        price: 50,
        currency: "TL",
        img: "/assets/menu/icecekler/yedigun.webp",
      },
      {
        name: "Fruko Şişe (25 Cl)",
        description: "",
        price: 50,
        currency: "TL",
        img: "/assets/menu/icecekler/fruko.webp",
      },
      {
        name: "Pepsi Zero Sugar Şişe (25 Cl)",
        description: "",
        price: 50,
        currency: "TL",
        img: "/assets/menu/icecekler/zero_sise.webp",
      },
      {
        name: "Tam Yağlı Ayran (27.5 Cl)",
        description: "",
        price: 0,
        currency: "TL",
        img: "/assets/menu/icecekler/ayran1.webp",
      },
      {
        name: "Yarım Yağlı Ayran (27.5 Cl)",
        description: "",
        price: 0,
        currency: "TL",
        img: "/assets/menu/icecekler/ayran.webp",
      },
      {
        name: "Acılı Ayran (27 Cl)",
        description: "",
        price: 70,
        currency: "TL",
        img: "/assets/menu/icecekler/acili_ayran.webp",
      },
      {
        name: "Ekşi Ayran (27 Cl)",
        description: "",
        price: 70,
        currency: "TL",
        img: "/assets/menu/icecekler/eksi_ayran.webp",
      },
      {
        name: "Naneli Ayran (27 Cl)",
        description: "",
        price: 70,
        currency: "TL",
        img: "/assets/menu/icecekler/naneli_ayran.webp",
      },
      {
        name: "Capri Sun Safari Fruits Meyve Suyu (20 Cl)",
        description: "",
        price: 50,
        currency: "TL",
        img: "/assets/menu/icecekler/capri2.webp",
      },
      {
        name: "Capri Sun Mystic Dragon Meyve Suyu (20 Cl)",
        description: "",
        price: 50,
        currency: "TL",
        img: "/assets/menu/icecekler/capri.webp",
      },
      {
        name: "Doğal Maden Suyu (20 Cl)",
        description: "",
        price: 30,
        currency: "TL",
        img: "/assets/menu/icecekler/sadesoda.webp",
      },
      {
        name: "Su (50 Cl)",
        description: "",
        price: 20,
        currency: "TL",
        img: "/assets/menu/icecekler/su.webp",
      },
    ],
  },
];
