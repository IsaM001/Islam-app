import React, { useState } from "react";
import axios from "axios";
import SALAH_API_KEY from "./apikey";
import "./Salah.css";

function PrayerTimes() {
  const [city, setCity] = useState("");
  const [prayerTimes, setPrayerTimes] = useState(null);

  const handleCityChange = (event) => {
    const inputValue = event.target.value;
    setCity(
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase()
    );
  };

  const handleCityChangeEnter = (event) => {
    if (event.key === "Enter") {
      if (/^[A-Za-z]+$/.test(city)) {
        handleFetchPrayerTimes();
      } else {
        alert("Please enter text only");
      }
    }
  };

  const handleFetchPrayerTimes = async () => {
    const options = {
      method: "GET",
      url: `https://muslimsalat.p.rapidapi.com/${city}.json`,
      headers: {
        "X-RapidAPI-Key": `${SALAH_API_KEY}`,
        "X-RapidAPI-Host": "muslimsalat.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setPrayerTimes(response.data);
    } catch (error) {
      console.error("Error fetching prayer times:", error);
    }
  };

  return (
    <div className="salah-explain">
      <h1 className="main-heading">The Salah</h1>
      <h3 className="main-paragraph">
        "Indeed, prayer has been decreed upon the believers a decree of
        specified times." - Surah Nisa Ayah 103
      </h3>
      <p className="main-paragraph">
        *Refer to your local mosque or another prayer app as some of the times
        given are not entirely accurate
      </p>
      <div className="container">
        <div className="dhikr-one">
          <h2>Virtue One</h2>
          <p className="salah-sec">
            Salah is means to earn forgiveness of your sins and it is a means to
            enter Paradise.
          </p>
          <h6>Abu Dawood 1420 and an-Nasaa’i 461</h6>
        </div>
        <div className="dhikr-two">
          {" "}
          <h2>Virtue Two</h2>
          <p className="salah-sec">
            Perform it correctly and genuinley with sincerity and it should
            deter you from indecency and wickedness
          </p>
          <h6>Surah Al-'Ankabut Ayah 45</h6>
        </div>
        <div className="dhikr-three">
          {" "}
          <h2>Virtue Three</h2>
          <p className="salah-sec">
            Salah is a means of attaining comfort and peace.
          </p>
          <h6>
            Surah Al-Baqarah Ayah 45 <br /> Surah Ar-Ra'd Ayah 28
          </h6>
        </div>
      </div>

      <div className="salah-checker">
        <div className="prayer-times">
          <div>
            <label>
              <input
                type="text"
                value={city}
                onChange={handleCityChange}
                onKeyDown={handleCityChangeEnter}
                placeholder="Enter your city name here..."
                pattern="[A-Za-z]+"
              />
            </label>
            <button
              onClick={handleFetchPrayerTimes}
              className="button-style"
              disabled={!/^[A-Za-z]+$/.test(city)}
            >
              Fetch Prayer Times
            </button>
          </div>
          {prayerTimes && (
            <div className="prayer-container">
              <h1> Today the prayer times in {city} are</h1>
              <h2 className="Fajr time">
                Fajr time is {prayerTimes.items[0].fajr}
              </h2>
              <h2 className="Dhur time">
                Dhur time is {prayerTimes.items[0].dhuhr}
              </h2>
              <h2 className="Asr time">
                Asr time is {prayerTimes.items[0].asr}
              </h2>
              <h2 className="Maghrib time">
                Maghrib time is {prayerTimes.items[0].maghrib}
              </h2>
              <h2 className="Isha time">
                Isha time is {prayerTimes.items[0].isha}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PrayerTimes;
