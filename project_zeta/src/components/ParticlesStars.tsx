'use client';
import { useEffect } from 'react';
import styles from './ParticlesStars.module.css';
import 'particles.js';

export default function ParticlesStars() {
  useEffect(() => {
    // @ts-ignore
    particlesJS.load('particles-js', '/assets/particles.json', () => {
      console.log('Particles config loaded');
    });
  }, []);

  return <div id="particles-js" className={styles.background}></div>;
}
