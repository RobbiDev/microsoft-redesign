import { useState } from 'react';
import Icon from '@/components/ui/Icon/Icon.jsx';
import useMediaQuery from '@/hooks/useMediaQuery.js';
import Link from '@/components/ui/Link/Link.jsx';
import { footerCols, hrefFor, legal } from '@/data/site.js';
import styles from './Footer.module.css';

export default function Footer() {
  // On narrow screens the columns become an accordion with one section open at a time.
  const narrow = useMediaQuery('(max-width: 719px)');
  const [openCol, setOpenCol] = useState(null);

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.cols}>
          {footerCols.map((col) => {
            const open = !narrow || openCol === col.title;
            return (
              <div key={col.title} className={styles.col}>
                {narrow ? (
                  <button
                    className={styles.colHead}
                    aria-expanded={open}
                    onClick={() => setOpenCol((t) => (t === col.title ? null : col.title))}
                  >
                    <h4>{col.title}</h4>
                    <Icon name="chevronDown" size={14} strokeWidth={1.4} />
                  </button>
                ) : (
                  <h4 className={styles.colHead}>{col.title}</h4>
                )}
                {open && (
                  <div className={styles.links}>
                    {col.links.map((l) => <Link key={l} href={hrefFor(l)}>{l}</Link>)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={styles.bottom}>
          <button className={styles.locale}>
            <Icon name="globe" size={16} strokeWidth={1.3} /> English (United States)
          </button>
          <a href="/privacy/your-choices" className={styles.privacy}>
            <svg width="30" height="14" viewBox="0 0 30 14" fill="none" aria-hidden="true">
              <rect x="0.75" y="0.75" width="28.5" height="12.5" rx="6.25" stroke="#0b5cd5" strokeWidth="1.5" />
              <path d="M0.75 7A6.25 6.25 0 0 1 7 .75h8v12.5H7A6.25 6.25 0 0 1 .75 7z" fill="#0b5cd5" />
              <path d="M4.5 7l2 2 3.5-4" stroke="#fff" strokeWidth="1.4" />
              <path d="M19.5 4.5l5 5M24.5 4.5l-5 5" stroke="#0b5cd5" strokeWidth="1.4" />
            </svg>
            Your Privacy Choices
          </a>
          <a href="/privacy/consumer-health">Consumer Health Privacy</a>
          <div className={styles.spacer} />
          <nav className={styles.legal} aria-label="Legal">
            {legal.map((l) => <Link key={l} href={hrefFor(l)}>{l}</Link>)}
          </nav>
          <span>© Microsoft 2026</span>
        </div>
      </div>
    </footer>
  );
}
