import React from 'react';
import Part from './Part';

const Content = (props) => {
    const { parts } = props

    return (
        <div>
            <Part parts={parts} />
        </div>
    )
}

export default Content;