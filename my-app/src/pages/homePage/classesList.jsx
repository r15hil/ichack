import React from 'react'
import { AllClasses } from './AllClasses'
import Header from '../../components/header'
import OptionsText from '../../components/optionsText'
// import { NavLink } from 'react-router-dom'


const ClassesList = (props) => {

  // let [userInput, setUserInput] = useState('')
  // const changeOptionsHighlight = (newUserInput) => {
  //   setUserInput(newUserInput);
  // }

  return (
    <div>
      <Header title="Welcome to the School of Jeef!" />
      <ul style={{ width: '100%', listStyleType: 'none' }}>
        {AllClasses.map((item, index) => {
          return (
            <li key={index}>
              <OptionsText text={item.name} userInput={props.userInput} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ClassesList
