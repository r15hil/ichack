import logo from './logo.svg';
import React, { useCallback, useEffect, useState, setState } from "react";
import './App.css';

// document.addEventListener('keydown', function(event){
//   console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);)



function App() {

  let [value, setValue] = useState('hello')
  // this.state = ''

  
  const handleKeyPress = (event) => {
    if(event.key === 'y'){ //backspace //13 enter 32 space
      console.log(event.key)
    }
    if(event.key != 'Backspace' && event.key != 'Enter'){
      setValue(value + event.key)
    }
    else if(event.key === 'Backspace'){
      setValue(value.slice(0,-1))
    }
    else if(event.key === 'Enter'){
      setValue('')
    }
    
    console.log(event.key)
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
  
  

  const textToType = ["Beef with Jeef", "Poo", "Pee", "PooPoo", "PeePee"];
  
  // function TextToTypeList (props) {
  //   const textList = props.textList;
  //   const listItems = textList.map((text) =>
  //     <li>{text}</li>
  //   );
  //   return (
  //     <ul>{listItems}</ul>
  //   );
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <TextToTypeList numbers={textToType} /> */}
        <p>
        {value}
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
