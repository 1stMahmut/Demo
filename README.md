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
- **GitHub Pages:** repo Settings → Pages → Deploy from a branch → pick the branch, folder `/ (root)`. The demo is then at `https://<user>.github.io/taha-web/rafa-atelier/`.
- **Netlify Drop:** drag the `rafa-atelier` folder onto https://app.netlify.com/drop.

## Before showing it live
- Set the real number in `app.js` → `WHATSAPP_NUMBER` (currently a placeholder)
- Photos in `img/` are cropped from Instagram screenshots (small ones upscaled); swap in originals for sharper images
- Product names, stories and fabrics are placeholder copy written in the brand's voice
