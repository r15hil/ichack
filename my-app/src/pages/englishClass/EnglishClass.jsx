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
  let [level, setLevel] = useState(0)
  let [score, setScore] = useState(0)
  let [wordArray, setWordArray] = useState([["apple"], ["elephant"], ["blasphemy"]])
  let [words, setWords] = useState(["apple"])
  let [wordtoType, setwordtoType] = useState(randomWord(words))
  let [speechText, setSpeechText] = useState("Spell " + wordtoType)

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
    //   if(event.key === 'y'){ //backspace //13 enter 32 space
    //     console.log(event.key)
    //   }
    var tempValue = value
    var tempWords = words
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      setValue(value + event.key)
      tempValue += event.key
    }
    else if (event.key === 'Backspace') {
      setValue(value.slice(0, -1))
      tempValue = value.slice(0, -1)
    }
    else if (event.key === 'Enter') {
      setValue(value.toLowerCase())
      tempValue = value.toLowerCase()
      // console.log("Lowercase:" + tempValue)
      if (tempWords.includes(tempValue)) {
        setScore(score += 100)
        var index = tempWords.indexOf(tempValue)
        tempWords.splice(index, 1)
        if (tempWords.length === 0) {
          //console.log("newLevelArray ",newLevelArray)

          if (level <= 1) {
            setLevel(level += 1)
            setWords(wordArray[level])
            tempWords = wordArray[level]

            wordtoType = randomWord(tempWords)
            setSpeechText("Wow! You've done it! Good Job! What Good Proficiency in English!. Moving to level " + level + ". Now spell " + wordtoType)
          }
          else {
            setSpeechText("Well done!! You've completed all your words for the day.")
          }
        }
        else {
          wordtoType = randomWord(tempWords)
          setSpeechText("Spell " + wordtoType)
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