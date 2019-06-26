import React, { useState } from 'react';

const App = (props) => {
  const [ persons, setPersons ] = useState([ { name: 'Arto Hellas' }])
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const rows = () => persons.map(person => 
    <li key={person.name}>{person.name}</li>)
    
  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addName}>
        <div>
          Name: <input value={newName} onChange={handleNameChange}/>
          <button type="submit">add</button> 
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {rows()}
      </ul>
    </div> 
  )
}

export default App