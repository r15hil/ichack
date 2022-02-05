import React, { useCallback, useEffect, useState, setState }  from 'react'
import Speech from 'react-speech';

function randomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


const EnglishClass = () =>{

    let [value, setValue] = useState('')
    let [score, setScore] = useState(0)
    let [words, setWords]  = useState(["apple", "pear", "banana", "pineapple", "avocado", "grapes", "orange"])
    let randWord = randomWord(words)
    let [speechText, setSpeechText] = useState("Spell "+ randWord)
    
    const handleKeyPress = (event) => {
    //   if(event.key === 'y'){ //backspace //13 enter 32 space
    //     console.log(event.key)
    //   }
      if(event.keyCode >= 65 && event.keyCode <= 90 ){
        setValue(value + event.key)
      }
      else if(event.key === 'Backspace'){
        setValue(value.slice(0,-1))
      }
      else if(event.key === 'Enter'){
        setValue(value.toLowerCase())
        if(words.includes(value)){
            setScore(score += 100)
            console.log(typeof words)
            var index = words.indexOf(value)
            words.splice(index, 1)
            if (words.length === 0){
                setSpeechText("Wow! You've done it! Good Job!")
            }
            else{
                randWord = randomWord(words)
                setSpeechText("Spell "+ randWord)
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

        </div> 
        

    )
}

export default EnglishClass


