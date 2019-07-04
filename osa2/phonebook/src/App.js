import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Filter from './components/Filter';
import personService from './services/persons';

const App = (props) => {
  // array that contains all person information
  // variables for setting name, number and filter, and filtered array
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ filtered, setFiltered ] = useState([])

  const hook = () => {
    // get all persons from json server
    personService
      .getAll()
        .then(initialPersons => {
          setPersons(initialPersons)
        })
  };

  useEffect(hook, []);

  // adds information by adding personObject to persons array
  const addInformation = event => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length +1
    };
    // display alert if name already exists
    if (checkValue(personObject.name, persons) === 'Exist') {
      alert(newName +' is already in the phonebook!');
    }
    // set personObject to array and clear input fields
    else {
      // add person to json server
      personService
        .createPerson(personObject)
          .then(createdPerson => {
            setPersons(persons.concat(createdPerson));
            setNewName('');
            setNewNumber('');
          })
    }
  }

  // checking if name already exists
  function checkValue(value, arr){
    var status = 'Not exist';
   
    // if name exists, change status and break the loop
    for (var i = 0; i < arr.length; i++) {
      var name = arr[i].name;
      if(name === value){
        status = 'Exist';
        break;
      }
    }
    return status;
  }

  // function that filters array, if filter is set, displays filtered array
  const filterArray = event => {
    event.preventDefault();
    
    // check if filter is included in names, also change name to lowercase so it's more easier to compare
    if (newFilter !== '') {
      const filteredArray = persons.filter(person =>
        person.name.includes(newFilter) || 
        person.name.toLowerCase().includes(newFilter.toLowerCase())
    );
      setFiltered(filteredArray);
    }
    // if filter is empty, display original array
    else {
      setFiltered(persons);
    }
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
        <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} filterArray={filterArray} filtered={filtered} />
      <h3>Add a new</h3>
        <PersonForm handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}
          newName={newName} newNumber={newNumber} addInformation={addInformation} />
      <h3>Numbers</h3>
        <Persons persons={persons} filtered={filtered} />
    </div> 
  )
}

export default App