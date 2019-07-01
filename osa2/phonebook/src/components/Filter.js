import React from 'react';

const Filter = (props) => {
    const { newFilter, handleFilterChange, filterArray } = props;
    return (
        <form onSubmit={filterArray}>
            Filter shown with: <input value={newFilter} onChange={handleFilterChange}/>
            <button type="submit">Apply</button>
        </form>
    )
}

export default Filter