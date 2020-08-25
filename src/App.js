import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './Country/Country';

function App() {
  const [countries,setCountries] = useState([]);
  useEffect( ()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data => setCountries(data));
  }, []);

  const handleAddCountry = (country)=>{console.log('country added',country)};
  return (
    <div className="App">
        <h1>Country Loaded: {countries.length}</h1>
          {
            countries.map(country=><Country country={country} handleAddCountry={handleAddCountry}></Country>)
          }
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
    </div>
  );
}

export default App;
