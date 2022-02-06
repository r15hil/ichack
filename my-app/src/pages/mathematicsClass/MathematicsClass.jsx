import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import OptionsText from '../../components/optionsText'
import Speech from 'react-speech';
import congratsClass from '../congratsClass/congratsClass';

function amendOutput(string) {
  if (string == "Wow! You've done it! Good Job! What Good Proficiency in Mathematics!!") {
    return string
  }
  else
    return string + "is"
}

function randomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function postProcess(inputString) {
  var newString = ''
  if (inputString.includes('plus')) {
    newString = inputString.replace('plus', '+')
    // console.log("Plus")
  }
  if (inputString.includes('minus')) {
    newString = inputString.replace('minus', '-')
    // console.log("Minus")
  }
  if (inputString.includes('times')) {
    newString = inputString.replace('times', '*')
  }
  if (inputString.includes('divide')) {
    newString = inputString.replace('divide', '/')
  }
  return newString
}

const MathsClass = (props) => {

  let [value, setValue] = useState("")
  let [score, setScore] = useState(0)
  let [words, setWords] = useState(["2 plus 2", "4 plus 2", "9 times 4", "7 plus 8", "6 minus 5", "4 divide 2", "9 minus 3", "2 times 9"])

  let [randWord, setRandWord] = useState(randomWord(words))
  // let [speechText, setSpeechText] = useState("Calculate " + randWord)
  let [isComplete, setComplete] = useState(false)
  let [page, setPage] = useState(<MathsClass userInput="" />)


  const handleKeyPress = (event) => {
    if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
      setValue(value + event.key)
    }
    else if (event.key === 'Backspace') {
      setValue(value.slice(0, -1))
    }
    else if (event.key === 'Enter') {
      var evaluatedVal = eval(value)
      var evaluatedInput = eval(postProcess(randWord))
      if (evaluatedInput === evaluatedVal) {
        setScore(score += 100)
        var index = words.indexOf(randWord)
        words.splice(index, 1)
        if (words.length === 0) {
          setRandWord("Wow! You've done it! Good Job! What Good Proficiency in Mathematics!!")
          setComplete(true)
        }
        else {

          setRandWord(randomWord(words))
        }

      }
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
      <Header title="Mathematics" />
      <h2>Today we are going to learn maths!</h2>
      <div className='classContent'>
        <div className='subsubheader'>Score:</div>
        <div className='value'>{score}</div>
        <div className='subsubheader'>Question:</div>
        <div className='value'>{postProcess(randWord)}</div>
        <div className='subsubheader'>Answer:</div>
        <div className='value'>{value}</div>
        <Speech text={amendOutput(randWord)}
          style={{ width: "50%" }}
          pitch="1.0"
          rate="1.0"
          volume="1.0"
          voice="Google UK English Female" />
        <p className='helperTextOther'>Type the answers to the above equations</p>
      </div>
      {/* <div> {isComplete ? setPage(<congratsClass userInput="" />) : setPage(<page.type userInput="" />)}</div> */}
      <OptionsText backButton="true" text="Back" userInput={props.userInput} />
    </div>
  )
}

export default MathsClass