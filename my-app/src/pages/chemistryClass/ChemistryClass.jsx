import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import OptionsText from '../../components/optionsText'

const ChemistryClass = (props) => {

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
      <h2>Today we are going to learn some chemistry!</h2>
      <div className='classContent'>
        <p>Hello this is the new page</p>
        <p className='helperTextOther'>Sorry, this page is still under construction!</p>
      </div>
      <OptionsText backButton="true" text="Back" userInput={props.userInput} />
    </div>
  )
}

export default ChemistryClass
