import SplitCard from '@/pages/home/components/SplitCard/SplitCard.jsx';
import { featureBanner } from '@/pages/home/homeContent.js';
import styles from './FeatureBanner.module.css';

export default function FeatureBanner() {
  return (
    <section className={styles.section}>
      <SplitCard {...featureBanner} className={styles.card} />
    </section>
  );
}
