import React, { useEffect, useState } from 'react';

const AudioPlayer = () => {
  const [audioContext, setAudioContext] = useState(null);
  const [audioElement, setAudioElement] = useState(null);
  const [audioSourceNode, setAudioSourceNode] = useState(null);

  useEffect(() => {
    // Create Audio Context
    const context = new (window.AudioContext || window.webkitAudioContext)();
    setAudioContext(context);

    // Load audio source
    const audioSrc = 'path/to/audio/file.mp3';
    const audio = new Audio();
    audio.src = audioSrc;
    setAudioElement(audio);

    // Cleanup on unmount
    return () => {
      if (audioSourceNode) {
        audioSourceNode.disconnect();
      }
      if (audioContext) {
        audioContext.close();
      }
    };
  }, []);

  useEffect(() => {
    if (audioContext && audioElement && !audioSourceNode) {
      // Connect audio source to audio context
      const sourceNode = audioContext.createMediaElementSource(audioElement);
      setAudioSourceNode(sourceNode);
      sourceNode.connect(audioContext.destination);
    }
  }, [audioContext, audioElement, audioSourceNode]);

  const handlePlay = () => {
    if (audioElement) {
      audioElement.play();
    }
  };

  const handlePause = () => {
    if (audioElement) {
      audioElement.pause();
    }
  };

  const handleVolumeChange = (event) => {
    if (audioElement) {
      audioElement.volume = event.target.value;
    }
  };

  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <input type="range" min="0" max="1" step="0.1" onChange={handleVolumeChange} />
    </div>
  );
};

export default AudioPlayer;
