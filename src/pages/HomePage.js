// Import necessary dependencies and components
import React, { useState, useEffect } from 'react';
import NoiseMeter from '../components/NoiseMeter';
import NoiseChart from '../components/NoiseChart';
import "../style/Home.css";

const HomePage = () => {
  // State to store the current noise level
  const [currentNoiseLevel, setCurrentNoiseLevel] = useState(0);

  // useEffect to simulate real-time noise level updates
  useEffect(() => {
    // Simulating noise level updates every second (replace with actual implementation)
    const interval = setInterval(() => {
      const noiseLevel = Math.floor(Math.random() * 100); // Replace with actual noise level value
      setCurrentNoiseLevel(noiseLevel);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>SoundSense - Noise Level Tracker</h1>
      <NoiseMeter noiseLevel={currentNoiseLevel} />
      <NoiseChart />
    </div>
  );
};

export default HomePage;
