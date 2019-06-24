import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
    const { handleClick, text } = props
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
        console.log('clicked good')
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        console.log('clicked neutral')
    }

    const handleBadClick = () => {
        setBad(bad + 1)
        console.log('clicked bad')
    }

    const sum = () => good + neutral + bad
    
    const avarage = () => {
        var avarage = 0;
        // plus good reviews, minus bad reviews
        avarage += good
        avarage -= bad
        return avarage = avarage/sum();
    }

    const positive = () => {
        var positiveCount = 0;
        positiveCount += good
        return positiveCount/sum();
    }

    return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={handleGoodClick} text='good' />
            <Button handleClick={handleNeutralClick} text='neutral' />
            <Button handleClick={handleBadClick} text='bad' />
            <h1>Statistics</h1>
            <p>good: {good} <br/> neutral: {neutral}<br/> bad: {bad} <br/>
            all: {sum()} <br/> avarage: {avarage()}<br/> positive: {positive()} %</p>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root'))
