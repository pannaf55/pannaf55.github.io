// ============================================================
// Γεύσεις Ναυπάκτου - Κύρια λογική εφαρμογής
// ============================================================

// ----- Μεταφράσεις UI -----
const I18N = {
  el: {
    nav_home: "Αρχική",
    nav_products: "Προϊόντα",
    nav_about: "Σχετικά",
    nav_contact: "Επικοινωνία",
    hero_cta: "Δες τα προϊόντα",
    hero_cta_about: "Η ιστορία μας",
    featured_title: "Επιλεγμένα Προϊόντα",
    featured_sub: "Παραδοσιακές γεύσεις και αρώματα της Ναυπακτίας, με μεράκι.",
    features_title: "Γιατί Γεύσεις Ναυπάκτου;",
    feature_local_title: "100% Τοπικά",
    feature_local_text: "Από μικρούς παραγωγούς της Ναυπακτίας και της Αιτωλοακαρνανίας.",
    feature_traditional_title: "Παραδοσιακές Συνταγές",
    feature_traditional_text: "Συνταγές με γενιές ιστορίας, χωρίς συντηρητικά.",
    feature_shipping_title: "Δωρεάν Αποστολή >40€",
    feature_shipping_text: "Σε όλη την Ελλάδα, σε 2-4 εργάσιμες ημέρες.",
    feature_quality_title: "Πιστοποιημένη Ποιότητα",
    feature_quality_text: "ΠΟΠ, ΠΓΕ και BIO πιστοποιήσεις σε πολλά προϊόντα.",
    all_products: "Όλα τα προϊόντα",
    cart_title: "Καλάθι",
    cart_empty: "Το καλάθι σου είναι άδειο",
    cart_empty_sub: "Πρόσθεσε προϊόντα για να ξεκινήσεις",
    cart_continue: "Συνέχισε αγορές",
    cart_subtotal: "Υποσύνολο",
    cart_shipping: "Μεταφορικά",
    cart_total: "Σύνολο",
    cart_checkout: "Ολοκλήρωση παραγγελίας",
    cart_clear: "Άδειασμα",
    add_to_cart: "Προσθήκη στο καλάθι",
    added_to_cart: "Προστέθηκε στο καλάθι",
    removed: "Αφαιρέθηκε",
    cleared: "Το καλάθι άδειασε",
    out_of_stock: "Εξαντλημένο",
    filter_all: "Όλα",
    filter_honey: "Μέλι",
    filter_herbs: "Βότανα",
    filter_spirits: "Ποτά",
    filter_sugary: "Γλυκά",
    filter_pasta: "Ζυμαρικά",
    filter_gifts: "Δώρα",
    checkout_title: "Ολοκλήρωση Παραγγελίας",
    customer_info: "Στοιχεία Πελάτη",
    shipping_info: "Διεύθυνση Αποστολής",
    payment_info: "Πληρωμή",
    first_name: "Όνομα",
    last_name: "Επώνυμο",
    email: "Email",
    phone: "Τηλέφωνο",
    address: "Διεύθυνση",
    city: "Πόλη",
    postal_code: "Τ.Κ.",
    country: "Χώρα/Προορισμός",
    notes: "Σημειώσεις παραγγελίας",
    notes_ph: "Π.χ. \"Δώρο – μη συμπεριλάβετε τιμολόγιο\"",
    payment_method: "Τρόπος πληρωμής",
    pay_card: "Κάρτα (Visa/Mastercard/Maestro)",
    pay_paypal: "PayPal",
    pay_cod: "Αντικαταβολή (μόνο Ελλάδα, +2€)",
    pay_bank: "Τραπεζική κατάθεση",
    place_order: "Καταχώρηση παραγγελίας",
    order_success: "Η παραγγελία σας καταχωρήθηκε!",
    order_success_text: "Θα λάβετε επιβεβαίωση στο email σας.",
    contact_title: "Επικοινωνία",
    contact_sub: "Είμαστε εδώ για ερωτήσεις, παραγγελίες χονδρικής ή απλά μια καλημέρα.",
    contact_name: "Ονοματεπώνυμο",
    contact_subject: "Θέμα",
    contact_message: "Μήνυμα",
    contact_send: "Αποστολή μηνύματος",
    contact_sent: "Το μήνυμά σας στάλθηκε. Θα απαντήσουμε σύντομα.",
    contact_info: "Στοιχεία Επικοινωνίας",
    contact_address: "Διεύθυνση",
    contact_phone: "Τηλέφωνο",
    contact_email: "Email",
    contact_b2b: "Χονδρική",
    contact_hours: "Ώρες λειτουργίας",
    about_title: "Η Ιστορία μας",
    about_p1: "Στις «Γεύσεις Ναυπάκτου» επιλέγουμε με προσοχή προϊόντα από μικρούς παραγωγούς της Ναυπακτίας, της Φωκίδας και της ευρύτερης Αιτωλοακαρνανίας. Μέλι από τα έλατα του Αρακύνθου, ρίγανη και σιδερίτη από τη Βαράσοβα, τσίπουρο από παραδοσιακά καζάνια και ροζέ κρασί από το οινοποιείο Πλατανίτη.",
    about_p2: "Κάθε προϊόν στο κατάστημά μας έχει πίσω του ένα όνομα, ένα χωριό και μια ιστορία. Δουλεύουμε μόνο με παραγωγούς που γνωρίζουμε προσωπικά και που μοιραζόμαστε την ίδια αγάπη για την παράδοση, τη γη και τη γεύση.",
    about_q: "«Η Ναύπακτος δεν είναι μόνο το κάστρο και η θάλασσα. Είναι κάθε σταγόνα μέλι από τα βουνά της, κάθε φύλλο ρίγανης από το Όρος Αράκυνθος.»",
    about_visit: "Επισκέψεις σε παραγωγούς",
    about_visit_text: "Διοργανώνουμε αγρο-τουριστικές επισκέψεις σε μελισσοκομεία, ελαιουργεία και αποστακτήρια κατόπιν παραγγελίας. Επικοινωνήστε στο tours@nafpaktos.gr.",
    faq_title: "Συχνές Ερωτήσεις",
    currency: "€",
    free: "Δωρεάν",
    ingredients: "Συστατικά",
    origin: "Προέλευση",
    shelf_life: "Διάρκεια",
    cert: "Πιστοποίηση",
    allergens: "Επισημάνσεις",
    qty: "Τεμάχια",
    req: "*",
    select_dest: "-- Επιλέξτε προορισμό --",
    cod_extra: "Αντικαταβολή +2€ (μόνο Ελλάδα)",
    eta: "Παράδοση"
  },
  en: {
    nav_home: "Home",
    nav_products: "Products",
    nav_about: "About",
    nav_contact: "Contact",
    hero_cta: "Browse products",
    hero_cta_about: "Our story",
    featured_title: "Featured Products",
    featured_sub: "Traditional flavors and aromas of Nafpaktia, made with passion.",
    features_title: "Why Gefseis Nafpaktou?",
    feature_local_title: "100% Local",
    feature_local_text: "From small producers of Nafpaktia and Aetolia-Acarnania.",
    feature_traditional_title: "Traditional Recipes",
    feature_traditional_text: "Recipes with generations of history, free of preservatives.",
    feature_shipping_title: "Free Shipping >€40",
    feature_shipping_text: "Across Greece, in 2-4 business days.",
    feature_quality_title: "Certified Quality",
    feature_quality_text: "PDO, PGI and Organic (BIO) certifications on many products.",
    all_products: "All products",
    cart_title: "Cart",
    cart_empty: "Your cart is empty",
    cart_empty_sub: "Add some products to get started",
    cart_continue: "Continue shopping",
    cart_subtotal: "Subtotal",
    cart_shipping: "Shipping",
    cart_total: "Total",
    cart_checkout: "Checkout",
    cart_clear: "Clear cart",
    add_to_cart: "Add to cart",
    added_to_cart: "Added to cart",
    removed: "Removed",
    cleared: "Cart cleared",
    out_of_stock: "Out of stock",
    filter_all: "All",
    filter_honey: "Honey",
    filter_herbs: "Herbs",
    filter_spirits: "Spirits",
    filter_sugary: "Sweets",
    filter_pasta: "Pasta",
    filter_gifts: "Gifts",
    checkout_title: "Checkout",
    customer_info: "Customer Information",
    shipping_info: "Shipping Address",
    payment_info: "Payment",
    first_name: "First name",
    last_name: "Last name",
    email: "Email",
    phone: "Phone",
    address: "Address",
    city: "City",
    postal_code: "Postal code",
    country: "Country / Destination",
    notes: "Order notes",
    notes_ph: "E.g. \"Gift – do not include invoice\"",
    payment_method: "Payment method",
    pay_card: "Card (Visa/Mastercard/Maestro)",
    pay_paypal: "PayPal",
    pay_cod: "Cash on delivery (Greece only, +€2)",
    pay_bank: "Bank transfer",
    place_order: "Place order",
    order_success: "Your order has been placed!",
    order_success_text: "You will receive a confirmation by email.",
    contact_title: "Contact us",
    contact_sub: "We're here for questions, wholesale orders, or just a hello.",
    contact_name: "Full name",
    contact_subject: "Subject",
    contact_message: "Message",
    contact_send: "Send message",
    contact_sent: "Your message was sent. We'll get back to you soon.",
    contact_info: "Contact Information",
    contact_address: "Address",
    contact_phone: "Phone",
    contact_email: "Email",
    contact_b2b: "Wholesale",
    contact_hours: "Opening hours",
    about_title: "Our Story",
    about_p1: "At Gefseis Nafpaktou we carefully select products from small producers of Nafpaktia, Fokida and the wider Aetolia-Acarnania region. Honey from the firs of Arakynthos, oregano and sideritis from Varasova, tsipouro from traditional copper stills, and rosé wine from Platanitis Winery.",
    about_p2: "Every product in our shop has a name, a village, and a story behind it. We work only with producers we know personally — people who share our love for tradition, land, and flavor.",
    about_q: "\"Nafpaktos is not only the castle and the sea. It is every drop of honey from its mountains, every leaf of oregano from Mt. Arakynthos.\"",
    about_visit: "Visit our producers",
    about_visit_text: "We organize agro-tourism visits to apiaries, olive mills and distilleries on request. Contact us at tours@nafpaktos.gr.",
    faq_title: "Frequently Asked Questions",
    currency: "€",
    free: "Free",
    ingredients: "Ingredients",
    origin: "Origin",
    shelf_life: "Shelf life",
    cert: "Certification",
    allergens: "Allergens",
    qty: "Qty",
    req: "*",
    select_dest: "-- Select destination --",
    cod_extra: "Cash on delivery +€2 (Greece only)",
    eta: "Delivery"
  }
};

