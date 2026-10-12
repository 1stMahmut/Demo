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
    "season.eyebrow": "موسم جديد في الدار",
    "season.quote": "يدخل اللون البني، موسم البلوط واليقطين…",
    "season.cta": "شاهدي قطع الموسم",
    "f.season": "الموسم",
    "guide.rooms": "هنا تسكن القطع. اضغطي على أيّ قطعة لتسمعي حكايتها.",
    "guide.handmade": "هذه سلّتي؛ فيها الخيوط والإبر وكل الحكايات التي لم تُطرَّز بعد.",
    "guide.talks": "تعالي نجلس قليلًا… عندي حكايات صغيرة أحبّ أن أرويها لكِ.",
    "guide.order": "وصلنا إلى آخر الجولة! راسليني، وسأحضّر قطعتكِ بنفسي.",
    "hills.quote": "«القطعة التي تُخاط باليد، تحمل شيئًا من اليد التي خاطتها.»",
    "hills.cite": "— رفيف",
    "product.hint": "اكتشفي الحكاية",
    "qv.fabric": "القماش",
    "qv.work": "العمل",
    "qv.workVal": "تطريز وحياكة يدوية في الدار",
    "qv.size": "المقاس",
    "qv.sizeVal": "راسلينا لنعرف المقاسات المتوفرة",
    "qv.guide": "قطعة واحدة لا تشبه غيرها؛ فكل غرزة فيها مختلفة قليلًا.",
    "qv.cta": "اطلبي هذه القطعة عبر واتساب",
    "qv.season": "من قطع الموسم",
    "alt.vest": "طقم صدرية وتنورة بلون القهوة",
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
    "season.eyebrow": "A new season in the house",
    "season.quote": "Brown walks in — the season of acorns and pumpkins…",
    "season.cta": "See the season's pieces",
    "f.season": "This season",
    "guide.rooms": "This is where the pieces live. Tap any one to hear its story.",
    "guide.handmade": "This is my basket — threads, needles, and all the stories not yet embroidered.",
    "guide.talks": "Come, sit with me a while… I have small stories I'd love to tell you.",
    "guide.order": "We've reached the end of the tour! Message me and I'll prepare your piece myself.",
    "hills.quote": "“A piece sewn by hand carries something of the hand that sewed it.”",
    "hills.cite": "— Rafeef",
    "product.hint": "Discover its story",
    "qv.fabric": "Fabric",
    "qv.work": "Craft",
    "qv.workVal": "Hand-embroidered and sewn in the atelier",
    "qv.size": "Size",
    "qv.sizeVal": "Message us for available sizes",
    "qv.guide": "No two pieces are alike — every stitch is a little different.",
    "qv.cta": "Order this piece on WhatsApp",
    "qv.season": "This season's piece",
    "alt.vest": "Coffee-toned vest and skirt set",
    toggle: "ع",
  },
};

