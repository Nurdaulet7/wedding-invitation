import { useState, useRef } from 'react';
import img1 from '../../assets/img1.PNG';
import img2 from '../../assets/img2.PNG';
import img3 from '../../assets/img3.PNG';
import img4 from '../../assets/img4.PNG';
import img5 from '../../assets/img5.PNG';
import img6 from '../../assets/img6.PNG';
import img7 from '../../assets/img7.PNG';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Gallery.module.scss';

const photos = [img1, img2, img3, img4, img5, img6, img7];

export default function Gallery() {
  const ref = useScrollReveal<HTMLElement>(0.1);
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={next} aria-label="Келесі">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
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
