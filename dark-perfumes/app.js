// Dark Perfumes demo — catalogue, filters, bag and WhatsApp checkout
const WHATSAPP_NUMBER = "96176620466"; // 76/620466 from the TikTok bio

// Clean bottle shots from Fragrantica's image CDN (id = Fragrantica perfume id)
const img = id => `https://fimgs.net/mdimg/perfume/375x500.${id}.jpg`;

const PRODUCTS = [
  { id: "le-male-elixir", house: "Jean Paul Gaultier", name: "Le Male Elixir", for: "men", price: 7, views: "367.3K", tag: "Best seller", hot: true, fid: 81642, notes: "Lavender · Honey · Tonka" },
  { id: "swy-absolutely", house: "Emporio Armani", name: "Stronger With You Absolutely", for: "men", price: 7, views: "151.8K", tag: "Trending", hot: true, fid: 64501, notes: "Rum · Chestnut · Vanilla" },
  { id: "imagination", house: "Louis Vuitton", name: "Imagination", for: "men", price: 6, views: "33.6K", fid: 67370, notes: "Citron · Black tea · Ambroxan" },
  { id: "jadore", house: "Dior", name: "J'adore", for: "women", price: 6, views: "26.7K", tag: "Only 6$", fid: 210, notes: "Pear · Jasmine · Rose" },
  { id: "born-in-roma", house: "Valentino", name: "Born in Roma Intense", for: "men", price: 7, views: "5.4K", fid: 78740, notes: "Vanilla · Lavender · Vetiver" },
  { id: "eros-flame", house: "Versace", name: "Eros Flame", for: "men", price: 7, views: "2.6K", fid: 52180, notes: "Mandarin · Pepper · Vanilla" },
  { id: "eros", house: "Versace", name: "Eros", for: "men", price: 7, views: "2.6K", fid: 16657, notes: "Mint · Green apple · Tonka" },
  { id: "sauvage-elixir", house: "Dior", name: "Sauvage Elixir", for: "men", price: 7, views: "2.5K", fid: 68415, notes: "Spices · Lavender · Licorice" },
  { id: "yara", house: "Lattafa", name: "Yara", for: "women", price: 6, views: "1.8K", tag: "New", fid: 76880, notes: "Orchid · Tropical fruit · Vanilla" }
];
const BEST = ["le-male-elixir", "swy-absolutely", "imagination", "jadore"];

const $ = s => document.querySelector(s);
const byId = id => PRODUCTS.find(p => p.id === id);
const wa = text => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// Elegant line-drawn bottle shown if a remote photo fails to load
const FALLBACK = `<div class="fallback"><svg viewBox="0 0 100 140" fill="none" stroke="#b8925a" stroke-width="1.4">
  <rect x="40" y="6" width="20" height="16"/><rect x="44" y="22" width="12" height="10"/>
  <rect x="18" y="32" width="64" height="100" rx="6"/><path d="M30 60h40M30 104h40"/>
  <text x="50" y="87" text-anchor="middle" font-family="Georgia" font-size="11" fill="#b8925a" stroke="none">DP</text></svg></div>`;

function photo(p, alt = "") {
  return `<img src="${img(p.fid)}" alt="${alt}" loading="lazy" referrerpolicy="no-referrer"
    onerror="this.replaceWith(document.createRange().createContextualFragment(FALLBACK))">`;
}

/* ---------- catalogue ---------- */
let filter = "all", query = "";

function render() {
  const q = query.trim().toLowerCase();
  const list = PRODUCTS.filter(p =>
    (filter === "all" || (filter === "best" ? BEST.includes(p.id) : p.for === filter)) &&
    (!q || `${p.name} ${p.house} ${p.notes}`.toLowerCase().includes(q))
  );
  const cards = list.map((p, i) => `
    <article class="card" style="animation-delay:${i * 60}ms">
      ${p.tag ? `<span class="tag${p.hot ? " hot" : ""}">${p.hot ? "🔥 " : ""}${p.tag}</span>` : ""}
      <div class="plate">${photo(p, `${p.name} bottle`)}</div>
      <div class="card-body">
        <span class="house">Inspired by ${p.house}</span>
        <h3>${p.name}</h3>
        <span class="notes-line">${p.notes}</span>
        <div class="card-foot">
          <span class="price">${p.price}$<small>${p.views} views</small></span>
          <button class="add" data-add="${p.id}">Add</button>
        </div>
      </div>
    </article>`).join("");
  const more = `
    <article class="card more">
      <span class="big">200+</span>
      <p>more scents in stock.<br>Tell us the one you love.</p>
      <a class="btn btn-ghost" href="${wa("Hi Dark Perfumes! Do you have ")}" target="_blank" rel="noopener">Ask on WhatsApp</a>
    </article>`;
  $("#grid").innerHTML = list.length ? cards + (q ? "" : more)
    : `<p class="empty">Not listed here — we have 200+ more. <a href="${wa(`Hi! Do you have ${query}?`)}" target="_blank" rel="noopener">Ask us on WhatsApp</a>.</p>`;
}

