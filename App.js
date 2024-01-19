import Navbar from "./Navbar";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Names from "./Pages/Names";
import Salah from "./Pages/Salah";
import Tasbih from "./Pages/Tasbih";
import Fundamentals from "./Pages/Fundamentals";
import Quiz from "./Pages/Quiz";
import Books from "./Pages/Books";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Names" element={<Names />} />
          <Route path="/Salah" element={<Salah />} />
          <Route path="/Tasbih" element={<Tasbih />} />
          <Route path="/Fundamentals" element={<Fundamentals />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Books" element={<Books />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
