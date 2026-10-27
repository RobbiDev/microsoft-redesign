import Icon from '@/components/ui/Icon/Icon.jsx';
import styles from './StillRedesigningPage.module.css';

// Shown for every page that hasn't been redesigned yet (the site's 404).
export default function StillRedesigningPage({ path }) {
  return (
    <section className={styles.page}>
      <div className={styles.logo} aria-hidden="true">
        <i /><i /><i /><i />
      </div>
      <p className={styles.eyebrow}>Work in progress</p>
      <h1 className={styles.title}>Still being redesigned</h1>
      <p className={styles.body}>
        This page hasn’t been reimagined yet. The redesign is happening one page at a time, so check back soon.
      </p>
      <code className={styles.path}>{path}</code>
      <div className={styles.actions}>
        <a href="/" className={styles.primary}>Back to home</a>
        <a href="/store" className={styles.secondary}>Visit the Microsoft Store <Icon name="arrowSmall" /></a>
      </div>
      <a className={styles.original} href="https://www.microsoft.com/" target="_blank" rel="noreferrer">
        See the current microsoft.com
      </a>
    </section>
  );
}

StillRedesigningPage.title = 'Still being redesigned – Microsoft Redesign';
