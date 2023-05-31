import { useEffect, useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  });

  useEffect(() => {
    const valueFromLocalStorage = localStorage.getItem(key);

    if (valueFromLocalStorage !== null && JSON.parse(valueFromLocalStorage) !== storedValue) {
      setStoredValue(JSON.parse(valueFromLocalStorage));
    }
  }, [key, storedValue]);

  const updateValue = (newValue) => {
    setStoredValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [storedValue, updateValue];
};

export default useLocalStorage;