// ----- FAQ data -----
const FAQS = [
  { cat: { el: "Αποστολές", en: "Shipping" }, q: { el: "Πόσος είναι ο χρόνος παράδοσης εντός Ελλάδας;", en: "How long does delivery within Greece take?" }, a: { el: "Συνήθως 2-4 εργάσιμες ημέρες με ΕΛΤΑ Courier ή ACS. Σε Αθήνα/Θεσσαλονίκη συχνά 1-2 ημέρες.", en: "Usually 2-4 business days via ELTA Courier or ACS. Athens/Thessaloniki often 1-2 days." } },
  { cat: { el: "Αποστολές", en: "Shipping" }, q: { el: "Στέλνετε στο εξωτερικό;", en: "Do you ship internationally?" }, a: { el: "Ναι, στέλνουμε σε όλη την ΕΕ (5-10 εργάσιμες), Ηνωμένο Βασίλειο και ΗΠΑ (7-15 εργάσιμες). Τα μεταφορικά υπολογίζονται στο checkout.", en: "Yes, we ship across the EU (5-10 business days), UK and USA (7-15 business days). Shipping costs are calculated at checkout." } },
  { cat: { el: "Αποστολές", en: "Shipping" }, q: { el: "Ποιο είναι το κόστος αποστολής στην Ελλάδα;", en: "What is the shipping cost within Greece?" }, a: { el: "4,90€ για παραγγελίες κάτω των 40€. Δωρεάν για παραγγελίες άνω των 40€.", en: "€4.90 for orders below €40. Free shipping for orders over €40." } },
  { cat: { el: "Πληρωμές", en: "Payments" }, q: { el: "Ποιους τρόπους πληρωμής δέχεστε;", en: "What payment methods do you accept?" }, a: { el: "Πιστωτική/χρεωστική κάρτα (Visa, Mastercard, Maestro), PayPal, αντικαταβολή (επιπλέον 2€ μόνο εντός Ελλάδας), τραπεζική κατάθεση.", en: "Credit/debit card (Visa, Mastercard, Maestro), PayPal, cash on delivery (+€2, Greece only), bank transfer." } },
  { cat: { el: "Πληρωμές", en: "Payments" }, q: { el: "Είναι ασφαλείς οι πληρωμές με κάρτα;", en: "Are card payments secure?" }, a: { el: "Ναι. Χρησιμοποιούμε πιστοποιημένο gateway με 3D Secure. Δεν αποθηκεύουμε τα στοιχεία της κάρτας σας.", en: "Yes. We use a certified payment gateway with 3D Secure. We do not store your card details." } },
  { cat: { el: "Επιστροφές", en: "Returns" }, q: { el: "Μπορώ να επιστρέψω ένα προϊόν;", en: "Can I return a product?" }, a: { el: "Λόγω της φύσης των τροφίμων, δεχόμαστε επιστροφές μόνο για ελαττωματικά ή κατεστραμμένα προϊόντα εντός 14 ημερών. Στείλτε φωτογραφία στο info@nafpaktos.gr.", en: "Due to the nature of food products, we accept returns only for defective or damaged items within 14 days. Send a photo to info@nafpaktos.gr." } },
  { cat: { el: "Προϊόντα", en: "Products" }, q: { el: "Τα προϊόντα σας έχουν πιστοποιήσεις;", en: "Are your products certified?" }, a: { el: "Ναι. Πολλά είναι ΠΟΠ/ΠΓΕ ή βιολογικά (BIO). Δείτε τις πιστοποιήσεις σε κάθε προϊόν.", en: "Yes. Many are PDO/PGI or organic (BIO). See certifications listed on each product page." } },
  { cat: { el: "Προϊόντα", en: "Products" }, q: { el: "Έχετε προϊόντα χωρίς γλουτένη;", en: "Do you have gluten-free products?" }, a: { el: "Ναι — όλα τα μέλια, ελαιόλαδα, γλυκά κουταλιού, βότανα και αλάτι είναι φυσικά χωρίς γλουτένη. Ο τραχανάς και τα αρτοσκευάσματα περιέχουν γλουτένη.", en: "Yes — all honeys, olive oils, spoon sweets, herbs and salts are naturally gluten-free. Trachanas and baked goods contain gluten." } },
  { cat: { el: "Προϊόντα", en: "Products" }, q: { el: "Πώς διατηρώ τα προϊόντα μετά το άνοιγμα;", en: "How do I store products after opening?" }, a: { el: "Μέλι: σκοτεινό μέρος, όχι ψυγείο. Ελαιόλαδο: σκοτεινό-δροσερό. Τυριά: ψυγείο 0-4°C. Γλυκά κουταλιού: ψυγείο μετά το άνοιγμα.", en: "Honey: dark place, NOT in fridge. Olive oil: cool dark place. Cheese: fridge 0-4°C. Spoon sweets: fridge after opening." } },
  { cat: { el: "Δώρα", en: "Gifts" }, q: { el: "Φτιάχνετε εταιρικά δώρα ή γαμήλιες μπομπονιέρες;", en: "Do you make corporate gifts or wedding favors?" }, a: { el: "Ναι. Επικοινωνήστε στο info@nafpaktos.gr για προσαρμοσμένα πακέτα από 30 τεμάχια και άνω, με δυνατότητα προσθήκης λογότυπου ή ονομάτων.", en: "Yes. Contact info@nafpaktos.gr for custom packages from 30 pieces and up, with the option to add logos or names." } },
  { cat: { el: "Χονδρική", en: "Wholesale" }, q: { el: "Έχετε χονδρική;", en: "Do you offer wholesale?" }, a: { el: "Ναι, για deli, εστιατόρια και delicatessen. Ζητήστε τιμοκατάλογο χονδρικής στο b2b@nafpaktos.gr.", en: "Yes, for delis, restaurants and gourmet shops. Request our wholesale catalog at b2b@nafpaktos.gr." } }
];

