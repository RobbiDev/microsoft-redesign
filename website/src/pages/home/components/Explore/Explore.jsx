import { useEffect, useRef, useState } from 'react';
import ProductCarousel from '@/pages/home/components/ProductCarousel/ProductCarousel.jsx';
import { explore } from '@/pages/home/homeContent.js';
import styles from './Explore.module.css';

const MODES = [
  { id: 'personal', label: 'Personal' },
  { id: 'business', label: 'Business' },
];
const OUT_MS = 300; // how long the old title and cards take to leave
const IN_MS = 900; // entrance length, after which the stagger classes come off

export default function Explore() {
  // `mode` moves the pill right away; `shown` swaps the content once the old content has left.
  const [mode, setMode] = useState('personal');
  const [shown, setShown] = useState('personal');
  const [phase, setPhase] = useState('idle'); // 'out' → 'in' → 'idle'
  const [moved, setMoved] = useState(false); // no pill stretch on first load
  const timer = useRef();
  const content = explore[shown];
  const active = MODES.findIndex((m) => m.id === mode);

  const choose = (m) => {
    if (m === mode) return;
    setMode(m);
    setMoved(true);
    clearTimeout(timer.current);
    if (m === shown) {
      setPhase('idle'); // switched back before the old content finished leaving
      return;
    }
    setPhase('out');
    timer.current = setTimeout(() => {
      setShown(m);
      setPhase('in');
      timer.current = setTimeout(() => setPhase('idle'), IN_MS);
    }, OUT_MS);
  };

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <section id="explore" className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title} aria-live="polite">
          <span key={shown} className={`${styles.titleText} ${phase === 'out' ? styles.titleOut : ''} ${phase === 'in' ? styles.titleIn : ''}`}>
            {content.title}
          </span>
        </h2>
        <div className={styles.toggle} role="tablist" style={{ '--active': active }}>
          <span className={styles.pill} data-pos={moved ? active : undefined} aria-hidden="true" />
          {MODES.map((m) => (
            <button key={m.id} role="tab" aria-selected={mode === m.id} onClick={() => choose(m.id)}>{m.label}</button>
          ))}
        </div>
      </div>
      <div className={styles.body}>
        {/* key resets carousel position and expanded cards when switching modes */}
        <ProductCarousel key={shown} products={content.products} phase={phase} />
      </div>
    </section>
  );
}
