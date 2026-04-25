import { MapPin } from 'lucide-react';
import { config } from '../../data/config';
import { CenterOrnament } from '../../components/ornaments/CenterOrnament';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Venue.module.scss';

export default function Venue() {
  const ref = useScrollReveal<HTMLElement>(0.15);

  return (
    <section className={styles.section} ref={ref}>
      <CenterOrnament style={{ top: 'auto', bottom: '-90px', left: 'auto', right: '-90px', transform: 'none' }} />

      <div className={styles.container}>
        <p className={styles.label}>Мекен-жайымыз</p>

        <h2 className={styles.name}>{config.event.venue.name}</h2>

        <p className={styles.address}>{config.event.venue.address}</p>

        <a
          href={config.event.venue.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
        >
          <MapPin size={16} strokeWidth={1.5} />
          Картадан көру
        </a>
      </div>
    </section>
  );
}
