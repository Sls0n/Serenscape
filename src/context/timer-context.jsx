import { createContext } from 'react';

const TimerContext = createContext({
  hour: 0,
  minute: 0,
  setHour: () => {},
  setMinute: () => {},
  time: null,
  setTime: () => {},
  isRunning: false,
  setIsRunning: () => {},
});

export default TimerContext;
