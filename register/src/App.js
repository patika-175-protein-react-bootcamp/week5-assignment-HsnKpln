import { useState } from 'react';
import './App.css';
import PatikaPage from './pages/patikaPage';
import RegisterPage from './pages/registerPage';

function App() {
  const [darkMode,setDarkMode] = useState(false)

  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode)
    console.log("calıstı")
  }
  return (
    <>
     <div className="App">
     <PatikaPage darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
     <RegisterPage darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    </div>
    </>
  );
}

export default App;
