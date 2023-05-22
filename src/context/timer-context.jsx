import { createContext } from 'react';

const TimerContext = createContext({
  hour: 0,
  minute: 0,
  shouldStart: false,
  setHour: () => {},
  setMinute: () => {},
  setShouldStart: () => {},
});

export default TimerContext;
