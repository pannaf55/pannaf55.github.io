// ============================================================
// Κατάλογος Προϊόντων - Γεύσεις Ναυπάκτου
// Product Catalog - Gefseis Nafpaktou
// ============================================================
// Κάθε προϊόν έχει διπλή γλώσσα (el/en). Πρόσθεσε νέα προϊόντα
// ακολουθώντας την ίδια δομή.
// ============================================================

const PRODUCTS = [
  {
    sku: "NF-001",
    image: "images/products/meli-fwkidas.jpg",
    price: 14.00,
    weight: { el: "450 γρ.", en: "450 g" },
    category: { el: "Μέλι & Γλυκαντικά", en: "Honey & Sweeteners" },
    categoryKey: "honey",
    name: { el: "Μέλι Φωκίδας", en: "Fir Honey of Fokida" },
    description: {
      el: "Αγνό μέλι ελάτης από την περιοχή του Τειχίου. Αρωματικό, με χαρακτηριστική σκούρα απόχρωση και πλούσια γεύση που θυμίζει το βουνό.",
      en: "Pure fir honey from the Tihio region. Aromatic, with a characteristic dark hue and rich mountain flavor."
    },
    ingredients: {
      el: "100% μέλι ελάτης από το Τειχίου",
      en: "100% fir honey from Tihio"
    },
    shelfLife: { el: "24 μήνες από την παραγωγή", en: "24 months from production" },
    inStock: true,
    badge: { el: "Δημοφιλές", en: "Popular" }
  },
  {
    sku: "NF-002",
    image: "images/products/thimari.jpg",
    price: 2.50,
    weight: { el: "50 γρ.", en: "50 g" },
    category: { el: "Βότανα & Ροφήματα", en: "Herbs & Teas" },
    categoryKey: "herbs",
    name: { el: "Θυμάρι Φωκίδας", en: "Thyme of Fokida" },
    description: {
      el: "100% αποξηραμένο θυμάρι, συλλεγμένο με το χέρι από τα βουνά της Φωκίδας. Ιδανικό για ψητά, μαρινάδες και ροφήματα.",
      en: "100% hand-picked dried thyme from the mountains of Fokida. Ideal for grilled meats, marinades and infusions."
    },
    ingredients: {
      el: "100% αποξηραμένο θυμάρι",
      en: "100% dried Greek mountain thyme"
    },
    shelfLife: { el: "18 μήνες", en: "18 months" },
    inStock: true
  },
  {
    sku: "NF-003",
    image: "images/products/tsipouro.jpg",
    price: 10.00,
    weight: { el: "700 ml", en: "700 ml" },
    category: { el: "Παραδοσιακά Ποτά", en: "Traditional Spirits" },
    categoryKey: "spirits",
    name: { el: "Τσίπουρο Φωκίδας", en: "Tsipouro of Fokida" },
    description: {
      el: "Παραδοσιακό απόσταγμα στεμφύλων 40% vol. Διπλή απόσταξη σε χάλκινο καζάνι. Πίνεται καλά κρύο με μεζέ.",
      en: "Traditional pomace distillate 40% vol. Double-distilled in a copper still. Served well chilled with meze."
    },
    ingredients: { el: "Απόσταγμα στεμφύλων", en: "Pomace distillate" },
    shelfLife: { el: "Απεριόριστη (σφραγισμένο)", en: "Indefinite (sealed)" },
    certifications: { el: "Παραδοσιακό προϊόν", en: "Traditional product" },
    allergens: { el: "Αλκοόλ 40% vol — όχι σε ανηλίκους / εγκύους", en: "Alcohol 40% vol — not for minors / pregnant women" },
    inStock: true,
    badge: { el: "Παραδοσιακό", en: "Traditional" }
  },
  {
    sku: "NF-004",
    image: "images/products/xamomili.jpg",
    price: 3.00,
    weight: { el: "40 γρ.", en: "40 g" },
    category: { el: "Βότανα & Ροφήματα", en: "Herbs & Teas" },
    categoryKey: "herbs",
    name: { el: "Χαμομήλι Φωκίδας", en: "Chamomile of Fokida" },
    description: {
      el: "100% αποξηραμένο χαμομήλι, συλλεγμένο με το χέρι. Καταπραϋντικό αφέψημα για ξεκούραστο ύπνο και χαλάρωση.",
      en: "100% hand-picked dried chamomile. A soothing infusion for restful sleep and relaxation."
    },
    ingredients: { el: "100% αποξηραμένο χαμομήλι", en: "100% dried chamomile flowers" },
    shelfLife: { el: "18 μήνες", en: "18 months" },
    certifications: { el: "Παραδοσιακή Συνταγή", en: "Traditional Recipe" },
    inStock: true
  },
  {
    sku: "NF-005",
    image: "images/products/loukoumia-mpoukies.jpg",
    price: 10.00,
    weight: { el: "800 γρ.", en: "800 g" },
    category: { el: "Ζαχαρώδη", en: "Sugary" },
    categoryKey: "sugary",
    name: { el: "Λουκούμια Κούλου - Μπουκιές", en: "Koulou Loukoumi - Bites" },
    description: {
      el: "Παραδοσιακά λουκούμια Πατρών σε μικρές μπουκιές με ποικιλία αρωμάτων. Από την ιστορική εταιρεία ΚΟΥΛΟΥ.",
      en: "Traditional Patras loukoumi in small bites with a variety of flavors. By the historic ΚΟΥΛΟΥ company."
    },
    ingredients: {
      el: "Ζάχαρη, άμυλο, αρώματα (ανά γεύση) – παραδοσιακή συνταγή λουκουμιού",
      en: "Sugar, starch, flavorings – traditional Turkish delight recipe"
    },
    origin: { el: "ΚΟΥΛΟΥ ΠΑΤΡΑ", en: "KOULOU PATRA" },
    inStock: true
  },
  {
    sku: "NF-006",
    image: "images/products/loukoumia-amygdalou.jpg",
    price: 10.00,
    weight: { el: "800 γρ.", en: "800 g" },
    category: { el: "Ζαχαρώδη", en: "Sugary" },
    categoryKey: "sugary",
    name: { el: "Λουκούμια Κούλου - Αμυγδάλου", en: "Koulou Loukoumi - Almond" },
    description: {
      el: "Παραδοσιακά λουκούμια με ολόκληρα αμύγδαλα. Πλούσια γεύση, τραγανή υφή, παραδοσιακή συνταγή.",
      en: "Traditional loukoumi with whole almonds. Rich flavor, crunchy texture, traditional recipe."
    },
    ingredients: {
      el: "Ζάχαρη, άμυλο, αμύγδαλα, αρώματα",
      en: "Sugar, starch, almonds, flavorings"
    },
    origin: { el: "ΚΟΥΛΟΥ ΠΑΤΡΑ", en: "KOULOU PATRA" },
    allergens: { el: "Αμύγδαλα (ξηροί καρποί)", en: "Almonds (tree nuts)" },
    inStock: true
  },
  {
    sku: "NF-007",
    image: "images/products/loukoumia-sketo.jpg",
    price: 10.00,
    weight: { el: "800 γρ.", en: "800 g" },
    category: { el: "Ζαχαρώδη", en: "Sugary" },
    categoryKey: "sugary",
    name: { el: "Λουκούμια Κούλου - Σκέτο", en: "Koulou Loukoumi - Plain" },
    description: {
      el: "Σκέτο λουκούμι παραδοσιακής συνταγής. Απαλή γεύση τριαντάφυλλου, λευκή χιονάτη όψη.",
      en: "Plain loukoumi, traditional recipe. Delicate rose flavor, snowy-white appearance."
    },
    ingredients: {
      el: "Ζάχαρη, άμυλο, αρώματα",
      en: "Sugar, starch, flavorings"
    },
    origin: { el: "ΚΟΥΛΟΥ ΠΑΤΡΑ", en: "KOULOU PATRA" },
    inStock: true
  },
  {
    sku: "NF-008",
    image: "images/products/tsai-vounou.jpg",
    price: 5.20,
    weight: { el: "30 γρ.", en: "30 g" },
    category: { el: "Βότανα & Ροφήματα", en: "Herbs & Teas" },
    categoryKey: "herbs",
    name: { el: "Ορεινό Τσάι του Βουνού", en: "Greek Mountain Tea (Sideritis)" },
    description: {
      el: "Άγρια συλλογή από το Όρος Βαράσοβα. Βραστό 5-7 λεπτά. Με μέλι ή λεμόνι. Παραδοσιακά για κρυολόγημα.",
      en: "Wild-harvested on Mt. Varasova. Boil 5-7 minutes. With honey or lemon. Traditional cold remedy."
    },
    origin: { el: "Συλλογή σε Όρος Βαράσοβα", en: "Wild-harvested on Mt. Varasova" },
    shelfLife: { el: "24 μήνες", en: "24 months" },
    certifications: { el: "Άγρια συλλογή", en: "Wild-harvested" },
    inStock: true,
    badge: { el: "Άγριο", en: "Wild" }
  },
  {
    sku: "NF-009",
    image: "images/products/trahanas.jpg",
    price: 6.50,
    weight: { el: "500 γρ.", en: "500 g" },
    category: { el: "Ζυμαρικά Παραδοσιακά", en: "Traditional Pasta" },
    categoryKey: "pasta",
    name: { el: "Τραχανάς Ξινός", en: "Sour Trachanas" },
    description: {
      el: "Παραδοσιακός τραχανάς από πληγούρι και ξινό πρόβειο γιαούρτι. Χειμωνιάτικη σούπα με ντομάτα και φέτα, ή με βούτυρο και κοτόπουλο.",
      en: "Traditional trachanas made from cracked wheat and sour sheep yogurt. Winter soup with tomato and feta, or with butter and chicken."
    },
    ingredients: {
      el: "Πληγούρι, ξινό πρόβειο γιαούρτι, αλάτι",
      en: "Cracked wheat, sour sheep yogurt, salt"
    },
    origin: { el: "Παραδοσιακή Παραγωγή «Ορεινό»", en: "Traditional Production 'Oreino'" },
    shelfLife: { el: "12 μήνες", en: "12 months" },
    certifications: { el: "Παραδοσιακή Συνταγή", en: "Traditional Recipe" },
    allergens: { el: "Γλουτένη, γαλακτοκομικά", en: "Gluten, dairy" },
    inStock: true
  },
  {
    sku: "NF-010",
    image: "images/products/rigani.jpg",
    price: 2.50,
    weight: { el: "60 γρ.", en: "60 g" },
    category: { el: "Βότανα & Ροφήματα", en: "Herbs & Teas" },
    categoryKey: "herbs",
    name: { el: "Ρίγανη Άγρια Βουνού", en: "Wild Mountain Oregano" },
    description: {
      el: "100% αποξηραμένη ρίγανη από συλλογή σε υψόμετρο 800μ. στο Όρος Αράκυνθος. Σε σαλάτες, ψητά, τυριά, χωριάτικη.",
      en: "100% dried oregano, wild-harvested at 800m altitude on Mt. Arakynthos. On salads, grilled meats, cheeses, village salad."
    },
    ingredients: { el: "100% αποξηραμένη ρίγανη", en: "100% dried oregano" },
    origin: { el: "Όρος Αράκυνθος, 800μ.", en: "Mt. Arakynthos, 800m" },
    shelfLife: { el: "24 μήνες", en: "24 months" },
    certifications: { el: "Άγρια συλλογή", en: "Wild-harvested" },
    inStock: true
  },
  {
    sku: "NF-011",
    image: "images/products/krasi-roze.jpg",
    price: 10.00,
    weight: { el: "750 ml", en: "750 ml" },
    category: { el: "Παραδοσιακά Ποτά", en: "Traditional Spirits" },
    categoryKey: "spirits",
    name: { el: "Κρασί Ροζέ Παραδοσιακό", en: "Traditional Rosé Wine" },
    description: {
      el: "Ξηρό ροζέ από Ροδίτη 70% και Σαββατιανό 30%. Συνοδεύει ψάρι, σαλάτες, τυριά. Σερβίρεται καλά κρύο.",
      en: "Dry rosé from Roditis 70% and Savatiano 30%. Pairs with fish, salads, cheeses. Served well chilled."
    },
    ingredients: { el: "Ροδίτης 70%, Σαββατιανό 30%, ξηρό", en: "Roditis 70%, Savatiano 30%, dry" },
    origin: { el: "Οινοποιείο Πλατανίτη", en: "Platanitis Winery" },
    shelfLife: { el: "3 χρόνια", en: "3 years" },
    certifications: { el: "12% vol", en: "12% vol" },
    allergens: { el: "Σουλφίτες — όχι σε ανηλίκους", en: "Sulfites — not for minors" },
    inStock: true
  },
  {
    sku: "NF-012",
    image: "images/products/kalathi-doro.jpg",
    price: 39.00,
    weight: { el: "~ 2 κιλά", en: "~ 2 kg" },
    category: { el: "Πακέτα Δώρων", en: "Gift Packages" },
    categoryKey: "gifts",
    name: { el: "Καλάθι Ναυπακτίας (Σύνθεση Δώρου)", en: "Nafpaktia Gift Basket" },
    description: {
      el: "Ξύλινο καλάθι με: μέλι ελάτης + ελαιόλαδο + τσίπουρο + γλυκό κουταλιού + ρίγανη. Ιδανικό για μπομπονιέρες, εταιρικά δώρα, τουρίστες.",
      en: "Wooden basket with: fir honey + olive oil + tsipouro + spoon sweet + oregano. Ideal for wedding favors, corporate gifts, tourists."
    },
    ingredients: { el: "Δείτε κάθε επιμέρους προϊόν", en: "See individual products" },
    origin: { el: "Συσκευασία στο εργαστήριό μας", en: "Packed in our workshop" },
    certifications: { el: "Συσκευασία δώρου", en: "Gift packaging" },
    inStock: true,
    badge: { el: "Κατόπιν παραγγελίας", en: "Made to order" }
  }
];