// [name, short line, story, fabric]
const PRODUCTS = [
  { img: "grey-dress", cat: "dresses", season: true,
    ar: ["فستان سنابل الرماد", "كتّانٌ رماديّ ناعم، وأزهارٌ برّية مطرّزة على الكتفين.",
      "حين يبرد الهواء قليلًا ويميل الضوء إلى الذهبيّ، يخرج هذا الفستان من الخزانة. طرّزنا على كتفيه أزهار الحقول البنفسجية والصفراء، وتركنا الأكمام تنتفخ بهدوء كأنها تتنفس.",
      "كتّان طبيعي"],
    en: ["Ash & Wheat Dress", "Soft grey linen with wildflowers embroidered across the shoulders.",
      "When the air cools and the light turns golden, this dress comes out of the wardrobe. Purple and yellow field flowers are stitched across the shoulders, and the sleeves gather softly, as if breathing.",
      "Natural linen"] },
  { img: "vest-set", cat: "sets", season: true,
    ar: ["طقم البلوط", "صدريّة وتنورة بلون القهوة، تتناثر عليهما وردات صغيرة بالإبرة.",
      "بتصميمٍ خاص وحياكة يدوية كاملة. صدريّة بأزرار صغيرة ملوّنة، وتنورة تتناثر عليها ورداتٌ وردية كأنها سقطت من غصن. يُلبس فوق قميص بياقة مخرّمة.",
      "كتّان وقطن"],
    en: ["The Acorn Set", "A coffee-toned vest and skirt scattered with tiny hand-stitched roses.",
      "A special design, sewn entirely by hand. A vest with tiny coloured buttons and a skirt scattered with pink rosebuds, as if they fell from a branch. Worn over a lace-collared shirt.",
      "Linen & cotton"] },
  { img: "cardigan-dress", cat: "sets",
    ar: ["طقم التوليب", "سترة رمادية خفيفة فوق فستانٍ أسود تزيّنه زهرتا توليب.",
      "هذا الفن يزيّن الدار، وهذا الفن قلب رفيف. زهرتا توليب من قماشٍ مربّع عند الخصر، وسترة خفيفة بخياطةٍ ظاهرة وزهرة صغيرة على الكمّ.",
      "قطن وكتّان"],
    en: ["The Tulip Set", "A light grey cardigan over a black dress adorned with two tulips.",
      "This craft adorns the house; this craft is Rafeef's heart. Two gingham tulips at the waist, and a light cardigan with visible stitching and a little flower on the cuff.",
      "Cotton & linen"] },
  { img: "denim-shirt", cat: "shirts",
    ar: ["قميص اللطافة", "دنيم فاتح بتطريزٍ متقاطع يشبه مفارش الجدّات.",
      "من «قمصان اللطافة». تطريزٌ متقاطع بالورد والأوراق على صدرٍ مكشكش، يذكّرنا بمفارش الجدّات وعصريّات الشتاء.",
      "دنيم قطني خفيف"],
    en: ["The Gentle Shirt", "Light denim with cross-stitch like a grandmother's tablecloth.",
      "From our “gentle shirts”. Cross-stitched roses and leaves on a gathered yoke — like a grandmother's tablecloth and winter afternoons.",
      "Light cotton denim"] },
  { img: "kantha-top", cat: "shirts", season: true,
    ar: ["بلوزة الحكاية", "قماشٌ مطبوع بالقوالب، وصدرٌ أبيض بغرز الكانثا والورد.",
      "التطريز في دارنا كثير. قماشٌ مطبوع بالقوالب، وصدرٌ أبيض مُغرَّز بخيوط الكانثا، تتوسطه زهرتان مطرّزتان وحافةٌ حمراء مكشكشة.",
      "قطن مطبوع بالقوالب"],
    en: ["The Storyteller Blouse", "Block-printed cotton with a white kantha-stitched bib and roses.",
      "There is a lot of embroidery in our house. Block-printed cotton, a white bib quilted in kantha stitch, two embroidered flowers and a ruffled red edge.",
      "Block-printed cotton"] },
  { img: "embroidered-jackets", cat: "jackets",
    ar: ["سترات الحديقة", "حديقةٌ كاملة مطرّزة على قماشٍ أبيض.",
      "على كل سترة حديقة مختلفة: ورود، أغصان، وأوراق خضراء. تُلبس فوق فستان بسيط فتصير هي الحكاية.",
      "قطن سميك"],
    en: ["Garden Jackets", "A whole garden embroidered on white cloth.",
      "Each jacket carries a different garden: roses, branches and green leaves. Wear it over a simple dress and it becomes the story.",
      "Heavy cotton"] },
  { img: "tulip-dress", cat: "dresses",
    ar: ["فستان التوليب الليلي", "أسودُ هادئ، وصفٌّ من التوليب الورديّ عند الخصر.",
      "فستان بلا أكمام يُلبس فوق قميص أو تحت سترة. صفٌّ من زهور التوليب الوردية يلتفّ حول الخصر كحزامٍ من حديقة.",
      "كتّان"],
    en: ["Night Tulip Dress", "Quiet black with a row of pink tulips at the waist.",
      "A sleeveless dress to layer over a shirt or under a jacket. A row of pink tulips wraps the waist like a belt from the garden.",
      "Linen"] },
  { img: "blue-dress", cat: "dresses",
    ar: ["فستان السماء", "أزرقُ صافٍ، ووردةٌ واحدة تكفي.",
      "قطعتان بلون السماء: بلوزة واسعة وفستان طويل، ووردةٌ واحدة مطرّزة تكفي لتقول كل شيء.",
      "قطن"],
    en: ["Sky Dress", "Clear blue — and a single rose is enough.",
      "Two sky-coloured layers: a loose top and a long dress — and one embroidered rose says everything.",
      "Cotton"] },
  { img: "floral-dresses", cat: "dresses",
    ar: ["فساتين الربيع", "زهورٌ صغيرة وحوافّ مخرّمة كنسيم نيسان.",
      "قماشٌ أبيض مزهّر بحوافّ مخرّمة، خفيفٌ كنسيم نيسان. لكل فستان زهرته ولونه.",
      "قطن خفيف"],
    en: ["Spring Dresses", "Tiny blooms and scalloped hems, like an April breeze.",
      "White floral cloth with scalloped hems, light as an April breeze. Each dress has its own flower and colour.",
      "Light cotton"] },
  { img: "pink-dress", cat: "dresses",
    ar: ["فستان الورد المجفّف", "ياقةٌ مستديرة وشرائط وردية على قماشٍ مزهّر.",
      "ياقةٌ مستديرة بيضاء، وشرائط وردية تنزل على الصدر، وتنورة مزهّرة بلون الورد حين يجفّ بين صفحات كتاب.",
      "قطن مزهّر"],
    en: ["Dried Rose Dress", "A rounded collar and rose ribbons on a floral print.",
      "A rounded white collar, pink ribbons down the bodice, and a floral skirt the colour of a rose dried between book pages.",
      "Floral cotton"] },
  { img: "pattern-dress", cat: "dresses",
    ar: ["فستان النافذة", "نقشةٌ هندسية ناعمة وياقةٌ بيضاء صغيرة.",
      "نقشة تشبه زجاج النوافذ القديمة، بأزرق ورماديّ هادئين، وياقة بيضاء صغيرة تضيء الوجه.",
      "قطن مطبوع"],
    en: ["Window Dress", "A soft geometric print with a small white collar.",
      "A print like old window glass in calm blue and grey, with a small white collar that lights up the face.",
      "Printed cotton"] },
  { img: "linen-rack", cat: "dresses", season: true,
    ar: ["فستان الكتّان الطويل", "كتّانٌ طبيعيّ بأزرارٍ داكنة وأكمامٍ منفوخة.",
      "كتّان بلونه الطبيعي، وصفّ طويل من الأزرار الداكنة، وأكمام منفوخة تنتهي بكشكش ناعم.",
      "كتّان طبيعي"],
    en: ["Long Linen Dress", "Natural linen with dark buttons and gathered sleeves.",
      "Linen in its natural colour, a long row of dark buttons, and full sleeves that end in a soft ruffle.",
      "Natural linen"] },
  { img: "striped-shirts", cat: "shirts",
    ar: ["قمصان الصباح", "خطوطٌ ودنيم، وتطريزٌ صغير كالتوقيع.",
      "قمصان واسعة لصباحات العمل والمشاوير، على كل واحدٍ منها تطريز صغير كأنه توقيع الدار.",
      "قطن ودنيم"],
    en: ["Morning Shirts", "Stripes and denim, with a little embroidery like a signature.",
      "Loose shirts for workday mornings and errands, each with a small embroidery like the house's signature.",
      "Cotton & denim"] },
  { img: "pastel-shirts", cat: "shirts",
    ar: ["قمصان الألوان الهادئة", "ورديّ، خوخيّ، رماديّ وزيتيّ — لكل مزاجٍ قميص.",
      "القصّة نفسها بأربعة ألوان هادئة. اختاري لون مزاجكِ، أو خذي اثنين.",
      "قطن ناعم"],
    en: ["Quiet Colour Shirts", "Pink, peach, grey and olive — a shirt for every mood.",
      "One cut in four quiet colours. Choose the colour of your mood — or take two.",
      "Soft cotton"] },
];

