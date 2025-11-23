'use client';

import styles from './PlanetVisualization.module.css';
import { Planet } from '@/types/planet';

interface Props {
  planet: Planet | null;
}

export default function PlanetVisualization({ planet }: Props) {
  if (!planet) {
    return (
      <div className={styles.placeholder}>
        Select a planet to explore
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.planet}></div>
      <div className={styles.label}>{planet.name}</div>
    </div>
  );
}
