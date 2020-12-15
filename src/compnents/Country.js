import React from "react";

const Country = ({ country }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={country.flag} alt="flag of the country" />
        </div>
        <div className="card-back"></div>
      </div>
    </div>
  );
};

export default Country;
