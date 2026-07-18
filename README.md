# Dé-Féll Website

First visual and structural version of the Dé-Féll fashion e-commerce website.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build is written to `dist/`.

## Add Products

All placeholder products live in `src/data/products.js`.

Add a product object with:

```js
{
  id: 'unique-id',
  slug: 'product-url-slug',
  category: 'accessories', // accessories, jewelry, or bags
  name: 'Product Name',
  price: '$000',
  description: 'Short product description.',
  details: ['Material', 'Construction note'],
  images: ['/images/products/example-01.jpg', '/images/products/example-02.jpg'],
  availability: 'In stock',
}
```

Product routes are generated from `category` and `slug`, for example `/bags/soft-carry-satchel`.

## Replace Product Images

Place real product images in `public/images/products/`, then update each product's `images` array in `src/data/products.js`.

Use root-relative paths:

```js
images: ['/images/products/bag-name-01.jpg', '/images/products/bag-name-02.jpg']
```

The first image is the primary product image. The second image, when present, becomes the hover/secondary image on desktop.

## Replace Campaign Images

Campaign homepage content lives in `src/data/campaignImages.js`.

Place real campaign images in `public/images/campaign/`, then update each campaign item:

```js
{
  id: 'campaign-01',
  label: 'LOOK 01',
  alt: 'Dé-Féll campaign image description',
  src: '/images/campaign/look-01.jpg',
  width: 390,
  x: 46,
  y: 86,
}
```

The `x` and `y` values are starting positions as percentages inside the draggable canvas. Visitor-adjusted positions are saved in localStorage.

## Deploy to GitHub Pages

The Vite base path is configured in `vite.config.js` as `/WEBSITE-/`.

1. Push the repository to GitHub as `WEBSITE-`.
2. In GitHub, open Settings -> Pages.
3. Set Source to GitHub Actions.
4. Push to `main`, or run the `Deploy to GitHub Pages` workflow manually.

The expected Pages URL is:

```text
https://dorfellous.github.io/WEBSITE-/
```
