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
import PlanetVisualization from '@/components/PlanetVisualization';
import BackgroundMusic from "@/components/BackgroundMusic";

export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);

  const handlePlanetSelect = (planet: Planet) => {
    setSelectedPlanet(planet);
  };

  return (

    <div className={styles.page}>

      {/* Background music */}
      <BackgroundMusic />

      {/* Toolbar */}
      <Toolbar 
        onPlanetSelect={handlePlanetSelect}
        selectedPlanetId={selectedPlanet?._id}
      />

      {/* Particle Background */}
      <ParticlesStars/>

    {/* Planet Visualization */}
      <main className={styles.main}>
        <div className={styles.planetVisualization}>
          <PlanetVisualization planet={selectedPlanet} />
        </div>
      </main>
      
      {/* Planet Info */}
      <PlanetInfo planet={selectedPlanet} />
    </div>
  );
}
