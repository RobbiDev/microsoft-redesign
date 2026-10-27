import styles from './Header.module.css';

export default function Avatar({ me, open, onClick }) {
  return (
    <button className={styles.avatar} onClick={onClick} aria-label="Account" aria-expanded={open}>
      {me.initials}
    </button>
  );
}
