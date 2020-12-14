import React from "react";

const ContGrid = ({ countries, loading }) => {
  return (
    <div className="cont-grid">
      {loading ? (
        <div className="pre-cards"></div>
      ) : (
        <div className="card"></div>
      )}
    </div>
  );
};

export default ContGrid;
