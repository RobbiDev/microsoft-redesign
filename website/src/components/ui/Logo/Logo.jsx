import styles from './Logo.module.css';
import Link from '@/components/ui/Link/Link.jsx';

export default function Logo({ small = false }) {
  return (
    <Link href="/" className={`${styles.logo} ${small ? styles.small : ''}`} aria-label="Microsoft home">
      <span className={styles.squares} aria-hidden="true"><i /><i /><i /><i /></span>
      Microsoft
    </Link>
  );
}
