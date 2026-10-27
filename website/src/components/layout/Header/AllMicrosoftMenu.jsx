import Link from '@/components/ui/Link/Link.jsx';
import { allMicrosoft, hrefFor } from '@/data/site.js';
import styles from './Header.module.css';

export default function AllMicrosoftMenu() {
  return (
    <div className={styles.mega} aria-label="All Microsoft">
      <div className={styles.megaInner}>
        <div className={styles.megaCols}>
          {allMicrosoft.map((col) => (
            <div key={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((l) => <li key={l}><Link href={hrefFor(l)}>{l}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <Link href="/sitemap" className={styles.sitemap}>View Sitemap</Link>
      </div>
    </div>
  );
}
