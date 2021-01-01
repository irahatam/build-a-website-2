import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import City from "../components/City";

function Home() {
  const history = useHistory();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Jakarta");

  const [cities, setCities] = useState([
    {
      name: "Jakarta",
      currentTemp: "0",
      weatherType: "",
      color: "bg-yellow-500",
    },
    {
      name: "Bandung",
      currentTemp: "0",
      weatherType: "",
      color: "bg-red-500",
    },
    {
      name: "Malang",
      currentTemp: "0",
      weatherType: "",
      color: "bg-blue-500",
    },
    // {
    //   name: "Taoyuan",
    //   currentTemp: "0",
    //   weatherType: "",
    //   color: "bg-blue-500",
    // },
    // {
    //   name: "New York",
    //   currentTemp: "0",
    //   weatherType: "",
    //   color: "bg-blue-500",
    // },
  ]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then(function (response) {
        // Successful request
        const weather = response.data;
        setWeatherData(weather);
      })
      .catch(function (error) {
        // The best practice of coding is to not use console.log
        console.warn(error);
      });
  }, [city]);

  useEffect(() => {
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const city = urlParams.get("city");
    if (city) {
      setCity(city);
    }
  }, [history]);

  const { currentTemp } = useMemo(() => {
    let currentTemp = "";
    if (weatherData) {
      currentTemp = `${Math.round(weatherData.main.temp)}°C`;
    }
    return {
      currentTemp,
    };
  }, [weatherData]);

  useEffect(() => {
    updateAllWeatherData();
  }, []);

  async function fetchWeatherData(cityName) {
    const res = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then(function (response) {
        // Successful request
        const weather = response.data;
        return weather;
      })
      .catch(function (error) {
        // The best practice of coding is to not use console.log
        console.warn(error);
      });

    return res;
  }

  async function updateAllWeatherData(params) {
    cities.forEach(function (citiesItems, index) {
      let weatherData = {};
      let newCities = [...cities];

      fetchWeatherData(citiesItems.name).then((res) => {
        weatherData = res;
        console.log(weatherData);

        newCities[index].currentTemp = weatherData.main.temp;
        newCities[index].weatherType = weatherData.weather[0].main;
        setCities(newCities);
      });
    });
  }

  return (
    // Container
    <div className="flex flex-col h-screen bg-green-100">
      <div className="text-4xl text-yellow-500 font-semibold text-center my-4">
        Our Weather App
      </div>

      {cities.map((item, index) => (
        <City
          cityName={item.name}
          weatherType={item.weatherType}
          temp={item.currentTemp}
          color={item.color}
        />
      ))}
    </div>
  );
}

export default Home;
