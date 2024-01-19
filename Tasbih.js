import React, { useState } from "react";
import "./Tasbih.css";

function Tasbih() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <div className="page-explain">
        <h1 className="main-heading head">Tasbih</h1>
        <p className="main-paragraph">
          Take a moment to remember Allah. If you want to restart, click the
          center. Remember it is always better to use your fingers. “You must
          glorify Allah and declare the oneness and the sanctity of Allah. Count
          them on your fingers. Verily, the fingers will be questioned and made
          to testify. Do not be unmindful such that you forget the mercy of
          Allah.” Source: Sunan al-Tirmidhī 3583
        </p>
      </div>
      <div className="container">
        <div className="dhikr-one">
          <h2> سُبْحَانَ اللَّهِ وَبِحَمْدِه</h2>
          <p>
            "Whoever says, 'Subhan Allah wa bihamdihi,' 100 times a day, will be
            forgiven all his sins even if they were as much as the foam of the
            sea."
          </p>
          <h6>Sahih al-Bukhari 6405</h6>
        </div>
        <div className="dhikr-two">
          {" "}
          <h2>أَسْتَغْفِرُ ٱللَّٰهَ رَبِّي وَأَتُوبُ إِلَيْهِ</h2>
          <p>
            "There is (at times) some sort of shade upon my heart, and I seek
            forgiveness from Allah a hundred times a day."
          </p>
          <h6> Sahih Muslim 2702a</h6>
        </div>
        <div className="dhikr-three">
          {" "}
          <h2>الْإِخْلَاص</h2>
          <p>
            "Whoever recites ten times (Surah Ikhlas) a palace will be built for
            him in Paradise."
          </p>
          <h6>al-Mu’jam al-Awsaṭ lil-Ṭabarānī 281</h6>
        </div>
      </div>
      <button
        className="counter--minus"
        onClick={() => count > 0 && setCount(count - 1)}
      >
        –
      </button>
      <div className="counter--count" onClick={() => setCount(0)}>
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

export default Tasbih;
