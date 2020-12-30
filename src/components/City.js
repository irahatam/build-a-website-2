import React from "react";
import { useHistory } from "react-router-dom";

// props -> cityName ,temp, color
function City({ cityName, temp, color }) {
  const history = useHistory();

  function handleClick() {
    history.push("/city?name=" + cityName);
  }

  return (
    <button
      className={"flex flex-row p-8 justify-between items-center " + color}
      onClick={handleClick}
    >
      <div className="text-2xl font-light">{cityName}</div>
      <div className="text-5xl">{temp}</div>
    </button>
  );
}

export default City;
