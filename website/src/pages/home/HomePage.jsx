import Hero from './components/Hero/Hero.jsx';
import Explore from './components/Explore/Explore.jsx';
import Shortcuts from './components/Shortcuts/Shortcuts.jsx';
import FeatureBanner from './components/FeatureBanner/FeatureBanner.jsx';
import Stories from './components/Stories/Stories.jsx';
import FeaturedCarousel from './components/FeaturedCarousel/FeaturedCarousel.jsx';
import Follow from './components/Follow/Follow.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Explore />
      <Shortcuts />
      <FeatureBanner />
      <Stories />
      <FeaturedCarousel />
      <Follow />
    </>
  );
}

HomePage.title = 'Microsoft – Redesign';
