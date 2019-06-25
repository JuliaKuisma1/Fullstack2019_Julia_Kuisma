import React from 'react';

const Total = (props) => {
    var i = 0;
    var totalnum = 0;
    while ( i < 3)
    {
        totalnum += props.total[i].exercises;
        i++;
    }
    return (
        <div>
            <p>Total: {totalnum}</p>
        </div>
    )
}

export default Total;