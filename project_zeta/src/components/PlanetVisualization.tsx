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

  // color for each world
  const planetColors: Record<string, string> = {
    "Mercury": '#b8b8b8',
    "Venus": '#d4a373',
    "Earth": '#3bb4c1',
    "Mars": '#c1440e',
    "Jupiter": '#d8a26a',
    "Saturn ": '#e8d5a3',
    "Uranus ": '#9fdceb',
    "Neptune": '#557de8',
    default: '#888',
  };

  const color = planetColors[planet.name] || planetColors.default;

  return (
    <div
      className={styles.planet}
      style={{ backgroundColor: color }}
    />
  );
}
