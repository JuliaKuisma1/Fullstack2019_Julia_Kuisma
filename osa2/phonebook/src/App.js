import React, { useState } from 'react';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Filter from './components/Filter';

const App = (props) => {
  // array that contains all person information and new name and number
  const [ persons, setPersons ] = useState([ 
    { name: 'Arto Hellas', number: '040 123 4567' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  // adds information to persons array
  const addInformation = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };
    // display alert if name already exists
    if (checkValue(personObject.name, persons) === 'Exist') {
      alert(newName +' is already in the phonebook!');
    }
    // set personObject to array and clear input fields
    else {
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
    }
  }

  // checking if name already exists
  function checkValue(value, arr){
    var status = 'Not exist';
   
    for (var i = 0; i < arr.length; i++){
      var name = arr[i].name;
      if(name === value){
        status = 'Exist';
        break;
      }
    }
    return status;
  }

  const applyFilter = event =>{
    event.preventDefault();
    const filter = newFilter;
    console.log(filter);
    // set filter to persons array
  };

  // handle name input changes
  const handleNameChange = event => setNewName(event.target.value);
  
  // handle number input changes
  const handleNumberChange = event => setNewNumber(event.target.value);

  // handle filter changes
  const handleFilterChange = event => setNewFilter(event.target.value);
    
  return (
    <div>
      <h1>Phonebook</h1>
      <h3>Filter phonebook</h3>
        <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} applyFilter={applyFilter}/>
      <h3>Add a new</h3>
        <PersonForm handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}
          newName={newName} newNumber={newNumber} addInformation={addInformation} />
      <h3>Numbers</h3>
        <Persons persons={persons} />
    </div> 
  )
}

export default App