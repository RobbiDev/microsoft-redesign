import Link from '@/components/ui/Link/Link.jsx';
import { isInsideApp } from '@/app/base.js';
import styles from './StillRedesigningPage.module.css';

// Shown for every page that hasn't been redesigned yet (the site's 404).
export default function StillRedesigningPage() {
  // A path outside this app (e.g. /copilot on microsoft.robbyj.dev) is another redesign that isn't built yet.
  const otherRedesign = !isInsideApp(window.location.pathname);
  return (
    <section className={styles.page}>
      <div className={styles.logo} aria-hidden="true">
        <i /><i /><i /><i />
      </div>
      <h1 className={styles.title}>Still being redesigned</h1>
      <p className={styles.body}>This page is next on the list. Check back soon.</p>
      {otherRedesign ? (
        <Link href="/" outsideApp className={styles.button}>See all redesigns</Link>
      ) : (
        <Link href="/" className={styles.button}>Back to home</Link>
      )}
    </section>
  );
}

StillRedesigningPage.title = 'Still being redesigned – Microsoft Redesign';
