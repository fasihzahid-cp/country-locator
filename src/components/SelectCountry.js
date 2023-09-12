import React from 'react';
import Select from 'react-select';

function SelectCountry({ countries, inputValue, handleInputChange, handleCountrySelect }) {
  return (
    <div>
      <Select
        options={countries}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        placeholder="Type a country name"
        onChange={handleCountrySelect}
      />
    </div>
  );
}

export default SelectCountry;
