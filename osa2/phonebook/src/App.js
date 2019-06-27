import React, { useState } from 'react';

const App = (props) => {
  // array that contains all person information and new name and number
  const [ persons, setPersons ] = useState([ { name: 'Arto Hellas', number: '040 123 4567' }])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  // need to implement check that if name already exists
  const addInformation = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  // handle name input changes
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  // handle number input changes
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  // display persons array
  const rows = () => persons.map(person => 
    <tr key={person.name}><td>{person.name}</td><td>{person.number}</td></tr>)
    
  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addInformation}>
        <table>
          <tbody>
            <tr>
              <td> Name: </td><td><input value={newName} onChange={handleNameChange}/></td>
            </tr>
            <tr>
              <td>Number: </td><td><input value={newNumber} onChange={handleNumberChange}/></td>
            </tr>
            <tr>
              <td><button type="submit">add</button></td> 
            </tr>
          </tbody>
        </table>
      </form>
      <h2>Numbers</h2>
      <table>
        <tbody>
          {rows()}
        </tbody>
      </table>
    </div> 
  )
}

export default App