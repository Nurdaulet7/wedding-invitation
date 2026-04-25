import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Closing.module.scss';

export default function Closing() {
  const ref = useScrollReveal<HTMLElement>(0.15);

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        <p className={styles.text}>Келіңіздер,</p>
        <p className={styles.subtext}>тойымыздың қадірлі қонағы болыңыздар!</p>
      </div>
    </section>
  );
}
