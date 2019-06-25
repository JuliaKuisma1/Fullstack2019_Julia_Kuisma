import React from 'react';
import Part from './Part';

const Content = (props) => {
    const { parts } = props

    return (
        <Part parts={parts} />
    )
}

export default Content;