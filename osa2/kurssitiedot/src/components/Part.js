import React from 'react';

const Content = props => {
    const { parts } = props
    const row = () => parts.map(part => 
        <li key={part.exercises}>{part.name}: {part.exercises}</li>
    )

    return (
        <div>
            <ul>
                {row()}
            </ul>
        </div>
    )
}

export default Content;