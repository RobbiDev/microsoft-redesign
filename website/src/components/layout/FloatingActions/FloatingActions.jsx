import { useEffect, useState } from 'react';
import Icon from '@/components/ui/Icon/Icon.jsx';
import styles from './FloatingActions.module.css';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.dock}>
      {showTop && (
        <button className={styles.top} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to Top <Icon name="arrowUp" />
        </button>
      )}
    </div>
  );
}
