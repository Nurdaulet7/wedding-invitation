import { ChevronsDown } from 'lucide-react';
import { config } from '../../data/config';
import heroImg from '../../assets/hero.png';
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

      {/* Bottom content */}
      <div className={styles.content}>
        <h1 className={styles.name}>{config.couple.person1.name}</h1>
        <p className={styles.subtitle}>Қыз ұзату</p>

        {/* Scroll indicator */}
        <div className={styles.scroll} aria-hidden="true">
          {/* <span className={styles.scrollLine} /> */}
          <ChevronsDown className={styles.scrollArrow} strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
}
