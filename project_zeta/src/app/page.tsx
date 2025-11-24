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
  const [burstParticles, setBurstParticles] = useState(false);

  const handlePlanetSelect = (planet: Planet) => {
    setSelectedPlanet(planet);

    // Trigger particle burst
    setBurstParticles(true);

    // Reset the trigger shortly to allow next click to retrigger
    setTimeout(() => setBurstParticles(false), 100);
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