// ============================================================
// State management
// ============================================================
const STORAGE_KEY = "gn_cart_v1";
const LANG_KEY = "gn_lang_v1";

let state = {
  lang: localStorage.getItem(LANG_KEY) || "el",
  cart: JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"),
  filter: "all",
  shippingKey: "GR_MAINLAND"
};

function t(key) { return (I18N[state.lang] && I18N[state.lang][key]) || key; }
function L(obj) { return obj ? (obj[state.lang] || obj.el || obj.en) : ""; }
function fmtMoney(n) { return n.toFixed(2).replace(".", state.lang === "el" ? "," : ".") + "€"; }

function saveCart() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart)); }
function saveLang() { localStorage.setItem(LANG_KEY, state.lang); }

// ============================================================
// Cart logic
// ============================================================
function cartItemCount() { return state.cart.reduce((s, i) => s + i.qty, 0); }
function cartSubtotal() {
  return state.cart.reduce((sum, item) => {
    const p = PRODUCTS.find(x => x.sku === item.sku);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}
function shippingCost() {
  const sub = cartSubtotal();
  if (state.cart.length === 0) return 0;
  const rate = SHIPPING_RATES.find(r => r.key === state.shippingKey) || SHIPPING_RATES[0];
  return sub >= 40 ? rate.over40 : rate.under40;
}
function cartTotal() { return cartSubtotal() + shippingCost(); }

function addToCart(sku) {
  const existing = state.cart.find(i => i.sku === sku);
  if (existing) existing.qty += 1;
  else state.cart.push({ sku, qty: 1 });
  saveCart();
  renderCart();
  updateCartCount();
  showToast(t("added_to_cart"));
}
function updateQty(sku, delta) {
  const item = state.cart.find(i => i.sku === sku);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter(i => i.sku !== sku);
  saveCart();
  renderCart();
  renderCheckoutSummary();
  updateCartCount();
}
function removeFromCart(sku) {
  state.cart = state.cart.filter(i => i.sku !== sku);
  saveCart();
  renderCart();
  renderCheckoutSummary();
  updateCartCount();
  showToast(t("removed"));
}
function clearCart() {
  state.cart = [];
  saveCart();
  renderCart();
  renderCheckoutSummary();
  updateCartCount();
  showToast(t("cleared"));
}

// ============================================================
// UI rendering
// ============================================================
function updateCartCount() {
  const el = document.querySelector("[data-cart-count]");
  if (!el) return;
  const n = cartItemCount();
  el.textContent = n;
  el.classList.toggle("hidden", n === 0);
}

function productCardHTML(p) {
  const badge = p.badge ? `<span class="product-badge">${L(p.badge)}</span>` : "";
  const placeholder = `<div class="placeholder">${L(p.name).charAt(0)}</div>`;
  // We use onerror to fall back to placeholder if image is missing
  return `
    <article class="product-card" data-cat="${p.categoryKey}">
      <div class="product-image">
        ${badge}
        <img src="${p.image}" alt="${L(p.name)}" loading="lazy"
             onerror="this.style.display='none';this.parentElement.insertAdjacentHTML('beforeend','${placeholder.replace(/'/g, "\\'")}')">
      </div>
      <div class="product-body">
        <div class="product-category">${L(p.category)}</div>
        <h3 class="product-name">${L(p.name)}</h3>
        <div class="product-weight">${L(p.weight)}</div>
        <p class="product-desc">${L(p.description)}</p>
        <div class="product-footer">
          <div class="product-price">${fmtMoney(p.price)}</div>
          <button class="btn btn-accent btn-sm" data-add-sku="${p.sku}">+ ${t("add_to_cart")}</button>
        </div>
      </div>
    </article>
  `;
}

function renderFeaturedProducts() {
  const grid = document.querySelector("[data-featured-grid]");
  if (!grid) return;
  // Pick 4 featured products
  const featured = PRODUCTS.filter(p => p.badge || p.sku === "NF-012").slice(0, 4);
  if (featured.length < 4) {
    PRODUCTS.forEach(p => { if (featured.length < 4 && !featured.includes(p)) featured.push(p); });
  }
  grid.innerHTML = featured.map(productCardHTML).join("");
  bindAddToCart(grid);
}

function renderAllProducts() {
  const grid = document.querySelector("[data-products-grid]");
  if (!grid) return;
  const filtered = state.filter === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.categoryKey === state.filter);
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><h3>${state.lang === "el" ? "Δεν βρέθηκαν προϊόντα" : "No products found"}</h3></div>`;
    return;
  }
  grid.innerHTML = filtered.map(productCardHTML).join("");
  bindAddToCart(grid);
}

function bindAddToCart(container) {
  container.querySelectorAll("[data-add-sku]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      addToCart(btn.dataset.addSku);
    });
  });
}

function renderFilters() {
  const wrap = document.querySelector("[data-filters]");
  if (!wrap) return;
  const filters = [
    { key: "all", label: "filter_all" },
    { key: "honey", label: "filter_honey" },
    { key: "herbs", label: "filter_herbs" },
    { key: "spirits", label: "filter_spirits" },
    { key: "sugary", label: "filter_sugary" },
    { key: "pasta", label: "filter_pasta" },
    { key: "gifts", label: "filter_gifts" }
  ];
  wrap.innerHTML = filters.map(f =>
    `<button class="filter-btn ${state.filter === f.key ? "active" : ""}" data-filter="${f.key}">${t(f.label)}</button>`
  ).join("");
  wrap.querySelectorAll("[data-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.filter = btn.dataset.filter;
      renderFilters();
      renderAllProducts();
    });
  });
}

function renderCart() {
  const list = document.querySelector("[data-cart-items]");
  const footer = document.querySelector("[data-cart-footer]");
  if (!list) return;
  if (state.cart.length === 0) {
    list.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🧺</div>
        <h4>${t("cart_empty")}</h4>
        <p>${t("cart_empty_sub")}</p>
      </div>`;
    if (footer) footer.style.display = "none";
    return;
  }
  list.innerHTML = state.cart.map(item => {
    const p = PRODUCTS.find(x => x.sku === item.sku);
    if (!p) return "";
    return `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${p.image}" alt="${L(p.name)}" onerror="this.style.display='none'">
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${L(p.name)}</div>
          <div class="cart-item-meta">${L(p.weight)} · ${fmtMoney(p.price)}</div>
          <div class="cart-item-controls">
            <button class="qty-btn" data-qty-dec="${p.sku}">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" data-qty-inc="${p.sku}">+</button>
          </div>
        </div>
        <div class="cart-item-right">
          <div class="cart-item-price">${fmtMoney(p.price * item.qty)}</div>
          <button class="cart-item-remove" data-remove="${p.sku}">${state.lang === "el" ? "Αφαίρεση" : "Remove"}</button>
        </div>
      </div>
    `;
  }).join("");
  if (footer) footer.style.display = "block";
  renderCartFooter();
  // Bind controls
  list.querySelectorAll("[data-qty-inc]").forEach(b => b.addEventListener("click", () => updateQty(b.dataset.qtyInc, +1)));
  list.querySelectorAll("[data-qty-dec]").forEach(b => b.addEventListener("click", () => updateQty(b.dataset.qtyDec, -1)));
  list.querySelectorAll("[data-remove]").forEach(b => b.addEventListener("click", () => removeFromCart(b.dataset.remove)));
}

