# Rafa Atelier (دار رفا) — demo website

Static demo site for [@rafa_atelier.lb](https://www.instagram.com/rafa_atelier.lb), a handmade modest-fashion atelier in Lebanon.

**Design direction:** Cottagecore (handmade textures, florals, storybook mascot) calmed with Japandi restraint (space, natural palette). The brand's illustrated character, Rafeef, guides visitors through "the house".

- Arabic-first (RTL) with an English toggle (remembered per browser)
- Seasonal banner using the atelier's own caption, with a "This season" filter
- Filterable collection; tap a piece for a quick view (story, fabric, prev/next, WhatsApp order)
- Handmade process, lookbook, "Gentle Talks" journal, how to order
- Ordering through WhatsApp with a pre-filled message per piece

## Run
Open `index.html` in a browser — no build step.

## Share a live link
- **GitHub Pages:** repo Settings → Pages → Deploy from a branch → `main`, folder `/ (root)`. The demo is then at https://1stmahmut.github.io/demo/
- **Netlify Drop:** drag this project folder onto https://app.netlify.com/drop.

## Before showing it live
- Set the real number in `app.js` → `WHATSAPP_NUMBER` (currently a placeholder)
- Photos in `img/` are cropped from Instagram screenshots (small ones upscaled); swap in originals for sharper images
- Product names, stories and fabrics are placeholder copy written in the brand's voice

---

# Dark Perfumes — demo website (`dark-perfumes/`)

Static demo for [@dark_perfumes1](https://www.tiktok.com/@dark_perfumes1) on TikTok, a Lebanese perfume shop.

**Design direction:** Tenebrism (a near-black page where each bottle stands in its own pool of light) with luxury serif type and thin Art Deco gold lines.

- Clean bottle photos loaded from Fragrantica's image CDN (`fimgs.net`), with a line-drawn bottle shown if one fails to load
- Filter by him / her / most viewed, plus search; a "200+ more" card sends people to WhatsApp
- Bag with quantities; checkout opens WhatsApp (76/620466) with the order already written out
- Delivery line in Arabic from the bio; works on phones

Open `dark-perfumes/index.html` to view it. With GitHub Pages on, it is at https://1stmahmut.github.io/demo/dark-perfumes/

Before showing it live: confirm prices (6$/7$ come from the TikTok videos; others are guesses) and swap in the shop's own photos if wanted.
