import React from 'react';

const Content = props => {
    const { parts } = props
    const row = () => parts.map(part => 
        <p key={part.exercises}>{part.name}: {part.exercises}</p>
    )

    return (
        <div>
            {row()}
        </div>
    )
}

export default Content;