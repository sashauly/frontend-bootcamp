import { useEffect, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        id='theme-toggle'
        value=""
        className="sr-only peer"
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="font-bold text-gray-900 text-md ms-3 dark:text-gray-300">
        {theme === 'dark' ? '🌚' : '🌝'}
      </span>
    </label>
  );
};

export default ThemeToggle;
