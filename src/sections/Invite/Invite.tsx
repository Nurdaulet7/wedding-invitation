import { config } from '../../data/config';
import { CenterOrnament } from '../../components/ornaments/CenterOrnament';
import { CornerOrnament2 } from '../../components/ornaments/CornerOrnament2';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Invite.module.scss';

const heroImg = '/gallery/photo5.PNG';

export default function Invite() {
  const ref = useScrollReveal<HTMLElement>(0.15);

  return (
    <section className={styles.invite} ref={ref}>
      {/* Rotating ornament top-left */}
      <CenterOrnament style={{ top: '0px', left: '-90px', transform: 'none' }} />

      {/* Rotating ornament bottom-right */}
      <CornerOrnament2 style={{ top: 'auto', bottom: '0px', left: 'auto', right: '-90px', transform: 'none', zIndex: 10 }} />

      <div className={styles.container}>
        <div className={styles.body}>
          <p className={styles.greeting}>{config.invite.greeting}</p>

          <p className={styles.text}>Сіздерді аяулы қызымыз</p>

          <p className={styles.brideName}>{config.invite.brideName}</p>

          <p className={styles.text}>
            ұзату тойына арналған салтанатты ақ дастарханамыздың қадірлі қонағы болуға шақырамыз!
          </p>

          <div className={styles.photoWrap}>
            <img src={heroImg} alt={config.couple.person1.name} className={styles.photo} />
          </div>
        </div>
      </div>
    </section>
  );
}
