// Application home page
// - Renders the sidebar Toolbar and the PlanetInfo panel
// - Manages the currently selected planet in client state

'use client';

import { useState } from 'react';
import Toolbar from '@/components/Toolbar';
import PlanetInfo from '@/components/PlanetInfo';
import { Planet } from '@/types/planet';
import styles from "./page.module.css";
import ParticlesStars from '@/components/ParticlesStars';

export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);

  const handlePlanetSelect = (planet: Planet) => {
    setSelectedPlanet(planet);
  };

  return (
    <div className={styles.page}>
      <Toolbar 
        onPlanetSelect={handlePlanetSelect}
        selectedPlanetId={selectedPlanet?._id}
      />
      <ParticlesStars/>
      <main className={styles.main}>
        <div className={styles.planetVisualization}>
          {/* Placeholder for planet visualization */}
          <div className={styles.planetPlaceholder}>
            {selectedPlanet ? (
              <div className={styles.planetName}>{selectedPlanet.name}</div>
            ) : (
              <div className={styles.placeholderText}>Select a planet to explore</div>
            )}
          </div>
        </div>
      </main>
      
      <PlanetInfo planet={selectedPlanet} />
    </div>
  );
}