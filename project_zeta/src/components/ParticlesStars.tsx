'use client';
import { useEffect } from 'react';
import styles from './ParticlesStars.module.css';

export default function ParticlesStars() {
  useEffect(() => {
    import('particles.js').then(() => {
      // @ts-ignore
      particlesJS.load('particles-js', '/assets/particles.json', () => {
        console.log('Particles config loaded');
      });
    });
  }, []);

  return <div id="particles-js" className={styles.background}></div>;
}
