# SERKAP! — Permainan Parti Malaysia

Permainan parti cari penyamar untuk dimainkan beramai-ramai dengan **satu telefon**.
Siapa Lalang? Siapa Kaki Goreng?

## Struktur folder

```
index.html             Struktur skrin
css/style.css          Gaya reka bentuk (Tema Kopitiam Malam)
js/app.js              Logik permainan, kategori, denda & simpanan
icons/                 Ikon app (SVG + PNG 180/192/512 + maskable)
manifest.webmanifest   Maklumat PWA (nama, ikon, warna)
sw.js                  Service worker — boleh main tanpa internet
vercel.json            Tetapan hosting Vercel
```

Data pemain, geng, markah & Dek Kustom disimpan dalam `localStorage` telefon.

## Kemas kini game

```
git add .
git commit -m "Terangkan perubahan"
git push
```

Vercel akan deploy versi baru secara automatik.
