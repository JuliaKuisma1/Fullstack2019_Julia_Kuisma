import React, { useState, useEffect } from 'react';
import axios from 'axios';
// eslint-disable-next-line
import css from './index.css';

const Display = props => {
  const { displayCountry } = props
  // if country is undefined, it doesn't display anything
  if (displayCountry === undefined) {
    return null;
  }
  // else display country information
  else {
    return (
      <div>
        <h2 key={displayCountry.name}>{displayCountry.name}</h2>
        <p key={displayCountry.capital}>Capital: {displayCountry.capital} <br/>
        Population: {displayCountry.population}</p>
        <h3>Languages</h3>
        <ul>
          {displayCountry.languages.map(language =>
            <li key={language.name}>{language.name}</li>)}
        </ul>
        <img src={displayCountry.flag} alt={displayCountry.name} /> 
      </div>
    )
  }
}

const App = (props) => {
  const [ countries, setCountries ] = useState([])
  const [ displayCountry, setDisplayCountry ] = useState()
  const [ filter, setFilter ] = useState('')
  const [ filteredCountries, setFilteredCountries ] = useState([])

  // get all informationto countries array
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
    // else show countries and show buttons 
    else {
      return filteredCountries.map(country => (
        <div key={country.name}>
          {country.name}<button onClick={() => showCountry(country)}>show</button><br/>
        </div>
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

  // set country as displayCountry
  const showCountry = country => {
    setDisplayCountry(country);
  }

  // handle filter changes
  const handleFilterChange = event => setFilter(event.target.value);

  return (
    <div>
      <h1>Information about EU Countries</h1>
      <form onSubmit={filterCountries}>
        find countries: <input value={filter} onChange={handleFilterChange} />
      </form>
      <div>
        {checkFiltered()}
      </div>
      <Display displayCountry={displayCountry} />
    </div> 
  )
}

export default App