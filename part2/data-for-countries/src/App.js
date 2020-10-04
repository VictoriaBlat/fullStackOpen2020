import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CountryView from "./CountryView";
import ToggleCountry from "./ToggleCountry";
import Weather from "./Weather";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
    let searchResult = data.filter((el) => {
      return el.name.toUpperCase().includes(search.toUpperCase());
    });
    setCountries(searchResult);
  };

  let outputDisplay = () => {
    if (countries.length > 10) {
      return <p>To many matches, specify another filter</p>;
    } else if (countries.length < 10 && countries.length > 1) {
      console.log(countries.length, "x.length", countries);
      return countries.map((el) => {
        return (
          <div key={el.name}>
            <p>{el.name}</p>
            <ToggleCountry info={el} />
          </div>
        );
      });
    } else if (countries.length === 1) {
      return (
        <div>
          <CountryView info={countries[0]} />
          <Weather info={countries[0]} />
        </div>
      );
    } else if (countries.length === 0) {
      return (
        <div>
          <h2>Type in...</h2>
        </div>
      );
    }
  };

  return (
    <div>
      <p>Find countries</p>
      <input onChange={handleChange} value={search} />
      {outputDisplay()}
    </div>
  );
}

export default App;
