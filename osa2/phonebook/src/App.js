import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Filter from './components/Filter';
import Notification from './components/Notification';
import personService from './services/persons';

const App = () => {
  // array that contains all person information
  // variables for setting name, number and filter, and filtered array
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ filtered, setFiltered ] = useState([])
  const [ message, setMessage ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState(null)
  const [ state, setState ] = useState('error');

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

    // display window.confirm if name already exists
    if (checkValue(personObject.name, persons) === 'Exist') {
      var result = window.confirm(`${personObject.name} is already in the phonebook, replace old number with a new one?`);
      // set person the object user wants to update
      var person = persons.find(p => p.name === personObject.name);
      
      if (result === true)
      {
        personService
          .updatePerson(person.id, personObject)
          .then(response => 
            setPersons(persons.map(p => p.name === personObject.name ? response : p))
          )
          .catch (error => {
            setState("error");
            handleMessageChange(`Person ${person.name} was already removed from the server`, state);
          })
        setState("message")
        handleMessageChange(`Modified ${person.name}`);
      }
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
      setState("message");
      handleMessageChange(`Added ${personObject.name}`);
    }
  }

  // checking if name already exists, return status (exists/not exists)
  const checkValue = (value, arr) => {
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
    // if filter is empty, clear filtered array
    if (newFilter === '' || undefined) {
      setFiltered('');
    }
    // check if filter is included in names, also change name to lowercase so it's more easier to compare
    else {
      const filteredArray = persons.filter(person =>
        person.name.includes(newFilter) || 
        person.name.toLowerCase().includes(newFilter.toLowerCase())
      );
      setFiltered(filteredArray);
    }
  };

  // function to handle deletePerson
  const deleteById = (id, name) => {
    var result = window.confirm(`Delete ${name}?`);
    // if result is true, delete person by id and reload page
    if (result === true) {
      personService
        .deletePerson(id)
      window.location.reload();
    }
  }

  const handleMessageChange = (msg, state) => {
    if (state === "error") {
      setErrorMessage(msg);
    }
    else {
      setMessage(msg);
    }
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  }

  // handle name input changes
  const handleNameChange = event => setNewName(event.target.value);
  
  // handle number input changes
  const handleNumberChange = event => setNewNumber(event.target.value);

  // handle filter changes
  const handleFilterChange = event => setNewFilter(event.target.value);
    
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} errorMessage={errorMessage} />
      <h3>Filter phonebook</h3>
        <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} 
          filterArray={filterArray} filtered={filtered} />
      <h3>Add a new</h3>
        <PersonForm handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}
          newName={newName} newNumber={newNumber} addInformation={addInformation} />
      <h3>Numbers</h3>
        <Persons persons={persons} filtered={filtered} deleteById={deleteById} />
    </div> 
  )
}

export default App