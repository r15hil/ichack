import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import OptionsText from '../../components/optionsText'
import Speech from 'react-speech';

function randomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const EnglishClassHard = (props) => {

  let [value, setValue] = useState('')
  // let [level, setLevel] = useState(0)
  let [score, setScore] = useState(0)
  //let [wordArray, setWordArray] = useState([["pear"], ["elephant", "medium", "potato", "shortbread", "compound"], ["blasphemy", "outrageous", "unlawful", "television"]])
  let [words, setWords] = useState(["blasphemy", "outrageous", "unlawful", "television"])
  //["apple", "pear", "banana", "pineapple", "avocado", "grapes", "orange"]
  let [randWord, setRandWord] = useState(randomWord(words))
  let [speechText, setSpeechText] = useState("Spell " + randWord)

  const handleKeyPress = (event) => {
    //   if(event.key === 'y'){ //backspace //13 enter 32 space
    //     console.log(event.key)
    //   }
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
          //console.log("newLevelArray ",newLevelArray)

          //console.log("words", words)
          setSpeechText("Wow! You've done it! Good Job! What Good Proficiency in English!!")
        }
        else {
          randWord = randomWord(words)
          setSpeechText("Spell " + randWord)
        }

      }
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

  return (
    <div>
      <header>English Class</header>
      <p>Score: {score}</p>
      <p>Word: {value}</p>
      <Speech text={speechText}
        pitch="1.0"
        rate="1.0"
        volume="1.0"
        voice="Google UK English Female" />
      <OptionsText text="Back" userInput={props.userInput} />
    </div>
  )
}
export default EnglishClassHard