/* Verona Clothes — demo site */

// WhatsApp from the Instagram bio (Tarik Jdideh number 79 076 606), digits only.
const WHATSAPP_NUMBER = "96179076606";
const INSTAGRAM = "veronaclothesshop";

const SIZES = ["S", "M", "L", "XL", "XXL"];

// Photos are the shop's own Instagram posts (in /img). Swap for product shots anytime.
const ITEMS = [
  { id: "blush-jacket", img: "jacket-blush", tag: "jackets", isNew: true,
    en: ["Blush Belted Jacket", "Soft-structured jacket with a cinched waist. Wear it over wide trousers."],
    ar: ["جاكيت زهري بحزام", "جاكيت بقصّة ناعمة وخصر محدّد، يليق مع البنطلون الواسع."] },
  { id: "cocoa-peplum", img: "jacket-brown", tag: "jackets", isNew: true,
    en: ["Cocoa Peplum Jacket", "Puffed sleeves, peplum hem and a deep chocolate tone."],
    ar: ["جاكيت بني بكشكش", "أكمام منفوخة وطرف بكشكش بلون الشوكولا."] },
  { id: "leather", img: "leather-jacket", tag: "jackets", isNew: true,
    en: ["Chocolate Leather Jacket", "Oversized leather look with a wide collar."],
    ar: ["جاكيت جلد بني", "جاكيت جلد واسع بياقة عريضة."] },
  { id: "black-trench", img: "trench-black", tag: "jackets",
    en: ["Long Black Trench", "Full-length coat that goes over everything."],
    ar: ["ترانش أسود طويل", "معطف طويل يليق فوق كل شي."] },
  { id: "belted-trench", img: "trench-duo", tag: "jackets",
    en: ["Belted Short Trench", "In black and sand. The classic, cut shorter."],
    ar: ["ترانش قصير بحزام", "بالأسود والبيج، الكلاسيك بقصّة أقصر."] },
  { id: "cream-vest", img: "look-cream", tag: "knit", isNew: true,
    en: ["Embroidered Knit Vest", "Cream knit with star embroidery and a denim collar."],
    ar: ["صدرية صوف مطرّزة", "صوف كريمي بتطريز نجوم وياقة جينز."] },
  { id: "bow-knit", img: "knit-black", tag: "knit",
    en: ["Black Knit & Bow Shirt", "Fitted black knit layered over a white bow shirt."],
    ar: ["كنزة سوداء مع قميص بفيونكة", "كنزة سوداء فوق قميص أبيض بفيونكة."] },
  { id: "grey-gilet", img: "vest-grey", tag: "sets",
    en: ["Tailored Grey Gilet", "Long tailored gilet, styled with black wide-leg trousers."],
    ar: ["صدرية رمادية طويلة", "صدرية مفصّلة طويلة مع بنطلون أسود واسع."] },
  { id: "burgundy-set", img: "set-maroon", tag: "sets",
    en: ["Burgundy Zip Set", "Zip jacket and matching trousers. Comfortable, still put together."],
    ar: ["طقم خمري بسحّاب", "جاكيت بسحّاب مع بنطلون متناسق. مريح وأنيق."] },
  { id: "track-set", img: "co-ord-rack", tag: "sets",
    en: ["Soft Track Set", "Hoodie and trousers in white, black and blush."],
    ar: ["طقم رياضي ناعم", "هودي وبنطلون بالأبيض والأسود والزهري."] },
  { id: "puffer-gilet", img: "vest-black", tag: "sets",
    en: ["Belted Puffer Gilet", "Quilted black gilet over a white shirt and flares."],
    ar: ["صدرية منفوخة بحزام", "صدرية سوداء مبطّنة فوق قميص أبيض."] },
  { id: "denim-maxi", img: "denim-jumpsuit", tag: "denim",
    en: ["Belted Denim Maxi", "Long denim shirt dress with a tan belt."],
    ar: ["فستان جينز طويل بحزام", "فستان قميص جينز طويل مع حزام بني."] }
];

