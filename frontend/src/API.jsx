/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import DisplayCard from "./DisplayCard.jsx";

export default function API({ city, name }) {
  let URL = "http://localhost:3000/weather?";
  // let API_KEY = "5f379b3009bb953135e022dbeab29120";

  let [weatherInfo, setWeatherInfo] = useState({});
  let Response = async () => {
    if (city === "") {
      return null; // as on first reload no data can also pass a example city in useState
    }
    try {
      console.log(name);
      let res = await fetch(`${URL}city=${city}&name=${name}`); //&appid=${API_KEY}&units=metric`);
      let jsonres = await res.json();

      let Weather = jsonres;
      console.log(Weather);
      setWeatherInfo(Weather);
    } catch (error) {
      setWeatherInfo({
        Error: `City not found!!`,
      });
    }
  };

  useEffect(() => {
    Response();
  }, [city]);

  return <DisplayCard info={weatherInfo}></DisplayCard>;
}
