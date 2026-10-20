# Maison Rose — demo website

Static demo for [@maisonrose.lb](https://www.instagram.com/maisonrose.lb/) on Instagram, a flower boutique in Adma, Lebanon.

**Design direction:** Luxury Typography and Filigree taken from the logo (black, gold, widely spaced capitals, the curled gold rule) softened with Ethereal blush sections. Arched and round photo frames echo the round logo.

- Photos only, no video: clean placeholder images from Unsplash. If a photo fails to load, a blush panel with the gold logo is shown instead
- Collections filter that mirrors the Instagram highlights (Pink, Red, Fresh, Boxes); tap a piece to see it large and order it
- Sections for weddings and events, workshops, and visiting or ordering
- Every "Order" button opens a ready-written message; works on phones

## Run
Open `index.html` in a browser — no build step.

## Share a live link
GitHub Pages: repo Settings → Pages → Deploy from a branch → `main`, folder `/ (root)`. The site is then at https://1stmahmut.github.io/demo/

## Before showing it live
- WhatsApp orders go to +961 71 123 456 (`WHATSAPP_NUMBER` in `app.js`); confirm it is the shop's number.
- Swap the Unsplash photos in `PHOTOS` and `ITEMS` (`app.js`) for the shop's own work.
- Add the date of the next workshop.
