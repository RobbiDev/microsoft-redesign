import { products } from '@/data/products.js';
import { asset } from '@/app/base.js';

// Copy for the Microsoft Store landing page (/store).

export const storeHero = {
  title: 'Everything Microsoft, in one place.',
  body: 'Surface, Xbox, Microsoft 365 and Windows PCs, with free shipping and easy returns on every order.',
  primary: { label: 'Shop Surface', href: '/store/surface' },
  secondary: { label: 'Shop Xbox', href: '/store/xbox' },
  image: asset('/images/products/surface-laptop-ultra.avif'),
};

export const categories = [
  { label: 'Surface', href: '/store/surface', image: asset('/images/products/surface-laptop-13.avif'), theme: 'light' },
  { label: 'Xbox', href: '/store/xbox', image: asset('/images/products/xbox-series-x.avif') },
  { label: 'Microsoft 365', href: '/store/microsoft-365', image: asset('/images/products/microsoft-365.avif'), theme: 'light' },
  { label: 'Windows PCs', href: '/store/windows-pcs', image: asset('/images/products/windows-rtx-spark.avif') },
  { label: 'Accessories', href: '/store/accessories', image: asset('/images/products/xbox-controller.avif') },
  { label: 'Xbox Game Pass', href: '/store/xbox-game-pass', image: asset('/images/products/xbox-game-pass.avif') },
];

export const featured = {
  title: 'Featured',
  // The Windows card is a campaign, not something you can buy, so it's left out of the shop grid.
  products: products.filter((p) => p.id !== 'windows'),
};

export const perks = [
  { title: 'Free shipping', body: 'Standard delivery on every order, with no minimum.', icon: 'M3 7h11v9H3zM14 10h4l3 3v3h-7zM7 18.5a1.5 1.5 0 1 0 0 .01M17 18.5a1.5 1.5 0 1 0 0 .01' },
  { title: 'Easy returns', body: 'Changed your mind? Send it back within 60 days.', icon: 'M4 12a8 8 0 1 0 2.4-5.7M4 4v4h4' },
  { title: 'Pay over time', body: 'Split eligible purchases into monthly payments.', icon: 'M3 6h18v12H3zM3 10h18M7 15h4' },
  { title: 'Trade in for cash', body: 'Get money back for the devices you no longer use.', icon: 'M7 7h11l-3-3M17 17H6l3 3' },
];
