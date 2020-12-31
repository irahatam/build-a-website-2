import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCloud,
  faCloudRain,
  faSun,
  faSmog,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

function WeatherImage({ weatherType }) {
  switch (weatherType) {
    case "clear sky":
      return <FontAwesomeIcon icon={faSun} size="4x" />;

    case "light rain":
      return <FontAwesomeIcon icon={faCloudRain} size="4x" />;

    case "overcast clouds":
      return <FontAwesomeIcon icon={faSmog} size="4x" />;

    case "few clouds":
      return <FontAwesomeIcon icon={faCloud} size="4x" />;

    case "broken clouds":
      return <FontAwesomeIcon icon={faCloud} size="4x" />;

    case "moderate rain":
      return <FontAwesomeIcon icon={faCloudRain} size="4x" />;

    default:
      return <FontAwesomeIcon icon={faWind} size="4x" />;
  }
}

export default WeatherImage;
