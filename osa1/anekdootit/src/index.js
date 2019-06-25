import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [random, setRandom] = useState(1)
    const [points, setPoints] = useState([0,0,0,0,0,0])

    // randomize anecdotes shown
    const randomize = () => {
        var randomnum = Math.floor((Math.random() * 5) + 1)
        // if randomizing same numbers, set a new one, still theres a chance to get same number
        if (random === randomnum) {
            setSelected(Math.floor((Math.random() * 5) + 1))
        }
        // else set random num and selected
        else {
            setRandom(randomnum)
            setSelected(random)
        }
    }

    // adding votes to hook
    const addVote = (selected) => {
        points[selected] += 1
        setPoints(points)
    }

    // getting the value of most voted anecdotes
    const mostViews = () => {
        let max = points.reduce(function (prev, current) {
            return prev > current ? prev : current
        })
        return max
    } 

    // getting the anecdote that was voted most
    function arraySearch(points, max) {
        for (var i=0; i < points.length; i++)
            if (points[i] === max)                    
                return i;
        return false;
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            "{props.anecdotes[selected]}" <br/>
            <p>has { points[selected] } votes</p>
            <button onClick={() => addVote(selected)}>vote</button>
            <button onClick={() => randomize()}>next anecdote</button>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[arraySearch(points, mostViews())]}</p>
            <p>has {mostViews()} votes</p>
        </div>
    )
}
const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />,
    document.getElementById('root'))