// Rafa Atelier — demo
// Placeholder number: replace with the atelier's real WhatsApp (country code, no "+").
const WHATSAPP_NUMBER = "96100000000";

const STRINGS = {
  ar: {
    pageTitle: "دار رفا · أتيليه رفا",
    brand: "دار رفا",
    "nav.rooms": "غرف الدار",
    "nav.handmade": "الحياكة اليدوية",
    "nav.hills": "على التلال",
    "nav.talks": "أحاديث لطيفة",
    "nav.order": "كيف تطلبين",
    "hero.eyebrow": "أتيليه رفا · لبنان",
    "hero.title": "دارُ رفا؛<br>نحنُ حِبكةُ الخيط الطبيعي.",
    "hero.lead": "رفا؛ دارٌ يمنحكِ قصصًا وأسلوب حياة. قطعٌ محتشمة من الكتّان والقطن، تُطرَّز وتُحاك يدويًا، قطعةً قطعة.",
    "hero.cta": "ادخلي الدار",
    "hero.bubble": "أهلًا بكِ! أنا رفيف، سأرافقكِ في الجولة.",
    "cta.whatsapp": "اطلبي عبر واتساب",
    "val.1": "خيطٌ طبيعي",
    "val.2": "حياكة يدوية",
    "val.3": "تطريز بالإبرة",
    "val.4": "صُنع في لبنان",
    "val.5": "قطع محدودة",
    "rooms.eyebrow": "غرف الدار",
    "rooms.title": "كل غرفةٍ حكاية، وكل قطعةٍ ضيفة.",
    "f.all": "الكل",
    "f.dresses": "الفساتين",
    "f.sets": "الأطقم",
    "f.shirts": "القمصان",
    "f.jackets": "السترات",
    "product.tag": "صنع يدوي",
    "product.cta": "اسألي عن هذه القطعة",
    "hm.eyebrow": "حياكة يدوية",
    "hm.title": "السحرُ هنا من كل البلاد، والحياكةُ يدوية.",
    "hm.lead": "نستلهم من غرزِ الشعوب وأقمشتها — الكانثا، التطريز المتقاطع، طباعة القوالب — ونجمعها بين جدران دارنا في لبنان.",
    "hm.s1t": "نختار الخيط",
    "hm.s1": "كتّانٌ وقطنٌ طبيعيّان، يتنفّسان معكِ.",
    "hm.s2t": "نرسم ونطرّز",
    "hm.s2": "كلُّ زهرةٍ تُرسم أولًا، ثم تُطرَّز بالإبرة.",
    "hm.s3t": "نحيك قطعتكِ",
    "hm.s3": "قطعٌ محدودة، تُخاط بتمهّلٍ وحب.",
    "hills.eyebrow": "على التلال",
    "hills.title": "أنني فراشة.",
    "hills.lead": "قطعُ رفا خارج الدار، بين الريح والزعتر وتلال لبنان.",
    "talks.eyebrow": "أحاديث لطيفة",
    "talks.title": "حكاياتٌ من طاولة الخياطة.",
    "talks.more": "اقرئي الحكاية",
    "t1.t": "رفيف بين الزهور",
    "t1.p": "عن الأزهار البرّية التي تُلهم تطريزنا، وكيف تنتقل من الحقل إلى القماش.",
    "t2.t": "لماذا الكتّان؟",
    "t2.p": "قماشٌ يكبر معكِ، ويزداد لينًا مع كل غسلة.",
    "t3.t": "كيف تعتنين بقطعتكِ",
    "t3.p": "نصائح بسيطة لتعيش قطعتكِ المطرّزة سنواتٍ طويلة.",
    "order.eyebrow": "كيف تطلبين",
    "order.title": "ثلاث خطوات، وفنجان قهوة.",
    "order.1": "اختاري قطعتكِ من غرف الدار.",
    "order.2": "راسلينا على واتساب أو إنستغرام مع مقاسكِ.",
    "order.3": "نحيكها ونوصلها إليكِ، في لبنان وخارجه.",
    "footer.home": "بيتُنا في لبنان.",
    "footer.note": "© 2026 دار رفا — نسخة تجريبية",
    "alt.hills": "عارضة بحجاب أخضر وفستان أبيض مطرّز على تلال لبنان",
    "alt.sitting": "عارضة جالسة بفستان أخضر فاتح مطرّز",
    "alt.rafeef": "رسم رفيف، سيّدة الدار، بفستان أخضر",
    "alt.kantha": "بلوزة مطبوعة بصدر أبيض مطرّز يدويًا",
    "alt.butterfly": "عارضة بحجاب وردي تحمل باقة زعتر",
    "alt.grey": "فستان رمادي مطرّز بالأزهار البرّية",
    "wa.general": "مرحبًا دار رفا 🌿 أودّ الاستفسار عن قطعكم.",
    "wa.piece": "مرحبًا دار رفا 🌿 أودّ الاستفسار عن: ",
    toggle: "EN",
  },
  en: {
    pageTitle: "Rafa Atelier · Dar Rafa",
    brand: "Rafa Atelier",
    "nav.rooms": "The Rooms",
    "nav.handmade": "Handmade",
    "nav.hills": "On the Hills",
    "nav.talks": "Gentle Talks",
    "nav.order": "How to Order",
    "hero.eyebrow": "Rafa Atelier · Lebanon",
    "hero.title": "Dar Rafa —<br>we are the weave of natural thread.",
    "hero.lead": "Rafa is a house that offers you stories and a way of living. Modest pieces in linen and cotton, embroidered and sewn by hand, one by one.",
    "hero.cta": "Step inside",
    "hero.bubble": "Welcome! I'm Rafeef — I'll show you around the house.",
    "cta.whatsapp": "Order on WhatsApp",
    "val.1": "Natural thread",
    "val.2": "Sewn by hand",
    "val.3": "Needle embroidery",
    "val.4": "Made in Lebanon",
    "val.5": "Limited pieces",
    "rooms.eyebrow": "The rooms of the house",
    "rooms.title": "Every room a story, every piece a guest.",
    "f.all": "All",
    "f.dresses": "Dresses",
    "f.sets": "Sets",
    "f.shirts": "Shirts",
    "f.jackets": "Jackets",
    "product.tag": "Handmade",
    "product.cta": "Ask about this piece",
    "hm.eyebrow": "Made by hand",
    "hm.title": "The magic comes from every land; the sewing is by hand.",
    "hm.lead": "We borrow stitches and cloths from many cultures — kantha, cross-stitch, block printing — and bring them together within the walls of our home in Lebanon.",
    "hm.s1t": "We choose the thread",
    "hm.s1": "Natural linen and cotton that breathe with you.",
    "hm.s2t": "We draw and embroider",
    "hm.s2": "Every flower is sketched first, then stitched by needle.",
    "hm.s3t": "We sew your piece",
    "hm.s3": "Limited pieces, sewn slowly and with love.",
    "hills.eyebrow": "On the hills",
    "hills.title": "As if I were a butterfly.",
    "hills.lead": "Rafa pieces outside the house — among the wind, the thyme and the hills of Lebanon.",
    "talks.eyebrow": "Gentle talks",
    "talks.title": "Stories from the sewing table.",
    "talks.more": "Read the story",
    "t1.t": "Rafeef among the flowers",
    "t1.p": "On the wildflowers that inspire our embroidery, and how they travel from field to fabric.",
    "t2.t": "Why linen?",
    "t2.p": "A cloth that grows with you and softens with every wash.",
    "t3.t": "Caring for your piece",
    "t3.p": "Simple tips to keep your embroidered piece with you for years.",
    "order.eyebrow": "How to order",
    "order.title": "Three steps and a cup of coffee.",
    "order.1": "Pick your piece from the rooms of the house.",
    "order.2": "Message us on WhatsApp or Instagram with your size.",
    "order.3": "We sew it and deliver it to you, in Lebanon and abroad.",
    "footer.home": "Our home is in Lebanon.",
    "footer.note": "© 2026 Rafa Atelier — demo",
    "alt.hills": "Model in a green hijab and embroidered white dress on the hills of Lebanon",
    "alt.sitting": "Model seated in an embroidered sage dress",
    "alt.rafeef": "Illustration of Rafeef, the lady of the house, in a green pinafore",
    "alt.kantha": "Block-printed blouse with a hand-embroidered white bib",
    "alt.butterfly": "Model in a pink hijab holding a bunch of wild thyme",
    "alt.grey": "Grey dress embroidered with wildflowers",
    "wa.general": "Hello Rafa Atelier 🌿 I'd like to ask about your pieces.",
    "wa.piece": "Hello Rafa Atelier 🌿 I'd like to ask about: ",
    toggle: "ع",
  },
};

