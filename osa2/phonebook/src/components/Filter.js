import React from 'react';

const Filter = (props) => {
    const { newFilter, handleFilterChange, applyFilter } = props;
    return (
        <form onSubmit={applyFilter}>
            Filter shown with: <input value={newFilter} onChange={handleFilterChange}/>
            <button type="submit">Apply</button>
        </form>
    )
}

export default Filter