import React from 'react';

const Persons = (props) => {
    const { persons } = props

    // display persons array
    const rows = () => persons.map(person => 
    <tr key={person.name}><td>{person.name}</td><td>{person.number}</td></tr>)

    return (
        <table>
            <tbody>
                {rows()}
            </tbody>
        </table>
    )
}

export default Persons