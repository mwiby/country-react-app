import React from "react";
import { useState } from "react";

const Header = ({ getData, loading }) => {
  const [circle, setCircle] = useState([true]);

  const handleClick = () => {
    loading(true);
    setCircle(false);
    getData();
  };
  return (
    <>
      <header className="title">
        <h1>World Countries</h1>
        <div
          className={circle ? "circle-active" : "circle-inactive"}
          onClick={handleClick}
        ></div>
      </header>
    </>
  );
};

export default Header;
