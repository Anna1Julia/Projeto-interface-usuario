import { useState } from 'react';
import Gallery from './components/Gallery';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div className="app-container">
        <h1>Galeria de Personagens</h1>
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        <Gallery 
          selectedCharacter={selectedCharacter} 
          setSelectedCharacter={setSelectedCharacter} 
        />
      </div>
    </div>
  );
}

export default App;