const LOOK = {
  en: [["Embroidered knit vest", "cream or charcoal"], ["Oversized white shirt", ""], ["Wide-leg light denim", ""], ["Pointed ankle boots", ""]],
  ar: [["صدرية صوف مطرّزة", "كريمي أو رمادي"], ["قميص أبيض واسع", ""], ["جينز فاتح واسع", ""], ["جزمة قصيرة بمقدمة مدبّبة", ""]]
};

const BRANCHES = [
  { num: "I",   map: "Verona Clothes Shop Sabil Street Beirut",
    en: ["Beirut", "Sabil Street · 1st branch"], ar: ["بيروت", "شارع السبيل · الفرع الأول"] },
  { num: "II",  map: "Verona Clothes Shop Leon Street Hamra Beirut",
    en: ["Hamra", "Leon Street · 2nd branch"], ar: ["الحمرا", "شارع ليون · الفرع الثاني"] },
  { num: "III", map: "Verona Clothes Shop Tarik Jdideh Beirut", phone: "79 076 606",
    en: ["Tarik Jdideh", "3rd branch · 79 076 606"], ar: ["طريق الجديدة", "الفرع الثالث · 79076606"] }
];

const T = {
  en: {
    navShop: "Shop", navLook: "The look", navBranches: "Branches", navInfo: "Delivery", order: "Order",
    heroEyebrow: "Beirut · Hamra · Tarik Jdideh",
    heroTitle1: "Dressed with grace,", heroTitle2: "priced with heart.",
    heroLead: "Modest, modern women's fashion — new pieces in store every week. Try them on in any of our three Beirut branches, or have them delivered anywhere in Lebanon.",
    heroCta1: "Shop new arrivals", heroCta2: "Find a branch",
    fact1: "branches in Beirut", fact2: "delivery to all Lebanon", fact3: "followers on Instagram",
    ticker: ["New pieces every week", "Delivery to all Lebanon · $4", "Exchange within 3 days", "3 branches in Beirut", "Order on WhatsApp"],
    shopEyebrow: "In store now", shopTitle: "New this season", shopSub: "Tap any piece to choose your size and order it on WhatsApp.",
    filters: { all: "All", new: "New in", jackets: "Jackets & coats", knit: "Knitwear", sets: "Sets & gilets", denim: "Denim" },
    newBadge: "NEW",
    lookEyebrow: "Look of the week", lookTitle: "Full outfit, available at Verona",
    lookSub: "One vest, two moods. Pick cream or charcoal and we'll put the whole look together for you.",
    lookCta: "Order the full look",
    brEyebrow: "Visit us", brTitle: "Three branches, one Verona",
    brSub: "The same collection in every store. Message ahead and we'll keep your size aside.",
    directions: "Directions", reserve: "Reserve my size",
    i1Title: "Delivery $4", i1Text: "To every area in Lebanon. Order on WhatsApp and pay on delivery.",
    i2Title: "Exchange in 3 days", i2Text: "Not the right fit? Exchange it within 3 days at any branch. No refunds.",
    i3Title: "New every week", i3Text: "Follow @veronaclothesshop to see the new pieces the day they arrive.",
    igEyebrow: "4,486 posts · 60.2K followers", igTitle: "See it styled on Instagram", igCta: "Follow @veronaclothesshop",
    footer: "Women's fashion · Beirut, Lebanon",
    size: "Size", how: "How would you like it?", orderWa: "Order on WhatsApp",
    delivery: "Delivery ($4)",
    msgGeneral: "Hello Verona! I'd like to order.",
    msgLook: "Hello Verona! I'd like the full look of the week: embroidered knit vest, white shirt and wide-leg jeans.",
    msgItem: (name, size, how) => `Hello Verona! I'd like the ${name}, size ${size}. ${how}`,
    msgDelivery: "Please deliver it to me.", msgPickup: b => `I'll pick it up from the ${b} branch.`,
    msgReserve: b => `Hello Verona! Please keep my size aside at the ${b} branch.`
  },
  ar: {
    navShop: "تسوّقي", navLook: "اللوك", navBranches: "الفروع", navInfo: "التوصيل", order: "اطلبي",
    heroEyebrow: "بيروت · الحمرا · طريق الجديدة",
    heroTitle1: "أناقة بكل تفصيل،", heroTitle2: "وأسعار من القلب.",
    heroLead: "أزياء نسائية محتشمة وعصرية، وقطع جديدة كل أسبوع. جرّبيها بأي فرع من فروعنا الثلاثة في بيروت، أو اطلبيها توصيل لكل لبنان.",
    heroCta1: "تسوّقي الجديد", heroCta2: "أقرب فرع",
    fact1: "فروع في بيروت", fact2: "توصيل لكل لبنان", fact3: "متابِعة على إنستغرام",
    ticker: ["قطع جديدة كل أسبوع", "توصيل لكل لبنان · ٤$", "تبديل خلال ٣ أيام", "٣ فروع في بيروت", "اطلبي عبر واتساب"],
    shopEyebrow: "متوفّر بالمحل", shopTitle: "جديد هالموسم", shopSub: "اضغطي على أي قطعة لتختاري القياس وتطلبيها على واتساب.",
    filters: { all: "الكل", new: "الجديد", jackets: "جاكيتات ومعاطف", knit: "صوف", sets: "أطقم وصدريات", denim: "جينز" },
    newBadge: "جديد",
    lookEyebrow: "لوك الأسبوع", lookTitle: "اللوك كامل متوفّر عند فيرونا",
    lookSub: "صدرية وحدة بمودين. اختاري الكريمي أو الرمادي ومنحضّرلك اللوك كلّه.",
    lookCta: "اطلبي اللوك كامل",
    brEyebrow: "زورينا", brTitle: "ثلاث فروع، فيرونا وحدة",
    brSub: "نفس التشكيلة بكل الفروع. ابعتيلنا قبل ومنخبّيلك قياسك.",
    directions: "الموقع", reserve: "احجزي قياسي",
    i1Title: "توصيل ٤$", i1Text: "لكل المناطق اللبنانية. اطلبي عبر واتساب وادفعي عند الاستلام.",
    i2Title: "تبديل خلال ٣ أيام", i2Text: "القياس مش مظبوط؟ بدّليه خلال ٣ أيام بأي فرع. لا يوجد استرجاع.",
    i3Title: "جديد كل أسبوع", i3Text: "تابعي ‎@veronaclothesshop لتشوفي القطع الجديدة يوم ما توصل.",
    igEyebrow: "٤٬٤٨٦ منشور · ٦٠٫٢ ألف متابِعة", igTitle: "شوفي التنسيقات على إنستغرام", igCta: "تابعي ‎@veronaclothesshop",
    footer: "أزياء نسائية · بيروت، لبنان",
    size: "القياس", how: "كيف بتحبّي تستلمي؟", orderWa: "اطلبي عبر واتساب",
    delivery: "توصيل (٤$)",
    msgGeneral: "مرحبا فيرونا! بدي اطلب.",
    msgLook: "مرحبا فيرونا! بدي لوك الأسبوع كامل: الصدرية المطرّزة والقميص الأبيض والجينز الواسع.",
    msgItem: (name, size, how) => `مرحبا فيرونا! بدي ${name}، قياس ${size}. ${how}`,
    msgDelivery: "بدي توصيل.", msgPickup: b => `باخدها من فرع ${b}.`,
    msgReserve: b => `مرحبا فيرونا! خبّولي قياسي بفرع ${b} لو سمحتو.`
  }
};

