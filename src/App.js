import { useState } from "react";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;

  //SO FUCKING IMPORTANT TO ADD THE HTTPS:// BEFORE THE API ENDPOINT, IF NOT, THE GET REQUEST WON'T PROCEED AND YOU'LL GET A SUPER ANOYING ERROR!
  const API = {
    key: process.env.REACT_APP_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/weather",
  };

  const [query, setQuery] = useState("");
  const [weatherObject, setWeatherObject] = useState(""); // we initialize weather object to a "" in order to ask later if it's empty or not.
  const [today, setToday] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      let getRequest = `${API.base}?appid=${API.key}&q=${query}&units=metric`;

      async function req() {
        const res = await fetch(getRequest);
        const response = await res.json();
        console.log(response);
        setWeatherObject(response);
      }

      req();

      const date = new Date();
      setToday(
        date.toLocaleString("en-US", {
          weekday: "long",
          day: "numeric",
          year: "numeric",
          month: "long",
        })
      );
    }
  };

  return (
    <div className="App">
      <main>
        <div className="search-div">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            value={query}
          ></input>
        </div>

        {typeof weatherObject.name != "undefined" ? (
          <div className="weather-div">
            <div className="weather-div__placedate">
              <div className="weather-div__placedate__place">
                <h1>
                  {weatherObject.name}, {weatherObject.sys.country}
                </h1>
              </div>
              <div className="weather-div__placedate__date">
                <p> {today} </p>
              </div>
            </div>
            <div className="weather-div__tempclouds">
              <div className="weather-div__tempclouds__temp">
                <p>{Math.round(weatherObject.main.temp)}º C</p>
              </div>
              <div className="weather-div__tempclouds__clouds">
                <p>{weatherObject.weather[0].main}</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
