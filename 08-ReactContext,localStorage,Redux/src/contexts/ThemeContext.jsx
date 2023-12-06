import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