/* ---------- helpers ---------- */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const waLink = text => WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
  : `https://ig.me/m/${INSTAGRAM}`;

let lang = "en";
try { if (localStorage.getItem("verona-lang") === "ar") lang = "ar"; } catch (e) {}
const t = k => T[lang][k];

/* ---------- static text ---------- */
function applyText() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-t]").forEach(el => { const v = t(el.dataset.t); if (typeof v === "string") el.textContent = v; });
  $("#lang").textContent = lang === "ar" ? "EN" : "عربي";
  $$("[data-order]").forEach(el => {
    el.href = waLink(el.dataset.order === "look" ? t("msgLook") : t("msgGeneral"));
  });
  const words = t("ticker");
  $("#ticker").innerHTML = [...words, ...words, ...words, ...words].map(w => `<span>${w}</span>`).join("");
}

/* ---------- shop ---------- */
let filter = "all";
function renderFilters() {
  const f = t("filters");
  $("#filters").innerHTML = Object.keys(f).map(k =>
    `<button role="tab" data-f="${k}" aria-selected="${k === filter}">${f[k]}</button>`).join("");
}
function renderGrid() {
  const list = ITEMS.filter(p => filter === "all" || (filter === "new" ? p.isNew : p.tag === filter));
  $("#grid").innerHTML = list.map((p, i) => `
    <button class="card" data-id="${p.id}" style="animation-delay:${i * 60}ms">
      <figure class="arch"><img src="img/${p.img}.jpg" alt="${p[lang][0]}" loading="lazy">${p.isNew ? `<b class="new">${t("newBadge")}</b>` : ""}</figure>
      <h3>${p[lang][0]}</h3>
      <span>${t("filters")[p.tag]}</span>
    </button>`).join("");
}
$("#filters").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  filter = b.dataset.f; renderFilters(); renderGrid();
});

