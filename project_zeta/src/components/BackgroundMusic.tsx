'use client';

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // autoplay when the component mounts
    if (audioRef.current) {
      audioRef.current.loop = true; // loop the music
      audioRef.current.volume = 0.3; // adjust volume
      audioRef.current.play().catch(() => {
        // autoplay might fail on mobile browsers, wait for user interaction
        console.log("Autoplay prevented");
      });
      setIsPlaying(true);
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ position: "fixed", bottom: "1rem", right: "1rem", zIndex: 1000 }}>
      <audio ref={audioRef} src="/music/SpaceWalk.mp4" />
      <button onClick={togglePlay} style={{ padding: "0.5rem 1rem", borderRadius: "0.5rem" }}>
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
    </div>
  );
}
