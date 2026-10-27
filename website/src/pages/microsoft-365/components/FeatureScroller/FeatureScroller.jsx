import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/Icon/Icon.jsx';
import useDragScroll from '@/hooks/useDragScroll.js';
import styles from './FeatureScroller.module.css';

// Horizontally scrolling feature cards: trackpad, touch and mouse drag, plus arrows.
export default function FeatureScroller({ id, eyebrow, title, items }) {
  const scrollerRef = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  useDragScroll(scrollerRef, styles.dragging);

  useEffect(() => {
    const el = scrollerRef.current;
    const update = () => setEdges({ start: el.scrollLeft <= 1, end: el.scrollLeft >= el.scrollWidth - el.clientWidth - 1 });
    update();
    el.addEventListener('scroll', update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => {
      el.removeEventListener('scroll', update);
      observer.disconnect();
    };
  }, []);

  const step = (dir) => {
    const el = scrollerRef.current;
    const card = el.querySelector('article');
    el.scrollBy({ left: dir * (card.offsetWidth + 24), behavior: 'smooth' });
  };

  return (
    <section id={id} className={styles.section}>
      <div className={styles.head}>
        <div>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.arrows}>
          <button className="icon-btn" onClick={() => step(-1)} disabled={edges.start} aria-label="Previous features"><Icon name="arrowLeft" /></button>
          <button className="icon-btn" onClick={() => step(1)} disabled={edges.end} aria-label="Next features"><Icon name="arrowRight" /></button>
        </div>
      </div>
      <div ref={scrollerRef} className={styles.scroller}>
        <div className={styles.track}>
          {items.map((f) => (
            <article key={f.title} className={styles.card}>
              <div className={styles.media}><img src={f.image} alt={f.alt} loading="lazy" decoding="async" /></div>
              <div className={styles.text}>
                {f.tag && <span className={styles.tag}>{f.tag}</span>}
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