// ============================================================
// Στοιχεία επιχείρησης / Business info
// ============================================================
const BUSINESS = {
  name: { el: "Γεύσεις Ναυπάκτου", en: "Gefseis Nafpaktou" },
  tagline: {
    el: "Παραδοσιακά προϊόντα από την καρδιά της Αιτωλοακαρνανίας",
    en: "Traditional products from the heart of Aetolia-Acarnania"
  },
  email: "info@nafpaktos.gr",
  emailB2B: "b2b@nafpaktos.gr",
  emailTours: "tours@nafpaktos.gr",
  phone: "+30 26340 00000",
  address: {
    el: "Παραλιακή Ναυπάκτου, 30300 Ναύπακτος, Αιτωλοακαρνανία",
    en: "Nafpaktos Seafront, 30300 Nafpaktos, Aetolia-Acarnania, Greece"
  },
  hours: {
    el: "Δευ-Σαβ 09:00-21:00 · Κυρ 10:00-15:00 (μόνο καλοκαίρι)",
    en: "Mon-Sat 09:00-21:00 · Sun 10:00-15:00 (summer only)"
  },
  social: {
    facebook: "https://facebook.com/gefseisnafpaktou",
    instagram: "https://instagram.com/gefseisnafpaktou"
  }
};

// ============================================================
// Έξοδα αποστολής / Shipping rates
// ============================================================
const SHIPPING_RATES = [
  { key: "GR_MAINLAND", under40: 4.90, over40: 0,    days: "2-4" },
  { key: "GR_ISLANDS",  under40: 6.90, over40: 2.00, days: "3-6" },
  { key: "CY",          under40: 14.50, over40: 10.00, days: "4-7" },
  { key: "EU_CORE",     under40: 18.00, over40: 12.00, days: "5-8" },
  { key: "EU_OTHER",    under40: 22.00, over40: 16.00, days: "5-10" },
  { key: "UK",          under40: 28.00, over40: 22.00, days: "7-12" },
  { key: "US_CA",       under40: 45.00, over40: 35.00, days: "7-15" },
  { key: "AU",          under40: 55.00, over40: 45.00, days: "10-18" }
];

const SHIPPING_LABELS = {
  GR_MAINLAND: { el: "Ελλάδα (ηπειρωτική)",        en: "Greece (mainland)" },
  GR_ISLANDS:  { el: "Ελλάδα (νησιά)",             en: "Greece (islands)" },
  CY:          { el: "Κύπρος",                      en: "Cyprus" },
  EU_CORE:     { el: "Γερμανία/Γαλλία/Ολλανδία",   en: "Germany/France/Netherlands" },
  EU_OTHER:    { el: "Άλλες χώρες ΕΕ",             en: "Other EU countries" },
  UK:          { el: "Ηνωμένο Βασίλειο",           en: "United Kingdom" },
  US_CA:       { el: "ΗΠΑ / Καναδάς",              en: "USA / Canada" },
  AU:          { el: "Αυστραλία",                   en: "Australia" }
};
