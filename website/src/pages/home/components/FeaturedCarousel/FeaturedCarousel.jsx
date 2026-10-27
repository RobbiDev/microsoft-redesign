import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/Icon/Icon.jsx';
import SplitCard from '@/pages/home/components/SplitCard/SplitCard.jsx';
import useSwipe from '@/hooks/useSwipe.js';
import { features } from '@/pages/home/homeContent.js';
import styles from './FeaturedCarousel.module.css';

const INTERVAL_MS = 6000;
const MIN_DRAG = 60;
const FLICK_VELOCITY = 0.35;

export default function FeaturedCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = features.length;
  const trackRef = useRef(null);
  const next = () => setIndex((i) => (i + 1) % n);
  const prev = () => setIndex((i) => (i + n - 1) % n);

  const swipe = useSwipe({
    onDrag: (dx) => {
      trackRef.current.style.setProperty('--drag', `${dx}px`);
      trackRef.current.classList.toggle(styles.dragging, dx !== 0);
    },
    onRelease: (dx, v) => {
      if (dx < -MIN_DRAG || v < -FLICK_VELOCITY) next();
      else if (dx > MIN_DRAG || v > FLICK_VELOCITY) prev();
    },
    onStep: (dir) => (dir > 0 ? next() : prev()),
  });

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % n), INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, n, index]);

  return (
    <section className={styles.section} aria-roledescription="carousel">
      <div className={styles.inner}>
        <div ref={trackRef} className={styles.track} style={{ '--index': index }} {...swipe}>
          {features.map((f, i) => (
            <SplitCard
              key={f.id}
              {...f}
              as="h3"
              placeholder="Feature image"
              className={`${styles.slide} ${i === index ? styles.active : ''}`}
              inert={i !== index}
            />
          ))}
        </div>
        <div className={styles.controls}>
          <button className="icon-btn" onClick={prev} aria-label="Previous">
            <Icon name="arrowLeft" />
          </button>
          <button className="icon-btn" onClick={next} aria-label="Next">
            <Icon name="arrowRight" />
          </button>
          <div className={styles.dots}>
            {features.map((f, i) => (
              <button
                key={f.id}
                className={i === index ? styles.dotActive : ''}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
          <button className={styles.pause} onClick={() => setPaused((p) => !p)} aria-label={paused ? 'Play' : 'Pause'}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d={paused ? 'M4 2l10 6-10 6z' : 'M3 2h3.5v12H3zM9.5 2H13v12H9.5z'} />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
