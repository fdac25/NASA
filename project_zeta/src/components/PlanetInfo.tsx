// Right-side panel displaying details of the currently selected planet
// - Expects a Planet or null; renders a placeholder when none selected

'use client';

import { Planet } from '@/types/planet';
import styles from './planetInfo.module.css';

interface PlanetInfoProps {
  planet: Planet | null;
}

export default function PlanetInfo({ planet }: PlanetInfoProps) {
  if (!planet) {
    return (
      <div className={styles.planetInfo}>
        <div className={styles.placeholder}>
          Select a planet to view its information
        </div>
      </div>
    );
  }

  return (
    <div className={styles.planetInfo}>
      <div className={styles.infoContainer}>
        <h2 className={styles.planetName}>{planet.name}</h2>
        
        <div className={styles.properties}>
          <div className={styles.property}>
            <span className={styles.propertyLabel}>Gravity:</span>
            <span className={styles.propertyValue}>{planet.gravity} m/s²</span>
          </div>
          
          <div className={styles.property}>
            <span className={styles.propertyLabel}>Water:</span>
            <span className={styles.propertyValue}>{planet.water}</span>
          </div>
          
          <div className={styles.property}>
            <span className={styles.propertyLabel}>Gases:</span>
            <span className={styles.propertyValue}>{planet.gases}</span>
          </div>
        </div>
        
        <div className={styles.description}>
          <p>{planet.description}</p>
        </div>
      </div>
    </div>
  );
}
