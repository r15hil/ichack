import React, { useEffect, useState } from "react";
import ClassesList from "./pages/homePage/classesList.jsx";
import './App.css';
import EnglishClass from "./pages/englishClass/EnglishClass.jsx";
import MathematicsClass from "./pages/mathematicsClass/MathematicsClass.jsx";
import ChemistryClass from "./pages/chemistryClass/ChemistryClass.jsx";


function App() {

  let [input, setInput] = useState('')
  let [page, setPage] = useState(<ClassesList userInput="" />)

  const englishSelected = new RegExp(
    '.*E.*n.*g.*l.*i.*s.*h'
  );

  const backSelected = new RegExp(
    '.*B.*a.*c.*k'
  );

  const mathsSelected = new RegExp(
    '.*M.*a.*t.*h.*e.*m.*a.*t.*i.*c.*s'
  );

  const chemistrySelected = new RegExp(
    '.*C.*h.*e.*m.*i.*s.*t.*r.*y'
  );

  const handleKeyPress = (event) => {
    var tmpInput = input
    if (event.key !== 'Backspace' && event.key !== 'Enter') {
      setInput(input + event.key)
      tmpInput = tmpInput + event.key
    }
    else if (event.key === 'Backspace') {
      setInput(input.slice(0, -1))
      tmpInput = input.slice(0, -1)
    }
    else if (event.key === 'Escape') {
      setInput('')
      tmpInput = ''
    }

    if (backSelected.test(tmpInput)) {
      setPage(<ClassesList userInput="" />)
      setInput('')
    }
    else if (englishSelected.test(tmpInput)) {
      setPage(<EnglishClass userInput="" />)
      setInput('')
    }
    else if (mathsSelected.test(tmpInput)) {
      setPage(<MathematicsClass userInput="" />)
      setInput('')
    }
    else if (chemistrySelected.test(tmpInput)) {
      setPage(<ChemistryClass userInput="" />)
      setInput('')
    }
    else {
      setPage(<page.type userInput={tmpInput} />)
    }
  }


  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress])

  return (
    <div className="App" >
      {page}
    </div>
  );
}


export default App;