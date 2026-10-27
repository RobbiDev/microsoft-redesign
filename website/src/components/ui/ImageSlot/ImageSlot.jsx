import styles from './ImageSlot.module.css';

// Stand-in for real imagery. Pass `src` once you have an asset.
export default function ImageSlot({ src, alt = '', placeholder, className = '' }) {
  if (src) return <img className={`${styles.slot} ${className}`} src={src} alt={alt} loading="lazy" decoding="async" />;
  return (
    <div className={`${styles.slot} ${styles.empty} ${className}`} role="img" aria-label={placeholder}>
      <span>{placeholder}</span>
    </div>
  );
}
