import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import debounce from 'lodash/debounce';
// import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryList from './components/CountryList';
import SelectCountry from './components/SelectCountry';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);

  const debounceSearch = debounce((searchTerm) => {
    if (searchTerm) {
      fetchCountryData(searchTerm);
    } else {
      setCountries([]);
    }
  }, 2000);

  const fetchCountryData = async (searchTerm) => {
    try {
      console.log('lets check call');
      const response = await axios.get(`https://restcountries.com/v3.1/name/${searchTerm}`);
      const countryNames = response.data.map((country) => ({
        label: country.name.common,
        value: country.name.common,
        flag: country.flag,
        alternative: country.altSpellings,
      }));
      console.log('response', countryNames);
      setCountries(countryNames);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
    debounceSearch(newValue);
    console.log('debounce');
  };

  const handleCountrySelect = (selectedOption) => {
    const filteredArray = selectedCountry?.filter((country) => country.value !== selectedOption.value);
    selectedOption.isCompleted = false;
    const selectedCountriesList = [...filteredArray, selectedOption];
    setSelectedCountry(selectedCountriesList);
  };

  const handleTick = (country, index) => {
    const check = [...selectedCountry];
    check[index].isCompleted = !check[index].isCompleted;
    setSelectedCountry(check);
  };

  const handleDelete = (index) => {
    const updatedSelectedCountry = selectedCountry.filter((_, idx) => idx !== index);
    setSelectedCountry(updatedSelectedCountry);
  };

  return (

      <div className="main-div">
        <h1>Country Locator</h1>
        <SelectCountry
          countries={countries}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleCountrySelect={handleCountrySelect}
        />
        {selectedCountry?.length > 0 && (
          <CountryList selectedCountry={selectedCountry} handleTick={handleTick} handleDelete={handleDelete} />
        )}
      </div>
    
  );
}

export default App;
