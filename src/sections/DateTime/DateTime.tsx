import { config } from '../../data/config';
import CircleOrnament from '../../assets/circle-ornament.svg?react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './DateTime.module.scss';

const KZ_MONTHS = [
  'қаңтар','ақпан','наурыз','сәуір','мамыр','маусым',
  'шілде','тамыз','қыркүйек','қазан','қараша','желтоқсан',
];

const KZ_WEEKDAYS_FULL = [
  'дүйсенбі','сейсенбі','сәрсенбі','бейсенбі','жұма','сенбі','жексенбі',
];

const KZ_WEEKDAYS_SHORT = ['ДС','СС','СР','БС','ЖМ','СБ','ЖС'];

function buildCalendar(year: number, month: number): (number | null)[][] {
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // Convert to Mon-based (0=Mon)
  const startOffset = (firstDay + 6) % 7;

  const cells: (number | null)[] = [
    ...Array(startOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  // Pad to full weeks
  while (cells.length % 7 !== 0) cells.push(null);

  const weeks: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }
  return weeks;
}

export default function DateTime() {
  const ref = useScrollReveal<HTMLElement>(0.1);

  // Parse as local date to avoid UTC offset shifting the day
  const [y, m, d] = config.event.date.split('-').map(Number);
  const eventDate = new Date(y, m - 1, d);
  const year = eventDate.getFullYear();
  const month = eventDate.getMonth();
  const day = eventDate.getDate();

  // Day of week Mon-based (0=Mon)
  const dowIndex = (eventDate.getDay() + 6) % 7;
  const dowName = KZ_WEEKDAYS_FULL[dowIndex];
  const monthName = KZ_MONTHS[month];

  const weeks = buildCalendar(year, month);

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>

        <h2 className={styles.title}>Қай күні?</h2>

        {/* ── Date card ── */}
        <div className={styles.card}>
          <span className={styles.cardMonth}>{monthName}</span>

          <div className={styles.cardMiddle}>
            <div className={styles.cardBadge}>{dowName}</div>
            <span className={styles.cardDay}>{day}</span>
            <div className={styles.cardBadge}>{config.event.timeDisplay}</div>
          </div>

          <span className={styles.cardYear}>{year}</span>
        </div>

        {/* ── Calendar ── */}
        <div className={styles.calendar}>
          <p className={styles.calHeader}>{monthName} {year}</p>

          <div className={styles.calGrid}>
            {KZ_WEEKDAYS_SHORT.map(d => (
              <span key={d} className={styles.calWeekday}>{d}</span>
            ))}

            {weeks.flat().map((cell, i) => (
              cell === day ? (
                <span key={i} className={styles.calEventDay}>
                  <CircleOrnament className={styles.calEventOrn} aria-hidden="true" />
                  <span className={styles.calEventNum}>{cell}</span>
                </span>
              ) : (
                <span
                  key={i}
                  className={cell === null ? styles.calEmpty : styles.calDay}
                >
                  {cell ?? ''}
                </span>
              )
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
