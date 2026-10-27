import ImageSlot from '@/components/ui/ImageSlot/ImageSlot.jsx';
import styles from './SplitCard.module.css';

// Text-on-the-left, image-on-the-right card used by the feature banner and featured carousel.
export default function SplitCard({ title, body, cta, href, placeholder, as: Heading = 'h2', className = '', ...rest }) {
  return (
    <article className={`${styles.card} ${className}`} {...rest}>
      <div className={styles.text}>
        <div className={styles.spacer} />
        <Heading className={styles.title}>{title}</Heading>
        <p className={styles.body}>{body}</p>
        <div className={styles.spacer} />
        <div className={styles.cta}><a href={href} className="btn btn-primary">{cta}</a></div>
      </div>
      <div className={styles.media}>
        <ImageSlot placeholder={placeholder} />
      </div>
    </article>
  );
}
