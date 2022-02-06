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
  var newString = inputString
  if (inputString.includes('plus')) {
    newString = inputString.replaceAll('plus', '+')
  }
  if (inputString.includes('minus')) {
    newString = newString.replaceAll('minus', '-')
  }
  if (inputString.includes('times')) {
    newString = newString.replaceAll('times', '*')
  }
  if (inputString.includes('divide')) {
    newString = newString.replaceAll('divide', '/')
  }
  return newString
}

const MathsClass = (props) => {

  let [value, setValue] = useState("")
  let [score, setScore] = useState(0)
  let [words, setWords] = useState(["2 plus 2 minus 3", "4 plus 2 times 5", "9 times 4 plus 13", "7 plus 8 minus 2", "6 minus 5 minus 1", "4 divide 2 plus 4", "9 minus 3 divide 3", "2 times 9 plus 17"])

  let [randWord, setRandWord] = useState(randomWord(words))
  // let [speechText, setSpeechText] = useState("Calculate " + randWord)
  let [isComplete, setComplete] = useState(false)
  let [page, setPage] = useState(<MathsClass userInput="" />)
  let [isCorrect, setCorrect] = useState(0)

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
        setCorrect(1)
        var index = words.indexOf(randWord)
        words.splice(index, 1)
        if (words.length === 0) {
          setRandWord("Wow! You've done it! Good Job! What Good Proficiency in Mathematics!!")
          setComplete(true)
        }
        else {

          setRandWord(randomWord(words))
        }

      } else {
        setCorrect(-1)
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
        <div className={`${isCorrect === 1 ? "correct" : isCorrect === -1 ? "incorrect" : "middling"}`}>
          {
            isCorrect === 1 ? "CORRECT ✔"
              : isCorrect === -1 ? "INCORRECT ✘"
                : ""
          }
        </div>
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