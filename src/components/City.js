import React from "react";
import { useHistory } from "react-router-dom";

// props -> cityName ,temp, color
function City({ cityName, weatherType, temp = 0, color }) {
  const history = useHistory();

  function handleClick() {
    history.push("/city?name=" + cityName);
  }

  return (
    <button
      className={"flex flex-row p-8 justify-between items-center " + color}
      onClick={handleClick}
    >
      <div className="flex flex-col">
        <div className="text-md font-light text-left">{weatherType}</div>
        <div className="text-2xl font-light">{cityName}</div>
      </div>

      <div className="text-5xl">{Math.round(temp)} °C</div>
    </button>
  );
}

export default City;
