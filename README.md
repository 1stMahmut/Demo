# Verona Clothes — demo website

Static demo for [@veronaclothesshop](https://www.instagram.com/veronaclothesshop/), a women's fashion shop in Beirut with three branches.

**Design direction: Art Deco**, softened to match the stores themselves: gold arched frames (like the store mirrors and rails), a glowing peach circle (the lit VERONA sign), sunburst fan motifs, blush walls and black-and-ivory. The logo is rebuilt in CSS with the three-bar "E".

- English / Arabic toggle (full RTL layout, El Messiri font for Arabic)
- "New this season" with filters (New in, Jackets & coats, Knitwear, Sets & gilets, Denim); tap a piece → choose size and delivery or branch pickup → ready-written WhatsApp message
- Look of the week (from the "Full outfit available at Verona" posts)
- Three branches: Beirut Sabil St, Hamra Leon St, Tarik Jdideh, each with "Reserve my size" and Google Maps directions
- Delivery $4, exchange within 3 days (no refunds), Instagram strip
- Photos in `img/` are cropped from the shop's own Instagram posts

## Run
Open `index.html` in a browser. There's no build step.

## Before showing it live
- WhatsApp goes to +961 79 076 606 (`WHATSAPP_NUMBER` in `app.js`), the Tarik Jdideh number in the bio; confirm it.
- Product names, sizes (S–XXL) and descriptions are placeholders; there are no prices on purpose.
- Map links are searches; replace them with each branch's exact Google Maps pin.
- The previous demo (Maison Rose) is kept on the `archive/maison-rose` branch.
