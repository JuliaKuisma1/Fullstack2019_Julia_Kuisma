import React from 'react';

const Display = props => {
    const { displayCountry, weather } = props
  
    // if country is undefined, it doesn't display anything
    if (displayCountry === undefined) {
      return null;
    }
    // else display country information
    else {
        console.log(weather);
      return (
        <div>
          <h2 key={displayCountry.name}>{displayCountry.name} | {displayCountry.alpha2Code} | {displayCountry.nativeName}</h2>
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

  export default Display