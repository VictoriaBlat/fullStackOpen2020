import React, { useState, useEffect } from "react";
import axios from "axios";
const api_key = process.env.REACT_APP_API_KEY;

const Weather = ({ info }) => {
  const [weather, setWeather] = useState("");
  const [islodaing, setIsLoading] = useState(true);
  const query = info.capital;
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${query}`
      )
      .then((res) => {
        setWeather(res.data);

        console.log(res.data);
        setIsLoading(false);
      });
  }, []);

  if (islodaing === true) {
    return <p>Is loading...</p>;
  } else
    return (
      <div>
        <h3>Weather in {query}</h3>

        <p style={{ fontWeight: "bold" }}>
          temperature: {weather.current.temperature} Celcius
        </p>
        <img src={weather.current.weather_icons}></img>
        <p style={{ fontWeight: "bold" }}>wind:</p>
        <p>
          {weather.current.wind_speed} mph direction {weather.current.wind_dir}
        </p>
      </div>
    );
};

export default Weather;