/* ---------- product dialog ---------- */
const modal = $("#modal");
let current = null, size = "M", how = "delivery";
function updateOrder() {
  const name = current[lang][0];
  const branch = BRANCHES.find(b => b.num === how);
  const howText = branch ? t("msgPickup")(branch[lang][0]) : t("msgDelivery");
  $("#mOrder").href = waLink(t("msgItem")(name, size, howText));
}
function chips(el, options, value, onPick) {
  el.innerHTML = options.map(([v, label]) => `<button type="button" data-v="${v}" aria-pressed="${v === value}">${label}</button>`).join("");
  el.onclick = e => {
    const b = e.target.closest("button"); if (!b) return;
    onPick(b.dataset.v);
    el.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b));
    updateOrder();
  };
}
function openItem(id) {
  current = ITEMS.find(p => p.id === id);
  $("#mImg").src = `img/${current.img}.jpg`;
  $("#mImg").alt = current[lang][0];
  $("#mTag").textContent = t("filters")[current.tag];
  $("#mName").textContent = current[lang][0];
  $("#mText").textContent = current[lang][1];
  chips($("#mSizes"), SIZES.map(s => [s, s]), size, v => size = v);
  chips($("#mBranch"), [["delivery", t("delivery")], ...BRANCHES.map(b => [b.num, b[lang][0]])], how, v => how = v);
  updateOrder();
  modal.showModal();
}
$("#grid").addEventListener("click", e => { const c = e.target.closest(".card"); if (c) openItem(c.dataset.id); });
$("#modalClose").addEventListener("click", () => modal.close());
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

/* ---------- look, branches, instagram ---------- */
function renderLook() {
  $("#pieces").innerHTML = LOOK[lang].map(([n, note]) => `<li>${n}${note ? `<small>${note}</small>` : ""}</li>`).join("");
}
function renderBranches() {
  $("#branchList").innerHTML = BRANCHES.map(b => `
    <article class="branch">
      <div class="num">${b.num}</div>
      <h3>${b[lang][0]}</h3>
      <p>${b[lang][1]}</p>
      <div class="actions">
        <a class="btn btn-gold" href="${waLink(t("msgReserve")(b[lang][0]))}" target="_blank" rel="noopener">${t("reserve")}</a>
        <a class="btn btn-line" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.map)}" target="_blank" rel="noopener">${t("directions")}</a>
      </div>
    </article>`).join("");
}
function renderInsta() {
  const pics = ["store-front", "look-cream", "trench-duo", "jacket-brown", "set-maroon", "leather-jacket"];
  $("#instaStrip").innerHTML = pics.map(p =>
    `<a href="https://www.instagram.com/${INSTAGRAM}/" target="_blank" rel="noopener" aria-label="Instagram"><img src="img/${p}.jpg" alt="" loading="lazy"></a>`).join("");
}

function renderAll() { applyText(); renderFilters(); renderGrid(); renderLook(); renderBranches(); }
$("#lang").addEventListener("click", () => {
  lang = lang === "en" ? "ar" : "en";
  try { localStorage.setItem("verona-lang", lang); } catch (e) {}
  renderAll();
});

renderInsta();
renderAll();
