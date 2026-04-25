import ornamentSrc from '../../assets/ornament2.svg';
import styles from './CenterOrnament.module.scss';

interface CornerOrnament2Props {
  className?: string;
  style?: React.CSSProperties;
}

export const CornerOrnament2 = ({ className = '', style }: CornerOrnament2Props) => (
  <div className={`${styles.wrapper} ${className}`} style={style}>
    <img
      src={ornamentSrc}
      alt=""
      className={styles.ornament}
      height="auto"
    />
  </div>
);
