// Import necessary dependencies and CSS
import React from 'react';
import PropTypes from 'prop-types';
import "../style/NoiseMeter.css"

const NoiseMeter = ({ noiseLevel }) => {
  // Function to calculate the noise meter height based on the noise level
  const calculateMeterHeight = () => {
    const maxHeight = 200; // Maximum height of the noise meter bar
    const clampedNoiseLevel = Math.min(Math.max(noiseLevel, 0), 100); // Clamping noise level between 0 and 100
    return `${(clampedNoiseLevel / 100) * maxHeight}px`;
  };

  return (
    <div className="noise-meter">
      <div className="noise-bar" style={{ height: calculateMeterHeight() }}></div>
      <div className="noise-level">{noiseLevel} dB</div>
    </div>
  );
};

// Prop types validation
NoiseMeter.propTypes = {
  noiseLevel: PropTypes.number.isRequired,
};

export default NoiseMeter;
