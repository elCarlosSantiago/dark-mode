import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';
import useMedia from './useMedia';

const useDarkMode = () => {
  const [isDark, setIsDark] = useLocalStorage('darkMode');
  const prefersDarkMode = usePrefersDarkMode();

  useEffect(() => {
    setIsDark(typeof isDark !== 'undefined' ? isDark : prefersDarkMode);
  }, []);

  return [isDark, setIsDark];
};

function usePrefersDarkMode() {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false);
}

export default useDarkMode;
