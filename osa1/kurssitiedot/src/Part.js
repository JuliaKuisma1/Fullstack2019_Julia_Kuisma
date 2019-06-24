import React from 'react';

const Content = props => {
    return (
        <div>
            <p>{props.parts.name}: {props.parts.exercises}</p>
        </div>
    )
}

export default Content;