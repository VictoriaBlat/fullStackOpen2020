import React from "react";

const CountryView = ({ info }) => {
  console.log(info);
  return (
    <div>
      {" "}
      <h1>{info.name}</h1>
      <p> Capital {info.capital}</p>
      <p> Population {info.population}</p>
      <h2>Languages</h2>
      <ul>
        {info.languages.map((lan) => {
          return <li key={lan.name}>{lan.name}</li>;
        })}
      </ul>
      <img
        style={{ width: "100px" }}
        src={info.flag}
        alt={`Flag of ${info.name}`}
      />
    </div>
  );
};

export default CountryView;
