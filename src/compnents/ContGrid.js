import React from "react";
import Country from "./Country";

const ContGrid = ({ countries }) => {
  return (
    <div className="cards">
      {countries.map((country, i) => (
        <Country key={i} country={country} />
      ))}
    </div>
  );
};

export default ContGrid;
