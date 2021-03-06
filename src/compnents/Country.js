import React from "react";

const Country = ({ country }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={country.flag} alt="flag of the country" />
        </div>
        <div className="card-back">
          <h2>{country.name}</h2>
          <ul>
            <li>
              <span>Capital: </span>
              {country.capital}
            </li>
            <li>
              <span>Population: </span>
              {country.population}
            </li>
            <li>
              <span>Region: </span>
              {country.region}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Country;