function renderCartFooter() {
  const sub = document.querySelector("[data-cart-subtotal]");
  const ship = document.querySelector("[data-cart-shipping]");
  const tot = document.querySelector("[data-cart-total]");
  if (sub) sub.textContent = fmtMoney(cartSubtotal());
  if (ship) {
    const s = shippingCost();
    ship.textContent = s === 0 && cartSubtotal() >= 40 ? t("free") : fmtMoney(s);
  }
  if (tot) tot.textContent = fmtMoney(cartTotal());
}

// ============================================================
// Cart drawer
// ============================================================
function openCart() {
  document.querySelector("[data-cart-drawer]")?.classList.add("open");
  document.querySelector("[data-cart-overlay]")?.classList.add("open");
}
function closeCart() {
  document.querySelector("[data-cart-drawer]")?.classList.remove("open");
  document.querySelector("[data-cart-overlay]")?.classList.remove("open");
}

// ============================================================
// Language switcher
// ============================================================
function setLang(lang) {
  state.lang = lang;
  saveLang();
  document.documentElement.lang = lang;
  applyTranslations();
  renderFeaturedProducts();
  renderAllProducts();
  renderFilters();
  renderCart();
  renderCheckoutSummary();
  renderShippingOptions();
  renderFAQ();
  // Update lang switch buttons
  document.querySelectorAll("[data-lang-btn]").forEach(b => {
    b.classList.toggle("active", b.dataset.langBtn === lang);
  });
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  // Business info
  document.querySelectorAll("[data-biz-name]").forEach(el => el.textContent = L(BUSINESS.name));
  document.querySelectorAll("[data-biz-tagline]").forEach(el => el.textContent = L(BUSINESS.tagline));
  document.querySelectorAll("[data-biz-address]").forEach(el => el.textContent = L(BUSINESS.address));
  document.querySelectorAll("[data-biz-hours]").forEach(el => el.textContent = L(BUSINESS.hours));
}

