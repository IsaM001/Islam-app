import React, { useState } from "react";
import "./Fundamentals.css";

function Fundamentals() {
  const [popupContent, setPopupContent] = useState({
    text: "",
    pText: "",
    h3Text: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleCircleClick = (text, pText, h3Text) => {
    setPopupContent({ text, pText, h3Text });
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const tawheedCircles = [
    {
      title: "Tawheed of Lordship (Ar-Rububiyyah)",
      pText:
        "To single out Allah with His actions. Allah is the only Creator, Sustainer and Disposer of affairs. The evidence for Tawheed of Lordship is from Surah Al-Fatihah.",
      h3Text:
        '"All praise is for Allah—Lord of all worlds" - Surah Fatihah Ayah 2',
    },
    {
      title: "Tawheed of Worship (Al-Uluhiyyah)",
      pText:
        "To single out Allah in worship. This refers to our actions. Every act of worship that we do is for Allah alone. The evidence for this is from Surah Al-Fatihah.",
      h3Text:
        '"You ˹alone˺ we worship and You ˹alone˺ we ask for help" - Surah Fatihah Ayah 6',
    },
    {
      title: "Tawheed of the Names and Attributes of Allah (Asmaa wa Sifaat)",
      pText:
        "We single out Allah with that which He has named and described Himself with in His book (Quran) or in the statements of the Messenger of Allah ﷺ (Hadith) This is done by affirming that which He has affirmed for Himself and negating that which He has negated for Himself without distorting their meaning, denying them, describing them or giving examples. The evidence for the Tawheed of the Names and Attributes of Allah is from Surah Fatihah.",
      h3Text:
        '"The Most Compassionate, Most Merciful" - Surah Al Fatihah Ayah 3',
    },
  ];

  return (
    <div>
      <div>
        <h1 className="main-heading">Learn more about Islam</h1>
        <p className="main-paragraph">
          Islam is submitting to Allah by way of Tawheed. Surrendering your full
          obedience to Allah and staying away from Shirk and its people. We
          submit all of our affairs to Allah since we are slaves, and a slave
          must submit to the master. The Master is Allah.
        </p>
      </div>

      <div className="container">
        <div className="dhikr-one">
          <h2>Five Pillars of Islam</h2>
          <p className="salah-sec">
            <li>Shahada</li>
            <li>Salah</li>
            <li>Sawm</li>
            <li>Zakah</li>
            <li>Hajj</li>
          </p>{" "}
        </div>
        <div className="dhikr-two">
          <h2>Six Pillars of Imaan</h2>
          <p className="salah-sec">
            <li>Belief in Allah</li>
            <li>Belief in Angels</li>
            <li>Belief in Books </li>
            <li>Belief in Messengers</li>
            <li>Belief in the Last Day</li>
            <li>Belief in Qadr</li>
          </p>{" "}
        </div>
        <div className="dhikr-three">
          <h2>Ihsaan</h2>
          <p className="salah-sec">
            <li>Mushaahada - to worship Allah as if you see Him.</li>
            <li>Muraaqaba - to worship Allah knowing He is watching you.</li>
          </p>
        </div>
      </div>
      <div className="islam-explain">
        <h2 className="main-heading tawheed">Tawheed</h2>
      </div>
      <p className="main-paragraph">
        Linguistically it means to single something out. So what do you think it
        means Islamically? It means to single out Allah that which is specific
        to Him from His Lordship, Worship, and His Names and Attributes. <br />
        <br />
        <span className="below">Click each item below to learn more</span>
      </p>
      <div className="tawheed-container">
        {tawheedCircles.map((circle, index) => (
          <div
            key={index}
            className="circle"
            onClick={() =>
              handleCircleClick(circle.title, circle.pText, circle.h3Text)
            }
          >
            <h2>{circle.title}</h2>
            <p className="circle-p">{circle.pText}</p>
            <p className="circle-p">{circle.h3Text}</p>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className={`popup ${showPopup ? "show" : ""}`}>
          <h2>{popupContent.text}</h2>
          <p className="popup-p">{popupContent.pText}</p>
          <h3 className="popup-h3">{popupContent.h3Text}</h3>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Fundamentals;
