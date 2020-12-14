import React from "react";
import Country from "./Country";

const ContGrid = ({ countries }) => {
  return (
    <div className="cont-grid">
      <div className="cards">
        {countries.map((country, i) => (
          <Country key={i} country={country} />
        ))}
      </div>
    </div>
  );
};

export default ContGrid;
