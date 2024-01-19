import React from "react";
import "./Books.css";

export default function Books() {
  return (
    <div>
      <h1 className="main-heading">Books you can read</h1>
      <div className="book-container">
        <div className="book one">
          <img src="../namebook.jpg" className="book-img" alt="book" />
          <h2 className="book-title">
            Explanation To The Beautiful And Perfect Names Of Allah
          </h2>
          <h4 className="book-author">
            Shaikh Abdur-Rahman Ibn Nasir As-Sa’di
          </h4>
          <p className="book-exp">
            A book which explains the names of Allah in a simple format that is
            easy to understand.{" "}
          </p>
          <a href="https://www.muslim-library.com/dl/books/English_Explanation_to_the_Beautiful_and_Perfect_Names_of_Allah.pdf">
            <button>Read me</button>
          </a>
        </div>
        <div className="book two">
          <img src="../HaythamBook.jpg" className="book-img" alt="book" />
          <h2 className="book-title">
            Three Fundamental Principle / Four Foundation/ Ten invalidators of
            Islam
          </h2>
          <h4 className="book-author">Sheikh Haytham Ibn Sarhan </h4>
          <p className="book-exp">
            A book that focuses on the three questions of the grave, the four
            foundations of shirk and the ten invalidators of Islam. The book is
            beneficial to every Muslim.
          </p>
          <a href="https://alruya.edu.kw/fileman/asp_net/%D9%85%D9%83%D8%AA%D8%A8%D8%A9%20%D8%A7%D9%84%D9%85%D8%AF%D8%B1%D8%B3%D8%A9/%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8%D8%A9%20%D8%A7%D9%84%D8%A5%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9/This%20is%20ISLAM%20The%20Three%20Fundamental%20Principles%20The-Four-Foundations-The-Ten-Nullifiers-of-Islam.pdf">
            <button>Read me</button>
          </a>
        </div>
        <div className="book three">
          <img src="../BinBazBook.png" className="book-img" alt="book" />
          <h2 className="book-title">
            The Authentic Creed(And the Invalidators of Islam){" "}
          </h2>
          <h4 className="book-author">Shaikh Ibn Baz</h4>
          <p className="book-exp">
            This small but important book covers all basic information and we
            hope that readers will recognize the importance of this treaties by
            Shaikh Ibn Baz.
          </p>
          <a href="https://ia601209.us.archive.org/20/items/4121369/4121369.pdf">
            <button>Read me</button>
          </a>
        </div>
      </div>
    </div>
  );
}
