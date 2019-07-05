import React from 'react';

const Persons = (props) => {
    const { persons, filtered, deleteById } = props

    const checkPerson = () => {
        if (filtered === '' || filtered.length === 0) {
            // display persons array
            return persons.map(person => 
                <tr key={person.name}><td>{person.name}</td>
                    <td>{person.number}</td>
                    <td><button onClick={() => deleteById(person.id, person.name)}>delete</button></td></tr>)
        }
        else {
            return filtered.map(person => 
                <tr key={person.name}><td>{person.name}</td>
                    <td>{person.number}</td>
                    <td><button onClick={() => deleteById(person.id, person.name)}>delete</button></td></tr>)
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