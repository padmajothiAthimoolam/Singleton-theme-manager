import { useEffect, useState } from 'react';
import themeManager from './themeManager';
import './app.css';

const App = () => {
  const [theme, setTheme ] = useState(themeManager.getTheme());

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    themeManager.setTheme(newTheme);
    setTheme(newTheme);
  };
 
  return (
    <div>
      <h1>SingleTone pattern with Theme Manager</h1>
      <button onClick={toggleTheme}> Toggle to { theme === 'light' ? 'dark' : 'light' } Mode
      </button>     
    </div>
  )
}
export default App;