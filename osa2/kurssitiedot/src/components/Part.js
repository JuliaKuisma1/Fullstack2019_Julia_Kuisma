import React from 'react';
import Total from './Total';

const Content = props => {
    const { parts } = props

    const row = () => parts.map((part, i) => 
        <div>
            <h2>{part.name}</h2>
            {parts[i].parts.map(task =>
            <li key={task.id}>{task.name}: {task.exercises}</li>)}
            <Total total={parts[i].parts} />
        </div>
    )
    
    return (
        <div>
            {row()}
        </div>
    )
}

export default Content;