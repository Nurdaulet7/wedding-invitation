import { useState, useRef } from 'react';
import { config } from '../../data/config';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Gallery.module.scss';

export default function Gallery() {
  const ref = useScrollReveal<HTMLElement>(0.1);
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const photos = config.gallery;

  function prev() {
    setCurrent(i => (i - 1 + photos.length) % photos.length);
  }

  function next() {
    setCurrent(i => (i + 1) % photos.length);
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) next();
      else prev();
    }
    touchStartX.current = null;
  }

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div
          className={styles.slider}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={styles.track}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {photos.map((src, i) => (
              <div key={i} className={styles.slide}>
                <img src={src} alt={`Фото ${i + 1}`} className={styles.img} draggable={false} />
              </div>
            ))}
          </div>

          <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={prev} aria-label="Алдыңғы">
            ‹
          </button>
          <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={next} aria-label="Келесі">
            ›
          </button>

          <div className={styles.dots}>
            {photos.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Фото ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
