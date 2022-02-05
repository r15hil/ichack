import React, { useCallback, useEffect, useState, setState }  from 'react'

const EnglishClass = () => {

    let [value, setValue] = useState('')
    // this.state = ''
  
    
    const handleKeyPress = (event) => {
    //   if(event.key === 'y'){ //backspace //13 enter 32 space
    //     console.log(event.key)
    //   }
      if(event.key != 'Backspace' && event.key != 'Enter'){
        setValue(value + event.key)
      }
      else if(event.key === 'Backspace'){
        setValue(value.slice(0,-1))
      }
      else if(event.key === 'Enter'){
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
           <p>{value}</p>  
        </div>
        

    )
}

export default EnglishClass
