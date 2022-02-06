import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import OptionsText from '../../components/optionsText'

const ChemistryClassEasy = (props) => {

  let [value, setValue] = useState('')

  const handleKeyPress = (event) => {
    if (event.key !== 'Backspace' && event.key !== 'Enter') {
      setValue(value + event.key)
    }
    else if (event.key === 'Backspace') {
      setValue(value.slice(0, -1))
    }
    else if (event.key === 'Enter') {
      setValue('')
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div>
      <Header title="Welcome to Chemistry Class!" />
      <p>Hello this is the new page</p>
      <OptionsText text="Back" userInput={props.userInput} />
    </div>
  )
}

export default ChemistryClassEasy
