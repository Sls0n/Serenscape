import { createContext } from 'react';

const ThemeContext = createContext({ isDark: true, setDark: () => {} });

export default ThemeContext;
