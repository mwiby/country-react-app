import "./App.css";
import { useState } from "react";
import Header from "./compnents/Header";
import ContGrid from "./compnents/ContGrid";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setloading] = useState([false]);

  const loadCountries = async () => {
    try {
      const res = await fetch(`https://restcountries.eu/rest/v2/all`);
      const arr = await res.json();
      setCountries(arr);
      setloading(false);
      console.log(arr);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <Header getData={loadCountries} loading={setloading} />
      <ContGrid />
    </div>
  );
};

export default App;
