import ArrowDown from '../../assets/arrow-down.svg?react';
import { config } from '../../data/config';
import heroImg from '../../assets/img1.PNG';
import styles from './Hero.module.scss';

interface HeroProps {
  isMusicPlaying: boolean;
  onMusicToggle: () => void;
}

export default function Hero({ isMusicPlaying, onMusicToggle }: HeroProps) {
  return (
    <section className={styles.hero}>
      {/* Background photo */}
      <img
        src={heroImg}
        alt={config.couple.person1.name}
        className={styles.bg}
      />

      {/* Gradient overlay */}
      <div className={styles.overlay} />

      {/* Music toggle */}
      <div className={styles.musicWrap}>
        <svg className={styles.musicCircleText} viewBox="0 0 120 120" aria-hidden="true">
          <defs>
            <path id="circle-path" d="M 60,60 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" />
          </defs>
          <text>
            <textPath href="#circle-path" startOffset="0%">
              Музыканы қосу үшін үстінен басыңыз·
            </textPath>
          </text>
        </svg>
        <button
          className={styles.musicBtn}
          onClick={onMusicToggle}
          aria-label={isMusicPlaying ? 'Музыканы өшіру' : 'Музыканы қосу'}
        >
          {isMusicPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>

      {/* Bottom content */}
      <div className={styles.content}>
        <h1 className={styles.name}>{config.couple.person1.name}</h1>
        <p className={styles.subtitle}>Қыз ұзату</p>

        {/* Scroll indicator */}
        <div className={styles.scroll} aria-hidden="true">
          {/* <span className={styles.scrollLine} /> */}
          <ArrowDown className={styles.scrollArrow} />
        </div>
      </div>
    </section>
  );
}
