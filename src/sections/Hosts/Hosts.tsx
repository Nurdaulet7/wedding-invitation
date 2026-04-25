import { config } from '../../data/config';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Hosts.module.scss';

export default function Hosts() {
  const ref = useScrollReveal<HTMLElement>(0.15);

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={styles.body}>
          <p className={styles.label}>Той иелері:</p>
          <p className={styles.names}>
            <span className={styles.name}>{config.hosts.father}</span>
            <span className={styles.divider}>-</span>
            <span className={styles.name}>{config.hosts.mother}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
