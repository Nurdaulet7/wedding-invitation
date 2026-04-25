import { config } from '../../data/config';
import heroImg from '../../assets/hero.png';
import { useCountdown } from '../../hooks/useCountdown';
import styles from './Countdown.module.scss';

const pad = (n: number) => String(n).padStart(2, '0');

const UNITS = [
  { key: 'days'    as const, label: 'күн'    },
  { key: 'hours'   as const, label: 'сағат'  },
  { key: 'minutes' as const, label: 'минут'  },
  { key: 'seconds' as const, label: 'секунд' },
];

export default function Countdown() {
  const time = useCountdown(config.event.date);

  return (
    <section className={styles.section}>
      <img src={heroImg} alt="" className={styles.bg} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.label}>Ұзату тойына дейін</p>

        <div className={styles.timer}>
          {UNITS.map(({ key, label }, i) => (
            <>
              <div key={key} className={styles.unit}>
                <span className={styles.value}>{pad(time[key])}</span>
                <span className={styles.unitLabel}>{label}</span>
              </div>
              {i < UNITS.length - 1 && (
                <span key={`sep-${i}`} className={styles.sep}>:</span>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
