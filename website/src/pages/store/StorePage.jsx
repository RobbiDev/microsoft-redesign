import StoreHero from './components/StoreHero/StoreHero.jsx';
import CategoryTiles from './components/CategoryTiles/CategoryTiles.jsx';
import ProductGrid from './components/ProductGrid/ProductGrid.jsx';
import StorePerks from './components/StorePerks/StorePerks.jsx';

export default function StorePage() {
  return (
    <>
      <StoreHero />
      <CategoryTiles />
      <ProductGrid />
      <StorePerks />
    </>
  );
}

StorePage.title = 'Microsoft Store – Redesign';