const PRODUCTS = [
  { img: "grey-dress", cat: "dresses",
    ar: ["فستان سنابل الرماد", "كتّانٌ رماديّ ناعم، وأزهارٌ برّية مطرّزة على الكتفين."],
    en: ["Ash & Wheat Dress", "Soft grey linen with wildflowers embroidered across the shoulders."] },
  { img: "vest-set", cat: "sets",
    ar: ["طقم البلوط", "صدريّة وتنورة بلون القهوة، تتناثر عليهما وردات صغيرة بالإبرة."],
    en: ["The Acorn Set", "A coffee-toned vest and skirt scattered with tiny hand-stitched roses."] },
  { img: "cardigan-dress", cat: "sets",
    ar: ["طقم التوليب", "سترة رمادية خفيفة فوق فستانٍ أسود تزيّنه زهرتا توليب."],
    en: ["The Tulip Set", "A light grey cardigan over a black dress adorned with two tulips."] },
  { img: "denim-shirt", cat: "shirts",
    ar: ["قميص اللطافة", "دنيم فاتح بتطريزٍ متقاطع يشبه مفارش الجدّات."],
    en: ["The Gentle Shirt", "Light denim with cross-stitch like a grandmother's tablecloth."] },
  { img: "kantha-top", cat: "shirts",
    ar: ["بلوزة الحكاية", "قماشٌ مطبوع بالقوالب، وصدرٌ أبيض بغرز الكانثا والورد."],
    en: ["The Storyteller Blouse", "Block-printed cotton with a white kantha-stitched bib and roses."] },
  { img: "embroidered-jackets", cat: "jackets",
    ar: ["سترات الحديقة", "حديقةٌ كاملة مطرّزة على قماشٍ أبيض."],
    en: ["Garden Jackets", "A whole garden embroidered on white cloth."] },
  { img: "tulip-dress", cat: "dresses",
    ar: ["فستان التوليب الليلي", "أسودُ هادئ، وصفٌّ من التوليب الورديّ عند الخصر."],
    en: ["Night Tulip Dress", "Quiet black with a row of pink tulips at the waist."] },
  { img: "blue-dress", cat: "dresses",
    ar: ["فستان السماء", "أزرقُ صافٍ، ووردةٌ واحدة تكفي."],
    en: ["Sky Dress", "Clear blue — and a single rose is enough."] },
  { img: "floral-dresses", cat: "dresses",
    ar: ["فساتين الربيع", "زهورٌ صغيرة وحوافّ مخرّمة كنسيم نيسان."],
    en: ["Spring Dresses", "Tiny blooms and scalloped hems, like an April breeze."] },
  { img: "pink-dress", cat: "dresses",
    ar: ["فستان الورد المجفّف", "ياقةٌ مستديرة وشرائط وردية على قماشٍ مزهّر."],
    en: ["Dried Rose Dress", "A rounded collar and rose ribbons on a floral print."] },
  { img: "pattern-dress", cat: "dresses",
    ar: ["فستان النافذة", "نقشةٌ هندسية ناعمة وياقةٌ بيضاء صغيرة."],
    en: ["Window Dress", "A soft geometric print with a small white collar."] },
  { img: "linen-rack", cat: "dresses",
    ar: ["فستان الكتّان الطويل", "كتّانٌ طبيعيّ بأزرارٍ داكنة وأكمامٍ منفوخة."],
    en: ["Long Linen Dress", "Natural linen with dark buttons and gathered sleeves."] },
  { img: "striped-shirts", cat: "shirts",
    ar: ["قمصان الصباح", "خطوطٌ ودنيم، وتطريزٌ صغير كالتوقيع."],
    en: ["Morning Shirts", "Stripes and denim, with a little embroidery like a signature."] },
  { img: "pastel-shirts", cat: "shirts",
    ar: ["قمصان الألوان الهادئة", "ورديّ، خوخيّ، رماديّ وزيتيّ — لكل مزاجٍ قميص."],
    en: ["Quiet Colour Shirts", "Pink, peach, grey and olive — a shirt for every mood."] },
];

