import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/Icon/Icon.jsx';
import ImageSlot from '@/components/ui/ImageSlot/ImageSlot.jsx';
import useDragScroll from '@/hooks/useDragScroll.js';
import styles from './ProductCarousel.module.css';

// A natively scrolling row: touch and trackpads scroll it continuously with momentum, the mouse can
// drag it, and the arrows step one card. Scroll-snap settles it on a card when the motion stops.
// `phase` comes from the Personal/Business switch: 'out' plays the exit, 'in' the staggered entrance.
export default function ProductCarousel({ products, phase = 'idle' }) {
  const [open, setOpen] = useState({});
  const [edges, setEdges] = useState({ start: true, end: false });
  const scrollerRef = useRef(null);
  const toggle = (id) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  useDragScroll(scrollerRef, styles.dragging);

  // Disable the arrows at either end.
  useEffect(() => {
    const el = scrollerRef.current;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setEdges({ start: el.scrollLeft <= 1, end: el.scrollLeft >= max - 1 });
    };
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
    const gap = parseFloat(getComputedStyle(card.parentElement).columnGap) || 0;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: 'smooth' });
  };

  return (
    <div className={`${phase === 'out' ? styles.leaving : ''} ${phase === 'in' ? styles.entering : ''}`}>
      <div ref={scrollerRef} className={styles.scroller}>
        <div className={styles.track}>
          {products.map((p, i) => (
            <article
              key={p.id}
              className={`${styles.card} ${i % 2 ? styles.tall : ''} ${p.theme === 'light' ? styles.light : ''}`}
              style={{ '--i': i }}
              data-open={open[p.id] || undefined}
            >
              <ImageSlot src={p.image} alt={p.alt} placeholder={p.placeholder} className={styles.media} />
              <div className={styles.overlay}>
                {p.badge && <span className={styles.badge}>{p.badge}</span>}
                <div className={styles.titleRow}>
                  <h3>{p.title}</h3>
                  <button
                    className={styles.expand}
                    onClick={() => toggle(p.id)}
                    aria-expanded={!!open[p.id]}
                    aria-label={open[p.id] ? 'Show less' : 'Show more'}
                  >
                    <Icon name="chevron" />
                  </button>
                </div>
                {/* Always rendered so it can slide open on hover; collapsed until hover, focus, or the chevron. */}
                <div className={styles.detailWrap}>
                  <p className={styles.detail}>{p.detail}</p>
                </div>
                <a href={p.href} className={`btn btn-light ${styles.cta}`} draggable={false}>{p.cta}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <button className="icon-btn" onClick={() => step(-1)} disabled={edges.start} aria-label="Previous">
          <Icon name="arrowLeft" />
        </button>
        <button className="icon-btn" onClick={() => step(1)} disabled={edges.end} aria-label="Next">
          <Icon name="arrowRight" />
        </button>
      </div>
    </div>
  );
}
