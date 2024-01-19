import React, { useState } from "react";
import "./Names.css";
import data from "../names99.json";

const colors = Array.from({ length: data.length }, () => getRandomLightColor());

/*
  Having it as a random color before meant every letter entered was treatea as a re-render. 
  the colors are now precomputed and stored in the colors array outside the component. 
  This means that the colors won't be recalculated every time the component re-renders due to state changes (such as typing in the input field).
*/

function getRandomLightColor() {
  const getRandomChannelValue = () => Math.floor(Math.random() * 200 + 55);
  const red = getRandomChannelValue();
  const green = getRandomChannelValue();
  const blue = getRandomChannelValue();

  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}

function Names(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredNames = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const names99 = filteredNames.map((item, index) => (
    <div
      key={index}
      className="card"
      style={{ backgroundColor: colors[index] }}
    >
      <h1>{item.name}</h1>
      <h2>{item.transliteration}</h2>
      <h3>{item.meaning}</h3>
    </div>
  ));

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1 className="main-heading">The Ninety-Nine Names of Allah</h1>
      <div className="container">
        <div className="dhikr-one">
          <h2>Point One</h2>
          <p className="salah-sec">
            Allah has 99 names, etc., does not mean that Allah does not have any
            names apart from these, rather it means that whoever learns these 99
            of His names will enter Paradise.
          </p>
        </div>
        <div className="dhikr-two">
          {" "}
          <h2>Point Two</h2>
          <p className="salah-sec">
            “Allah has ninety-nine names, one hundred less one. Whoever learns
            them will enter Paradise.”
          </p>
          <h6> Al-Bukhari 2736 and Muslim 2677</h6>
        </div>
        <div className="dhikr-three">
          {" "}
          <h2>Point Three</h2>
          <p className="salah-sec">
            When you are making dua to Allah, call out to Him by using His names
            and attributes.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Start typing for a name"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="container">{names99}</div>
    </div>
  );
}

export default Names;
