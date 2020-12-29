import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import WeatherImage from "../components/WeatherImage";

const weatherKey = `TODO`; // Your API Key here

function Home() {
  // TODO
  return (
    <div className="flex flex-col h-screen bg-green-200 text-4xl">
      <div className="p-8 bg-white mb-24">HALO</div>
      <div className="p-8 bg-red-500">HALO</div>
      <div className="p-8 bg-blue-500">BANDUNG</div>
    </div>
  );
}

export default Home;
