import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import OptionsText from '../../components/optionsText'
import Speech from 'react-speech';
import "../../App.css"

function randomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const EnglishClass = (props) => {

  let [value, setValue] = useState('')
  let [score, setScore] = useState(0)
  let [words, setWords] = useState(["apple", "pear", "banana", "pineapple", "avocado", "grapes", "orange"])
  let [randWord, setRandWord] = useState(randomWord(words))
  let [speechText, setSpeechText] = useState("Spell " + randWord)

  // var opacity = 0;
  // var intervalID = 0;
  // window.onload = fadeout;
  // function fadeout() {
  //   setInterval(hide, 200);
  // }
  // function hide() {
  //   var body = document.getElementById("body");
  //   opacity =
  //     Number(window.getComputedStyle(body).getPropertyValue("opacity"))

  //   if (opacity > 0) {
  //     opacity = opacity - 0.1;
  //     body.style.opacity = opacity
  //   }
  //   else {
  //     clearInterval(intervalID);
  //   }
  // }

  const handleKeyPress = (event) => {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      setValue(value + event.key)
    }
    else if (event.key === 'Backspace') {
      setValue(value.slice(0, -1))
    }
    else if (event.key === 'Enter') {
      setValue(value.toLowerCase())
      if (words.includes(value)) {
        setScore(score += 100)
        var index = words.indexOf(value)
        words.splice(index, 1)
        if (words.length === 0) {
          setSpeechText("Wow! You've done it! Good Job! What Good Proficiency in English!!")
        }
        else {
          randWord = randomWord(words)
          setSpeechText("Spell " + randWord)
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
      <Header title="English" />
      <h2>Today we are going to learn some spellings!</h2>
      <div className='classContent'>
        <div className='subsubheader'>Score: </div>
        <div className='value'>{score}</div>
        <div className='subsubheader'>Word: </div>
        <div className="value">{value}</div>
        <Speech text={speechText}
          pitch="1.0"
          rate="1.0"
          volume="1.0"
          voice="Google UK English Female" />
        <p className='helperTextOther'>Type the words dictated (in lower case)</p>
      </div>
      <OptionsText backButton="true" text="Back" userInput={props.userInput} />
    </div>
  )
}
export default EnglishClass