let lang = "ar";
let filter = "all";

const t = (key) => STRINGS[lang][key] ?? key;
const waLink = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const visibleProducts = () =>
  PRODUCTS.filter((p) =>
    filter === "all" ? true : filter === "season" ? p.season : p.cat === filter
  );

function renderProducts() {
  const grid = document.getElementById("products");
  grid.innerHTML = visibleProducts()
    .map((p) => {
      const [name, desc] = p[lang];
      return `
        <article class="product">
          <button type="button" class="product-open" data-open="${p.img}">
            <div class="arch stitch" data-hint="${t("product.hint")}">
              <img src="img/${p.img}.jpg" alt="${name}" loading="lazy" />
            </div>
          </button>
          <div class="product-body">
            <span class="product-tag">${p.season ? t("qv.season") : t("product.tag")}</span>
            <h3><button type="button" class="product-open" data-open="${p.img}">${name}</button></h3>
            <p>${desc}</p>
            <a class="product-cta" href="${waLink(t("wa.piece") + name)}" target="_blank" rel="noopener">
              <svg aria-hidden="true"><use href="#wa"/></svg>${t("product.cta")}
            </a>
          </div>
        </article>`;
    })
    .join("");
}

// ---------- Quick view ----------
let qvIndex = 0;
const qv = document.getElementById("quickview");

