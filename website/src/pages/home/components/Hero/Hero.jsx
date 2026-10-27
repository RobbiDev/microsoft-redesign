import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/Icon/Icon.jsx';
import { hero } from '@/pages/home/homeContent.js';
import styles from './Hero.module.css';
import Link from '@/components/ui/Link/Link.jsx';

export default function Hero() {
  const videoRef = useRef(null);
  const [hasVideo, setHasVideo] = useState(false);
  const [playing, setPlaying] = useState(false);

  // Autoplay muted, unless the visitor asked for reduced motion (they can still press play).
  useEffect(() => {
    const video = videoRef.current;
    video.muted = true;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.play().catch(() => {});
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  return (
    <section className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true">
        <video
          ref={videoRef}
          className={`${styles.video} ${hasVideo || hero.video.poster ? styles.visible : ''}`}
          src={hero.video.src}
          poster={hero.video.poster || undefined}
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setHasVideo(true)}
          onError={() => setHasVideo(false)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
      </div>
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.inner}>
        <h1 className={styles.title}>
          {hero.lead.split(' ').map((word, i) => (
            <span key={i}>
              <span className={styles.word} style={{ '--i': i }}>{word}</span>{' '}
            </span>
          ))}
          <span className={styles.rest}>{hero.rest}</span>
        </h1>
        <div className={styles.actions}>
          <Link href={hero.primary.href} className={styles.primary}>{hero.primary.label}</Link>
          <Link href={hero.secondary.href} className={styles.secondary}>
            {hero.secondary.label} <Icon name="arrowSmall" />
          </Link>
        </div>
      </div>

      {hasVideo && (
        <button className={styles.playToggle} onClick={togglePlay} aria-label={playing ? 'Pause background video' : 'Play background video'}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d={playing ? 'M3 2h3.5v12H3zM9.5 2H13v12H9.5z' : 'M4 2l10 6-10 6z'} />
          </svg>
        </button>
      )}
    </section>
  );
}
