import logo from './logo.svg';
import React, { useCallback, useEffect } from "react";
import './App.css';

// document.addEventListener('keydown', function(event){
//   console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);)

function App() {
  
  const handleKeyPress = (event) => {
    if(event.key === "y"){
      console.log('enter press here! ')
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Beef with Jeef
        </p>
        <form>
  
        </form>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
    </div>
  );
}

export default App;
