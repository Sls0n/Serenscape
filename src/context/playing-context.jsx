import { createContext } from 'react';

const PlayingContext = createContext({ isPlaying: false, setIsPlaying: () => {} });

export default PlayingContext;
