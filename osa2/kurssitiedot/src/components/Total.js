import React from 'react';

const Total = (props) => {
    const { total } = props

    const totalnum = () => total.map(total => total.exercises).reduce(getSum, 0)

    function getSum (total, num) {
        return total + Math.round(num)
    }

    return (
        <div>
            <p><strong>Total of {totalnum()} exercises</strong></p>
        </div>
    )
}

export default Total;