import styles from './Logo.module.css';

export default function Logo({ small = false }) {
  return (
    <a href="/" className={`${styles.logo} ${small ? styles.small : ''}`} aria-label="Microsoft home">
      <span className={styles.squares} aria-hidden="true"><i /><i /><i /><i /></span>
      Microsoft
    </a>
  );
}
