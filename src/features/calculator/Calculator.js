import React from 'react'
import './Calculator.scss'
import Button from './Button'
import { useSelector } from 'react-redux'
import { selectInput } from './calculatorSlice'
const buttons = ['(',')','%','AC',7,8,9,'/',4,5,6,'*',1,2,3,'-',0,'.','=','+']

function Calculator() {
  const input = useSelector(selectInput)

  return (
    <div className='caclulator'>
        <div className='caclulator__screen'>{input}</div>
        <div className='caclulator__buttons'>
            {buttons.map((button,index)=>{ return <Button buttonValue={button} key={index} />})}
        </div>
    </div>
  )
}

export default Calculator