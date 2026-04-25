import { useId, useLayoutEffect, useRef, useState } from 'react';
import styles from './OrnamentDivider.module.scss';
import {
  LINE_ORNAMENT_PATH_D,
  ORNAMENT_DISPLAY_SCALE,
  ORNAMENT_TILE_H,
  ORNAMENT_TILE_W,
} from './lineOrnamentPath';

export default function OrnamentDivider() {
  const rawId = useId().replace(/:/g, '');
  const patternId = `line-ornament-${rawId}`;
  const wrapRef = useRef<HTMLDivElement>(null);
  const [viewW, setViewW] = useState(400);

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const update = (width: number) => {
      setViewW(Math.max(ORNAMENT_TILE_W, Math.ceil(width)));
    };

    update(el.getBoundingClientRect().width);
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width;
      if (w) update(w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className={styles.wrap} ref={wrapRef} aria-hidden>
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${viewW} ${ORNAMENT_TILE_H}`}
        width="100%"
        height={ORNAMENT_TILE_H}
        focusable="false"
        preserveAspectRatio="xMinYMin meet"
      >
        <defs>
          <pattern
            id={patternId}
            width={ORNAMENT_TILE_W}
            height={ORNAMENT_TILE_H}
            patternUnits="userSpaceOnUse"
          >
            <g transform={`scale(${ORNAMENT_DISPLAY_SCALE})`}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d={LINE_ORNAMENT_PATH_D}
                fill="currentColor"
              />
            </g>
          </pattern>
        </defs>
        <rect width={viewW} height={ORNAMENT_TILE_H} fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
