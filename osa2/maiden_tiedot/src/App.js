import React, { useState, useEffect } from 'react';
import axios from 'axios';
import css from './index.css';

const App = (props) => {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')
  const [ filteredCountries, setFilteredCountries ] = useState([])

  // get all information
  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  };
  useEffect(hook, []);

  // check how many countries matches to filter
  const checkFiltered = () => {
    // if there are too many countries that matches
    if (filteredCountries.length > 10) {
      return <p>Too many matches, specify another filter</p>
    }
    // if there is only one
    else if (filteredCountries.length === 1) {
      return filteredCountries.map(country => (
        <div key={country.alpha2Code}>
          <h2 key={country.name}>{country.name}</h2>
          <p key={country.capital}>Capital: {country.capital} <br/>
          Population: {country.population}</p>
          <h3>Languages</h3>
          <ul key={country.alpha2Code}>
            {country.languages.map(language =>
              <li key={language.name}>{language.name}</li>)}
          </ul>
          <img src={country.flag} alt={country.name} />
        </div>
      ))
    }
    else {
      return filteredCountries.map(country => (
        <p key={country.name}>{country.name}</p>
      ))
    }
  }

  const filterCountries = event => {
    event.preventDefault();
    
    // check if filter is included in names, also change name to lowercase so it's more easier to compare
    if (filter !== '') {
      setFilteredCountries(countries.filter(country =>
        country.name.includes(filter) || 
        country.name.toLowerCase().includes(filter.toLowerCase())
      ))
      checkFiltered();
    }
  };

  // handle filter changes
  const handleFilterChange = event => setFilter(event.target.value);

  return (
    <div>
      <h1>Maiden tiedot</h1>
      <form onSubmit={filterCountries}>
        find countries: <input value={filter} onChange={handleFilterChange} />
      </form>
      <div>
        {checkFiltered()}
      </div>
    </div> 
  )
}

export default App