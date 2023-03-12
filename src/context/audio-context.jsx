import React, { createContext, useState, useRef } from 'react';

export const AudioContext = createContext({
  currentSoundId: null,
  isPlaying: false,
  playAudio: () => {},
  pauseAudio: () => {},
});

const AudioContextProvider = ({ children }) => {
  const [currentSoundId, setCurrentSoundId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef(new Audio());

  const playAudio = (audioSource, soundId) => {
    if (currentSoundId === soundId && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.src = audioSource;
      audioRef.current.currentTime = currentSoundId === soundId ? currentTime : 0;
      audioRef.current.play();
      setIsPlaying(true);
      setCurrentSoundId(soundId);
    }

    audioRef.current.onended = () => {
      setIsPlaying(false);
    };

    audioRef.current.ontimeupdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
    setCurrentTime(audioRef.current.currentTime);
  };

  return (
    <AudioContext.Provider value={{ currentSoundId, isPlaying, playAudio, pauseAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export default AudioContextProvider;
