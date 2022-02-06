import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import OptionsText from '../../components/optionsText'

const EnglishClass = (props) => {

  let [value, setValue] = useState('')
  // this.state = ''

  // const changeOptionsHighlight = () => {

  // }

  const handleKeyPress = (event) => {
    //   if(event.key === 'y'){ //backspace //13 enter 32 space
    //     console.log(event.key)
    //   }
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
      <Header title="Welcome to English Class!" />
      <p>Hello this is the new page</p>
      <OptionsText text="Back" userInput={props.userInput} />
    </div>
  )
}

export default EnglishClass