document.querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => {
  document.querySelectorAll(".chip").forEach(x => x.classList.toggle("is-on", x === c));
  filter = c.dataset.filter;
  render();
}));
$("#search").addEventListener("input", e => { query = e.target.value; render(); });

/* ---------- bag ---------- */
let bag = {};
try { bag = JSON.parse(localStorage.getItem("dp-bag")) || {}; } catch (_) {}
const save = () => { try { localStorage.setItem("dp-bag", JSON.stringify(bag)); } catch (_) {} };

function renderBag() {
  const ids = Object.keys(bag).filter(byId);
  const count = ids.reduce((n, id) => n + bag[id], 0);
  const total = ids.reduce((n, id) => n + bag[id] * byId(id).price, 0);
  $("#bagCount").textContent = count;
  $("#bagCount").classList.toggle("has", count > 0);
  $("#bagTotal").textContent = `${total}$`;
  $("#bagList").innerHTML = ids.length ? ids.map(id => {
    const p = byId(id);
    return `<li>
      <div class="thumb">${photo(p)}</div>
      <div><span class="house">${p.house}</span><h4>${p.name}</h4>
        <div class="qty"><button data-dec="${id}" aria-label="Less">−</button>${bag[id]}<button data-inc="${id}" aria-label="More">+</button></div></div>
      <span class="line-price">${bag[id] * p.price}$</span>
    </li>`;
  }).join("") : `<li class="bag-empty">Your bag is waiting for a scent.</li>`;

  const lines = ids.map(id => `• ${bag[id]} × ${byId(id).name} (${byId(id).house}) — ${bag[id] * byId(id).price}$`);
  const checkout = $("#checkout");
  checkout.href = wa(`Hi Dark Perfumes! I'd like to order:\n${lines.join("\n")}\nTotal: ${total}$\n\nName:\nArea:`);
  checkout.classList.toggle("disabled", !ids.length);
}

function add(id) {
  bag[id] = (bag[id] || 0) + 1;
  save(); renderBag();
  $("#bagBtn").classList.remove("bump"); void $("#bagBtn").offsetWidth; $("#bagBtn").classList.add("bump");
  toast(`${byId(id).name} added to your bag`);
}

document.addEventListener("click", e => {
  const t = e.target.closest("[data-add],[data-inc],[data-dec]");
  if (!t) return;
  if (t.dataset.add) add(t.dataset.add);
  if (t.dataset.inc) { bag[t.dataset.inc]++; save(); renderBag(); }
  if (t.dataset.dec) { if (--bag[t.dataset.dec] <= 0) delete bag[t.dataset.dec]; save(); renderBag(); }
});

function openBag(open) {
  $("#drawer").classList.toggle("open", open);
  $("#drawer").setAttribute("aria-hidden", !open);
  $("#scrim").hidden = !open;
}
$("#bagBtn").addEventListener("click", () => openBag(true));
$("#closeBag").addEventListener("click", () => openBag(false));
$("#scrim").addEventListener("click", () => openBag(false));
document.addEventListener("keydown", e => e.key === "Escape" && openBag(false));

let toastTimer;
function toast(msg) {
  $("#toast").textContent = msg;
  $("#toast").classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $("#toast").classList.remove("show"), 2200);
}

/* ---------- static bits ---------- */
$("#heroImg").src = img(81642);
$("#sigImg").src = img(64501);
[$("#heroImg"), $("#sigImg")].forEach(el => el.onerror = () => el.replaceWith(document.createRange().createContextualFragment(FALLBACK)));
$("#heroWa").href = $("#footWa").href = wa("Hi Dark Perfumes! I saw your website.");
const words = PRODUCTS.map(p => p.name).concat(["Delivery all over Lebanon", "200+ scents", "From 6$"]);
$("#ticker").innerHTML = words.concat(words).map(w => `<span>${w}</span>`).join("");

render();
renderBag();
