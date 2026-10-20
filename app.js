/* Maison Rose — demo site */

// Orders go to WhatsApp when a number is set, otherwise to an Instagram DM.
// Fill in the full number from the bio, digits only, e.g. "96171XXXXXX".
const WHATSAPP_NUMBER = "96171123456";
const INSTAGRAM = "maisonrose.lb";

// Placeholder photos from Unsplash. Swap any URL for the shop's own photo.
const U = id => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=75`;
const PHOTOS = {
  hero: U("1561181286-d3fee7d55364"),
  heroSmall: U("1518895949257-7621c3c786d7"),
  table: U("1464366400600-7168b8af9bc3"),
  bride: U("1519741497674-611481863552"),
  arch: U("1478146896981-b80fe463b330"),
  workshop: U("1487530811176-3780de880c2d")
};

const ITEMS = [
  { id: "blush-box", name: "Blush Rose Box", tag: "pink", also: "boxes", photo: "1561181286-d3fee7d55364", text: "Soft pink roses in our signature round box." },
  { id: "peony", name: "Peony Cloud", tag: "pink", photo: "1455659817273-f96807779a8a", text: "Full pink peonies, wrapped loose and romantic." },
  { id: "red-100", name: "The Grand Red", tag: "red", photo: "1518895949257-7621c3c786d7", text: "A statement bouquet of deep red roses." },
  { id: "tulips", name: "Spring Tulips", tag: "fresh", photo: "1490750967868-88aa4486c946", text: "Mixed tulips, cut fresh this morning." },
  { id: "garden", name: "Garden Mix", tag: "fresh", photo: "1487530811176-3780de880c2d", text: "Seasonal blooms in soft, garden colours." },
  { id: "red-box", name: "Red Rose Box", tag: "red", also: "boxes", photo: "1494972308805-463bc619d34e", text: "Red roses packed close in a black box." },
  { id: "pastel", name: "Pastel Wrap", tag: "pink", photo: "1508610048659-a06b669e3321", text: "Roses, lisianthus and greenery in pastel paper." },
  { id: "white", name: "White Elegance", tag: "fresh", also: "boxes", photo: "1525310072745-f49212b5ac6d", text: "Ivory blooms for weddings, christenings and thank-yous." }
];
const LABEL = { pink: "Pink collection", red: "Red collection", fresh: "Fresh flowers", boxes: "Boxes" };

const $ = s => document.querySelector(s);
const orderLink = text => WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
  : `https://ig.me/m/${INSTAGRAM}`;

// Soft blush panel with the gold flourish, shown if a remote photo fails to load
function fallback(img) {
  const ph = document.createElement("div");
  ph.className = "ph";
  ph.innerHTML = `<span>Maison</span><svg aria-hidden="true"><use href="#flourish"/></svg><span>Rose</span>`;
  img.replaceWith(ph);
}
function photo(src, alt) {
  const img = new Image();
  img.alt = alt;
  img.loading = "lazy";
  img.onerror = () => fallback(img);
  img.src = src;
  return img;
}

/* ---------- collections ---------- */
let filter = "all";
function render() {
  const grid = $("#grid");
  grid.innerHTML = "";
  ITEMS.filter(p => filter === "all" || p.tag === filter || p.also === filter).forEach((p, i) => {
    const card = document.createElement("button");
    card.className = "card";
    card.style.animationDelay = `${i * 70}ms`;
    card.dataset.id = p.id;
    card.innerHTML = `<div class="frame"></div><span class="card-tag">${LABEL[p.tag]}</span><h3>${p.name}</h3>`;
    card.querySelector(".frame").append(photo(U(p.photo), p.name));
    grid.append(card);
  });
}
document.querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => {
  document.querySelectorAll(".chip").forEach(x => x.classList.toggle("is-on", x === c));
  filter = c.dataset.filter;
  render();
}));

/* ---------- lightbox ---------- */
function openBox(p) {
  $("#lbImg").replaceChildren(photo(U(p.photo), p.name));
  $("#lbTag").textContent = LABEL[p.tag];
  $("#lbName").textContent = p.name;
  $("#lbText").textContent = p.text;
  $("#lbOrder").href = orderLink(`Hello Maison Rose! I'd like to order the "${p.name}". Date: … Delivery area: …`);
  $("#lightbox").hidden = false;
  document.body.style.overflow = "hidden";
  $("#closeBox").focus();
}
function closeBox() {
  $("#lightbox").hidden = true;
  document.body.style.overflow = "";
}
$("#grid").addEventListener("click", e => {
  const card = e.target.closest(".card");
  if (card) openBox(ITEMS.find(p => p.id === card.dataset.id));
});
$("#closeBox").addEventListener("click", closeBox);
$("#lightbox").addEventListener("click", e => e.target.id === "lightbox" && closeBox());
document.addEventListener("keydown", e => e.key === "Escape" && closeBox());

/* ---------- static bits ---------- */
document.querySelectorAll("img[data-src]").forEach(el => {
  el.onerror = () => fallback(el);
  el.src = PHOTOS[el.dataset.src];
});
document.querySelectorAll("[data-order]").forEach(a => a.href = orderLink(a.dataset.order));

render();
