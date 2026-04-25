import ornamentSrc from '../../assets/ornament.svg';
import styles from './CenterOrnament.module.scss';

interface CenterOrnamentProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const CenterOrnament = ({
  className = '',
  style,
}: CenterOrnamentProps) => (
  <div className={`${styles.wrapper} ${className}`} style={style}>
    <img
      src={ornamentSrc}
      alt=""
      className={styles.ornament}
      height="auto"
    />
  </div>
);
