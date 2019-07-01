import React from 'react';

const Persons = (props) => {
    const { persons, filtered } = props

    const checkPerson = () => {
        if (filtered !== '' && filtered.length > 0) {
            return filtered.map(person => 
                <tr key={person.name}><td>{person.name}</td><td>{person.number}</td></tr>)
        }
    
        else {
            // display persons array
            return persons.map(person => 
                <tr key={person.name}><td>{person.name}</td><td>{person.number}</td></tr>)
        }
    }

    return (
        <table>
            <tbody>
                {checkPerson()}
            </tbody>
        </table>
    )
}

export default Persons