import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is 
      ${response.data.main.temp}°C`
    );
  }

  let apiKey = "fd9d9da952d98d244f4e2349d84a75af";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
}