let lang = "ar";
let filter = "all";

const t = (key) => STRINGS[lang][key] ?? key;
const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

function renderProducts() {
  const grid = document.getElementById("products");
  const items = PRODUCTS.filter((p) => filter === "all" || p.cat === filter);
  grid.innerHTML = items
    .map((p) => {
      const [name, desc] = p[lang];
      return `
        <article class="product">
          <div class="arch stitch">
            <img src="img/${p.img}.jpg" alt="${name}" loading="lazy" />
          </div>
          <div class="product-body">
            <span class="product-tag">${t("product.tag")}</span>
            <h3>${name}</h3>
            <p>${desc}</p>
            <a class="product-cta" href="${waLink(t("wa.piece") + name)}" target="_blank" rel="noopener">
              <svg aria-hidden="true"><use href="#wa"/></svg>${t("product.cta")}
            </a>
          </div>
        </article>`;
    })
    .join("");
}

function applyLang(next) {
  lang = next;
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = t("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    el.alt = t(el.dataset.i18nAlt);
  });
  document.querySelectorAll("[data-wa-general]").forEach((el) => {
    el.href = waLink(t("wa.general"));
    el.target = "_blank";
    el.rel = "noopener";
  });

  const toggle = document.getElementById("langToggle");
  toggle.textContent = t("toggle");
  toggle.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");

  renderProducts();
  try {
    localStorage.setItem("rafa-lang", lang);
  } catch (e) {}
}

function setupFilters() {
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      filter = chip.dataset.filter;
      document.querySelectorAll(".chip").forEach((c) => {
        const on = c === chip;
        c.classList.toggle("is-active", on);
        c.setAttribute("aria-pressed", String(on));
      });
      renderProducts();
    });
  });
}

function setupMenu() {
  const btn = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  const close = () => {
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  };
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
}

function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));
}

document.documentElement.classList.remove("no-js");

let saved = "ar";
try {
  saved = localStorage.getItem("rafa-lang") || "ar";
} catch (e) {}

applyLang(saved === "en" ? "en" : "ar");
setupFilters();
setupMenu();
setupReveal();

document.getElementById("langToggle").addEventListener("click", () => {
  applyLang(lang === "ar" ? "en" : "ar");
});
