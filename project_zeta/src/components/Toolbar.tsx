// Sidebar Toolbar
// - Fetches planets from /api/planets
// - Provides search and selection; highlights the selected item

'use client';

import { useState, useEffect } from 'react';
import { Planet } from '@/types/planet';
import styles from './toolbar.module.css';

interface ToolbarProps {
  onPlanetSelect: (planet: Planet) => void;
  selectedPlanetId?: string;
}

export default function Toolbar({ onPlanetSelect, selectedPlanetId }: ToolbarProps) {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPlanets();
  }, []);

  const fetchPlanets = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/planets');
      if (!response.ok) {
        throw new Error('Failed to fetch planets');
      }
      const data = await response.json();
      setPlanets(data.planets);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const filteredPlanets = planets.filter(planet =>
    planet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePlanetClick = (planet: Planet) => {

    // Select the planet
    onPlanetSelect(planet);

    // Play click sound
    const clickAudio = new Audio('/audio/whimsy_click.mp3');
    clickAudio.volume = 0.5;
    clickAudio.play().catch(() => console.log('Audio play prevented'));
    
  };


  return (
    <div className={styles.toolbar}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <div className={styles.searchIcon}>🔍</div>
      </div>

      <div className={styles.planetList}>
        {loading ? (
          <div className={styles.loading}>Loading planets...</div>
        ) : error ? (
          <div className={styles.error}>Error: {error}</div>
        ) : (
          filteredPlanets.map((planet) => (
            <div
              key={planet._id}
              className={`${styles.planetItem} ${
                selectedPlanetId === planet._id ? styles.selected : ''
              }`}
              onClick={() => handlePlanetClick(planet)}
              onMouseEnter={() => {
                // Play hover sound
                const hoverAudio = new Audio('/audio/whimsy_hover.mp3'); // file in /public/audio/
                hoverAudio.volume = 0.25;
                hoverAudio.play().catch(() => console.log('Hover audio blocked'));
              }}
            >
              {planet.name}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
