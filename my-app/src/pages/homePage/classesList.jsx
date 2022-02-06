import React from 'react'
import { AllClasses } from './AllClasses'
import Header from '../../components/header'
import OptionsText from '../../components/optionsText'
// import { NavLink } from 'react-router-dom'


const ClassesList = (props) => {

  return (
    <div>
      <Header title="Welcome to the School of Jeef!" />
      <ul style={{ width: '100%', listStyleType: 'none' }}>
        {AllClasses.map((item, index) => {
          return (
            <li className='textbox subHeader' key={index}>
              <OptionsText text={item.name} userInput={props.userInput} />
            </li>
          )
        })}
      </ul>
      <p className='helperTextMain'>Type to get started!</p>
    </div>
  )
}

export default ClassesList
