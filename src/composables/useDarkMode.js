import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('dark');
  const colorTheme = theme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  const editTheme = selectedTheme => {
    setTheme(selectedTheme);
  };
  return { colorTheme, editTheme };
};

export default useDarkMode;
