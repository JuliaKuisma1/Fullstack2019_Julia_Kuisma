import React, { useState, useEffect } from 'react';
import countryService from './services/service';
import Display from './components/Display';
import './index.css';

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ displayCountry, setDisplayCountry ] = useState()
  const [ filter, setFilter ] = useState('')
  const [ filteredCountries, setFilteredCountries ] = useState([])
  const [ weather, setWeather ] = useState([])

  // get all informationto countries array
  useEffect(() => {
    countryService
      .getAllCountries()
      .then(response => {
        setCountries(response)
      })
  }, []);


  // check how many countries matches to filter
  const checkFiltered = () => {
    // if there are too many countries that matches
    if (filteredCountries.length > 10) {
      return <p>Too many matches, specify another filter</p>
    }
    else if (filteredCountries.length === 1) {
      return <Display displayCountry={filteredCountries[0]} /> 
    }
    // else show countries and show buttons 
    else {
      return filteredCountries.map(country => (
        <div key={country.name}>
          {country.name}<button onClick={setTovalue(country)}>show</button><br/>
        </div>
      ))
    }
  }

  // function that handles form
  const filterCountries = event => {
    event.preventDefault();
    if (filter === '') {
      return null;
    }
    // check if filter is included in names, and test lower case too
    else {
      setFilteredCountries(countries.filter(country =>
        country.name.includes(filter) || 
        country.name.toLowerCase().includes(filter.toLowerCase())
      ))
    }
  };

  const setTovalue = (value) => {
    return () => {
      setDisplayCountry(value);
    }
  }

  // handle filter changes
  const handleFilterChange = event => setFilter(event.target.value);

  return (
    <div>
      <h1>Information about Countries</h1>
      <form onSubmit={filterCountries}>
        find countries: <input value={filter} onChange={handleFilterChange} />
      </form>
      <div id="info">
        {checkFiltered()}
        <Display displayCountry={displayCountry} weather={weather} />
      </div>
    </div> 
  )
}

export default App