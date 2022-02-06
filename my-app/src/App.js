import logo from './logo.svg';
import React from "react";
import EnglishClass from './englishClass/EnglishClass';
import MathsClass from './mathsClass/MathsClass';
import './App.css';

// document.addEventListener('keydown', function(event){
//   console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);)



function App() {

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
        <EnglishClass/>
        
        </header>
    </div>
  );
}

export default App;
