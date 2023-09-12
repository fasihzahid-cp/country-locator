import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

function CountryList({ selectedCountry, handleTick, handleDelete }) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h4 className="card-title">Selected Countries</h4>
        <ul className="list-unstyled">
          {selectedCountry.map((country, index) => (
            <li className="view-list list-group-item list-group-item-light" key={index}>
              <span>
                {country.isCompleted ? <del>{country.label}</del> : <p>{country.label}</p>}
              </span>
              {country.flag}
              {!country.isCompleted ? (
                <CheckCircleIcon style={{ color: 'green' }} onClick={() => handleTick(country, index)} />
              ) : (
                <CancelIcon style={{ color: 'red', objectFit: 'contain' }} onClick={() => handleTick(country, index)} />
              )}
              <Link className="btn btn-secondary"  state={{name: country.label, flag: country.flag } } to="/details">
                Details
              </Link>
              <button className="btn btn-danger" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CountryList;
