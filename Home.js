import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Link to="/Fundamentals" className="names-link names-link-four">
        <div className="names-container names-container-four">
          <h3 className="home-text ">Fundamentals</h3>
        </div>
      </Link>
      <Link to="/Names" className="names-link names-link-99-names">
        <div className="names-container names-container-99-names">
          <h3 className="home-text ">99 Names of Allah</h3>
        </div>
      </Link>
      <Link to="/Salah" className="names-link names-link-salah">
        <div className="names-container names-container-salah">
          <h3 className="home-text ">The Prayer</h3>
        </div>
      </Link>
      <Link to="/Tasbih" className="names-link names-link-dhikr">
        <div className="names-container names-container-dhikr">
          <h3 className="home-text ">Dhikr of Allah</h3>
        </div>
      </Link>
      <Link to="/Books" className="names-link names-link-books">
        <div className="names-container names-container-books">
          <h3 className="home-text ">Books</h3>
        </div>
      </Link>
      <Link to="/Quiz" className="names-link names-link-quiz">
        <div className="names-container names-container-quiz">
          <h3 className="home-text ">Quiz</h3>
        </div>
      </Link>
    </div>
  );
}

export default Home;
