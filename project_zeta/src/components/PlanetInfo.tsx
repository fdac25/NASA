// Right-side panel displaying details of the currently selected planet
// - Expects a Planet or null; renders a placeholder when none selected

'use client';

import { Planet } from '@/types/planet';
import styles from './planetInfo.module.css';
import { useState } from 'react';

interface PlanetInfoProps {
  planet: Planet | null;
}

export default function PlanetInfo({ planet }: PlanetInfoProps) {
  const [useEarthAdjusted, setUseEarthAdjusted] = useState(false);
  if (!planet) {
    return (
      <div className={styles.planetInfo}>
        <div className={styles.placeholder}>
          Select a planet to view its information
        </div>
      </div>
    );
  }

function getMostAbundantGas(planet: Planet): [string, number] {
  const gases = {
    "Nitrogen": planet.atmos_N,
    "Oxygen": planet.atmos_O,
    "Carbon Dioxide": planet.atmos_CO2,
    "Methane": planet.atmos_CH4,
    "Hydrogen": planet.atmos_H,
  };

  let maxGas = "";
  let maxValue = -Infinity;

  for (const [gas, value] of Object.entries(gases)) {
    if (value > maxValue) {
      maxValue = value;
      maxGas = gas;
    }
  }

  return [maxGas, maxValue * 100]; 
}

const [maxGas, maxValue] = getMostAbundantGas(planet);

 // Example: switch values
const displayedValues = useEarthAdjusted
    ? {
        mass_kg: planet.mass_kg_earthAdjusted?.toFixed(2) ?? planet.mass_kg,
        volume_km3: planet.volume_km3_earthAdjusted.toFixed(2) ?? planet.volume_km3,
        density_kg_km3: planet.density_kg_km3_earthAdjusted.toFixed(2) ?? planet.density_kg_km3,
        gravity_m_s2: planet.gravity_m_s2_earthAdjusted ?? planet.gravity_m_s2,
        high_temp_c: planet.high_temp_c_earthAdjusted ?? planet.high_temp_c,
        low_temp_c: planet.low_temp_c_earthAdjusted ?? planet.low_temp_c,
        atmos_pressure_mbar: planet.atmos_pressure_mbar_earthAdjusted ?? planet.atmos_pressure_mbar,
      }
    : {
        mass_kg: planet.mass_kg,
        volume_km3: planet.volume_km3,
        density_kg_km3: planet.density_kg_km3,
        gravity_m_s2: planet.gravity_m_s2,
        high_temp_c: planet.high_temp_c,
        low_temp_c: planet.low_temp_c,
        atmos_pressure_mbar: planet.atmos_pressure_mbar,
      };

  return (
    <div className={styles.planetInfo}>
      <div className={styles.infoContainer}>
        <h2 className={styles.planetName}>{planet.name}</h2>

        <div>
          <span className={styles.propertyLabel}>Earth Similarity:</span>
          <span className={styles.propertyValue}>{planet.earth_similarity_score}</span>
        </div>

        <div className={styles.scrollableProperties}>
          <div className={styles.property}>
            <span className={styles.propertyLabel}>Mass:</span>
            <span className={styles.propertyValue}>{displayedValues.mass_kg} kg</span>
          </div>

          <div className={styles.property}>
            <span className={styles.propertyLabel}>Volume:</span>
            <span className={styles.propertyValue}>{displayedValues.volume_km3} km³</span>
          </div>

          <div className={styles.property}>
            <span className={styles.propertyLabel}>Density:</span>
            <span className={styles.propertyValue}>{displayedValues.density_kg_km3} kg/km³</span>
          </div>

          <div className={styles.property}>
            <span className={styles.propertyLabel}>Gravity:</span>
            <span className={styles.propertyValue}>{displayedValues.gravity_m_s2.toFixed(2)} m/s²</span>
          </div>

          <div className={styles.property}>
            <span className={styles.propertyLabel}>High Temperature:</span>
            <span className={styles.propertyValue}>{displayedValues.high_temp_c.toFixed(2)} °C</span>
          </div>

          <div className={styles.property}>
            <span className={styles.propertyLabel}>Low Temperature:</span>
            <span className={styles.propertyValue}>{displayedValues.low_temp_c.toFixed(2)} °C</span>
          </div>

          <div className={styles.property}>
            <span className={styles.propertyLabel}>Atmospheric Pressure:</span>
            <span className={styles.propertyValue}>{displayedValues.atmos_pressure_mbar.toFixed(2)} mb</span>
          </div>

          <div className={styles.property}>
            <span className={styles.propertyLabel}>Most Abundant Gas:</span>
            <span className={styles.propertyValue}>{maxGas}, {maxValue}%</span>
          </div>
        </div>

        <div className={styles.description}>
          <p>{planet.description || 'Blank for now'}</p>
        </div>

        {/* Buttons to toggle values */}
        <div className={styles.footerButtonContainer}>
          <button
            className={styles.toggleButton}
            onClick={() => setUseEarthAdjusted(!useEarthAdjusted)}
          >
            {useEarthAdjusted ? 'Show Original Values' : 'Show Earth-Adjusted Values'}
          </button>
        </div>
      </div>
    </div>
  );
}
