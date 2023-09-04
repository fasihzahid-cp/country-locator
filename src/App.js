import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import './App.css';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);

  const handleInputChange = async (newValue) => { //Got help from somewhere how to get this request save in a state
    setInputValue(newValue);
    if (newValue) {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${newValue}`);
        const countryNames = response.data.map((country) => ({
          label: country.name.common,
          value: country.name.common,
          flag: country.flag
        })); // getting data and selected values from the API
        setCountries(countryNames);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      setCountries([]); 
    }
  };

  const handleCountrySelect = (selectedOption) => {
    const filteredArray = selectedCountry?.filter(country => country.value !== selectedOption.value);
    selectedOption.isCompleted = false // appending an object
    const selectedCountriesList = [...filteredArray, selectedOption];
    setSelectedCountry(selectedCountriesList);  // this code idea was given by a senior and i found this helpful
  };
  

  // const handleTick = (country, index) =>{
  //   const check = [...selectedCountry]
  //   check.map((val, i) => {
  //       if(i == index){
  //           val.isCompleted = true
  //       }
  //     }
  //   )
  //   setSelectedCountry(check)
  // } // this was working fine but doesn't seem like a good

  
  
  //could,t handle toggle functionality so that's why went with second approach

  
  const handleTick = (country, index) => {
    console.log('countryyyyyyyyyyyyy', country); 
    const check = [...selectedCountry]; // Creating a copy of the array
    check[index].isCompleted = !check[index].isCompleted; // this will give false if true and true if false 
    setSelectedCountry(check);
  }
  
  

  console.log('stateee', selectedCountry)
  const handleDelete = (index) =>{
    const updatedSelectedCountry = selectedCountry.filter((_, idx) => idx !== index); // this is copied from somwhere but i don't understand what  , .filter((_, idx) in this _ is a placeholder for a value that we're not interested 
    setSelectedCountry(updatedSelectedCountry);
  }


  return (
    <div className="main-div">
      <h1>Country Locator</h1>
      <Select
        options={countries}
        inputValue={inputValue}
        onInputChange={handleInputChange}// input change that calls the api
        placeholder="Type a country name"
        onChange={handleCountrySelect} // Handle country selection
      />
      {selectedCountry?.length > 0 && (
        <div className="card mt-3">
          <div className="card-body">
            <h4 className="card-title">Selected Countries</h4>
            <ul className="list-unstyled ">
              {selectedCountry.map((country, index) => (
                <li className=' view-list list-group-item list-group-item-light ' key={index}> <span>
                {country.isCompleted ?  <del>{country.label}</del> :  <p>{country.label}</p>}
                
                  </span> {country.flag}   
                {!country.isCompleted ? <CheckCircleIcon style={{color:"green"}} 
                  onClick={() => handleTick(country, index)} /> :<CancelIcon style={{color:"red"}}
                  onClick={() => handleTick(country, index)} />  }
                  <button className='btn btn-secondary' onClick={() => handleDelete(index)}>Delete</button> 
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
