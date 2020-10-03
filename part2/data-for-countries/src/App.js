import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

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
      return el.name.includes(search);
    });
    setCountries(searchResult);
  };

  let outputDisplay = () => {
    if (countries.length > 10) {
      return <p>To many matches, specify another filter</p>;
    } else if (countries.length < 10 && countries.length > 1) {
      console.log(countries.length, "x.length", countries);
      return countries.map((el) => {
        return <p>{el.name}</p>;
      });
    } else if (countries.length === 1) {
      return (
        <div>
          {" "}
          <h1>{countries[0].name}</h1>
          <p> Capital {countries[0].capital}</p>
          <p> Population {countries[0].population}</p>
          <h2>Languages</h2>
          <ul>
            {countries[0].languages.map((lan) => {
              return <li>{lan.name}</li>;
            })}
          </ul>
          <img
            style={{ width: "100px" }}
            src={countries[0].flag}
            alt={`Flag of ${countries[0].name}`}
          />
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
