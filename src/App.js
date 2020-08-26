import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './Components/Country/Country';
import SelectedCountry from './Components/SelectedCountry/SelectedCountry';

function App() {
  const [countries,setCountries] = useState([]);
  const [selectedCountry,setSelectedCountry]  = useState([]);
  
  useEffect( ()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data => setCountries(data));
  }, []);

  const handleAddCountry = (country)=>{
    console.log('country added',country);
    const newSelectedCountry = [...selectedCountry , country];
    setSelectedCountry(newSelectedCountry);
  };
  return (
    <div className="App">
        <h1>Country Loaded: {countries.length}</h1>
        <h4>Country Added: {selectedCountry.length}</h4>
        <SelectedCountry selectedCountry={selectedCountry}></SelectedCountry>
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
