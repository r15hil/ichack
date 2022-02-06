import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import OptionsText from '../../components/optionsText'
import Speech from 'react-speech';

function amendOutput(string) {
  if (string == "Wow! You've done it! Good Job! What Good Proficiency in Maths!!") {
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
    newString = inputString.replaceAll('plus', '+')
    // console.log("Plus")
  }
  if (inputString.includes('minus')) {
    newString = inputString.replaceAll('minus', '-')
    // console.log("Minus")
  }
  if (inputString.includes('times')) {
    newString = inputString.replaceAll('times', '*')
  }
  if (inputString.includes('divide')) {
    newString = inputString.replaceAll('divide', '/')
  }
  return newString
}

const MathsClassHard = (props) => {

  let [value, setValue] = useState("")
  let [score, setScore] = useState(0)
  let [words, setWords] = useState(["2 plus 2 minus 3", "4 plus 2 times 5", "9 times 4 plus 13", "7 plus 8 minus 2", "6 minus 5 minus 1", "4 divide 2 plus 4", "9 minus 3 divide 3", "2 times 9 plus 17"])

  let [randWord, setRandWord] = useState(randomWord(words))
  let [speechText, setSpeechText] = useState("Calculate " + randWord)


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
          setRandWord("Wow! You've done it! Good Job! What Good Proficiency in Maths!!")
        }
        else {

          setRandWord(randomWord(words))
        }

      }
      setValue('')
    }

    console.log("Event key:", event.key)
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div>
      <header>Maths Class</header>

      <p>Calculate: {postProcess(randWord)}</p>
      <p>Score: {score}</p>
      {/* {setSpeechText(randWord)} */}
      <p>Answer: {value}</p>
      <Speech text={amendOutput(randWord)}
        pitch="1.0"
        rate="1.0"
        volume="1.0"
        voice="Google UK English Female" />
      <OptionsText text="Back" userInput={props.userInput} />
    </div>
  )
}

export default MathsClassHard