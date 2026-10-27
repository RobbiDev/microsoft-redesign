import Icon from '@/components/ui/Icon/Icon.jsx';
import { storeHero } from '@/pages/store/storeContent.js';
import styles from './StoreHero.module.css';
import Link from '@/components/ui/Link/Link.jsx';

export default function StoreHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 className={styles.title}>{storeHero.title}</h1>
          <p className={styles.body}>{storeHero.body}</p>
          <div className={styles.actions}>
            <Link href={storeHero.primary.href} className={styles.primary}>{storeHero.primary.label}</Link>
            <Link href={storeHero.secondary.href} className={styles.secondary}>
              {storeHero.secondary.label} <Icon name="arrowSmall" />
            </Link>
          </div>
        </div>
        <div className={styles.media}>
          <img src={storeHero.image} alt="" />
        </div>
      </div>
    </section>
  );
}
