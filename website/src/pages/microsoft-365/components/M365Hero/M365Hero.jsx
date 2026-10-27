import Icon from '@/components/ui/Icon/Icon.jsx';
import { usePathname } from '@/app/router.js';
import { audiences } from '@/pages/microsoft-365/m365Content.js';
import styles from './M365Hero.module.css';

// Section hero for Microsoft 365 pages, with the audience switcher (individuals / business / …).
export default function M365Hero({ eyebrow, title, body, primary, secondary, image, compact = false, children }) {
  const pathname = usePathname();
  return (
    <section className={`${styles.hero} ${compact ? styles.compact : ''}`}>
      {image && <img className={styles.bg} src={image} alt="" />}
      <div className={styles.inner}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
        {body && <p className={styles.body}>{body}</p>}
        {(primary || secondary) && (
          <div className={styles.actions}>
            {primary && <a href={primary.href} className={styles.primary}>{primary.label}</a>}
            {secondary && <a href={secondary.href} className={styles.secondary}>{secondary.label} <Icon name="arrowSmall" /></a>}
          </div>
        )}
        {children}
        {!compact && (
          <nav className={styles.audiences} aria-label="Microsoft 365 for">
            {audiences.map((a) => (
              <a key={a.href} href={a.href} aria-current={pathname === a.href ? 'page' : undefined}>{a.label}</a>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
