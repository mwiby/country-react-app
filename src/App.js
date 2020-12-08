import "./App.css";
import { useState, useEffect } from "react";
import Header from "./compnents/Header";

const App = () => {
  /*
  const [country, setCountry] = useState([]);
  const [loading, setloading] = useState([true]);

  const loadCountries = async () => {

    try {



    }
    catch(err) {
      console.log(err);
  }
}
*/
  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default App;