function fillQuickView() {
  const list = visibleProducts();
  const p = list[qvIndex];
  const [name, , story, fabric] = p[lang];
  const img = document.getElementById("qvImg");
  img.src = `img/${p.img}.jpg`;
  img.alt = name;
  document.getElementById("qvName").textContent = name;
  document.getElementById("qvStory").textContent = story;
  document.getElementById("qvFabric").textContent = fabric;
  document.getElementById("qvTag").textContent = p.season ? t("qv.season") : t("product.tag");
  document.getElementById("qvCount").textContent = `${qvIndex + 1} / ${list.length}`;
  document.getElementById("qvWa").href = waLink(t("wa.piece") + name);
}

function openQuickView(imgKey) {
  qvIndex = Math.max(0, visibleProducts().findIndex((p) => p.img === imgKey));
  fillQuickView();
  if (typeof qv.showModal === "function") qv.showModal();
  else qv.setAttribute("open", "");
  document.body.classList.add("qv-open");
}

function stepQuickView(dir) {
  const n = visibleProducts().length;
  qvIndex = (qvIndex + dir + n) % n;
  fillQuickView();
}

function setupQuickView() {
  document.getElementById("products").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open]");
    if (btn) openQuickView(btn.dataset.open);
  });
  document.getElementById("qvClose").addEventListener("click", () => qv.close());
  document.getElementById("qvPrev").addEventListener("click", () => stepQuickView(-1));
  document.getElementById("qvNext").addEventListener("click", () => stepQuickView(1));
  qv.addEventListener("click", (e) => {
    if (e.target === qv) qv.close();
  });
  qv.addEventListener("close", () => document.body.classList.remove("qv-open"));
  qv.addEventListener("keydown", (e) => {
    const rtl = document.documentElement.dir === "rtl";
    if (e.key === "ArrowRight") stepQuickView(rtl ? -1 : 1);
    if (e.key === "ArrowLeft") stepQuickView(rtl ? 1 : -1);
  });
}

function setFilter(next) {
  filter = next;
  document.querySelectorAll(".chip").forEach((c) => {
    const on = c.dataset.filter === next;
    c.classList.toggle("is-active", on);
    c.setAttribute("aria-pressed", String(on));
  });
  renderProducts();
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
  if (qv.open) fillQuickView();
  try {
    localStorage.setItem("rafa-lang", lang);
  } catch (e) {}
}

function setupFilters() {
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => setFilter(chip.dataset.filter));
  });
  document.getElementById("seasonBtn").addEventListener("click", () => {
    setFilter("season");
    document.getElementById("rooms").scrollIntoView({ behavior: "smooth" });
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
setupQuickView();
setupReveal();

document.getElementById("langToggle").addEventListener("click", () => {
  applyLang(lang === "ar" ? "en" : "ar");
});
