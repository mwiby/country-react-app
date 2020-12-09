import React from "react";

const Header = (props) => {
  const { getData, loading } = props;

  const handleClick = () => {
    loading(true);
    getData();
  };
  return (
    <>
      <header className="title">
        <h1>World Countries</h1>
        <div className="circle" onClick={handleClick}></div>
      </header>
    </>
  );
};

export default Header;
