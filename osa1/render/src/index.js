import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
  
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
}
  
const Button = (props) => {
    console.log(props)
    const { handleClick, text } = props
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}
  
const App = (props) => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
        console.log('clicked left')
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
        console.log('clicked right')
    }

    return (
        <div>
        <div>
            {left}
            <Button handleClick={handleLeftClick} text='left' />
            <Button handleClick={handleRightClick} text='right' />
            {right}
            <History allClicks={allClicks} />
        </div>
        </div>
    )
}
  
ReactDOM.render(<App />, 
document.getElementById('root'))