// ============================================================
// Toast
// ============================================================
let toastTimer;
function showToast(msg) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

// ============================================================
// Checkout
// ============================================================
function renderShippingOptions() {
  const sel = document.querySelector("[data-shipping-select]");
  if (!sel) return;
  sel.innerHTML = SHIPPING_RATES.map(r => {
    const label = L(SHIPPING_LABELS[r.key]);
    return `<option value="${r.key}" ${state.shippingKey === r.key ? "selected" : ""}>${label} · ${r.days} ${state.lang === "el" ? "ημέρες" : "days"}</option>`;
  }).join("");
  sel.addEventListener("change", e => {
    state.shippingKey = e.target.value;
    renderCheckoutSummary();
    renderCart();
  });
}

function renderCheckoutSummary() {
  const wrap = document.querySelector("[data-checkout-summary]");
  if (!wrap) return;
  if (state.cart.length === 0) {
    wrap.innerHTML = `<p>${t("cart_empty")}</p>`;
    return;
  }
  const lines = state.cart.map(item => {
    const p = PRODUCTS.find(x => x.sku === item.sku);
    if (!p) return "";
    return `
      <div class="summary-line">
        <span>${L(p.name)} <small>×${item.qty}</small></span>
        <strong>${fmtMoney(p.price * item.qty)}</strong>
      </div>
    `;
  }).join("");
  const shipCost = shippingCost();
  const shipText = shipCost === 0 && cartSubtotal() >= 40 ? t("free") : fmtMoney(shipCost);
  wrap.innerHTML = `
    ${lines}
    <div class="summary-totals">
      <div class="summary-line"><span>${t("cart_subtotal")}</span><strong>${fmtMoney(cartSubtotal())}</strong></div>
      <div class="summary-line"><span>${t("cart_shipping")}</span><strong>${shipText}</strong></div>
      <div class="summary-line" style="font-size:1.15rem;color:var(--color-primary-dark);"><span>${t("cart_total")}</span><strong>${fmtMoney(cartTotal())}</strong></div>
    </div>
  `;
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  // Simple validation already done by HTML; we just simulate order placement
  const orderId = "GN-" + Date.now().toString().slice(-8);
  const formData = new FormData(e.target);
  const orderSummary = {
    id: orderId,
    items: state.cart.map(i => {
      const p = PRODUCTS.find(x => x.sku === i.sku);
      return { sku: i.sku, name: L(p.name), qty: i.qty, price: p.price };
    }),
    total: cartTotal(),
    customer: {
      name: formData.get("firstName") + " " + formData.get("lastName"),
      email: formData.get("email")
    }
  };
  console.log("Order placed:", orderSummary);
  // Show success screen
  document.querySelector("[data-checkout-form-wrap]").innerHTML = `
    <div class="empty-state" style="background:white;border:1px solid var(--color-border);border-radius:var(--radius-lg);padding:3rem 1.5rem;">
      <div style="font-size:3rem;color:var(--color-success);margin-bottom:1rem;">✓</div>
      <h2>${t("order_success")}</h2>
      <p>${t("order_success_text")}</p>
      <p style="margin-top:1rem;"><strong>${state.lang === "el" ? "Κωδικός παραγγελίας" : "Order ID"}:</strong> ${orderId}</p>
      <a href="index.html" class="btn btn-primary" style="margin-top:1.5rem;">${state.lang === "el" ? "Επιστροφή στην αρχική" : "Back to home"}</a>
    </div>
  `;
  // Clear cart silently
  state.cart = [];
  saveCart();
  updateCartCount();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================
// FAQ
// ============================================================
function renderFAQ() {
  const wrap = document.querySelector("[data-faq]");
  if (!wrap) return;
  wrap.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item">
      <button class="faq-q" data-faq-toggle="${i}">
        <span>${L(f.q)}</span>
        <span class="faq-toggle">+</span>
      </button>
      <div class="faq-a"><p style="padding-top:0.75rem;margin:0;">${L(f.a)}</p></div>
    </div>
  `).join("");
  wrap.querySelectorAll("[data-faq-toggle]").forEach(btn => {
    btn.addEventListener("click", () => btn.closest(".faq-item").classList.toggle("open"));
  });
}

// ============================================================
// Contact form
// ============================================================
function handleContactSubmit(e) {
  e.preventDefault();
  // Simulated send
  const form = e.target;
  form.style.display = "none";
  const success = document.createElement("div");
  success.className = "empty-state";
  success.style.cssText = "background:var(--color-cream);border-radius:var(--radius-lg);padding:2rem;";
  success.innerHTML = `
    <div style="font-size:2.5rem;color:var(--color-success);">✓</div>
    <h3>${t("contact_sent")}</h3>
  `;
  form.parentElement.appendChild(success);
}

// ============================================================
// Mobile menu toggle
// ============================================================
function bindMenuToggle() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }
}

// ============================================================
// Initialization
// ============================================================
function init() {
  // Lang buttons
  document.querySelectorAll("[data-lang-btn]").forEach(b => {
    b.addEventListener("click", () => setLang(b.dataset.langBtn));
    b.classList.toggle("active", b.dataset.langBtn === state.lang);
  });
  // Cart drawer
  document.querySelectorAll("[data-cart-open]").forEach(b => b.addEventListener("click", openCart));
  document.querySelectorAll("[data-cart-close]").forEach(b => b.addEventListener("click", closeCart));
  // Clear cart
  document.querySelectorAll("[data-cart-clear]").forEach(b => b.addEventListener("click", clearCart));
  // Forms
  document.querySelectorAll("[data-checkout-form]").forEach(f => f.addEventListener("submit", handleCheckoutSubmit));
  document.querySelectorAll("[data-contact-form]").forEach(f => f.addEventListener("submit", handleContactSubmit));
  bindMenuToggle();
  document.documentElement.lang = state.lang;

  applyTranslations();
  renderFeaturedProducts();
  renderAllProducts();
  renderFilters();
  renderCart();
  renderShippingOptions();
  renderCheckoutSummary();
  renderFAQ();
  updateCartCount();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
