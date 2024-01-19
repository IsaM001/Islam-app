import React, { useState, useEffect } from "react";
import "./Quiz.css";
import data from "../data.js";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [results, setResults] = useState({
    correct: 0,
    wrong: 0,
    feedback: [],
  });
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    // Shuffle questions and select the first 5
    const shuffledQuestions = shuffleArray(data).slice(0, 5);
    setQuestions(shuffledQuestions);
    setQuestion(shuffledQuestions[0]);
  }, []);

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const checkAnswer = (ans) => {
    if (!quizCompleted) {
      setSelectedOption(ans);
    }
  };

  const nextQuestion = () => {
    if (!quizCompleted) {
      if (selectedOption === null) {
        alert("Please select an option before proceeding!");
        return; // Stop execution if no option is selected
      }

      const isCorrect = question.answer === selectedOption;

      setResults((prevResults) => ({
        correct: prevResults.correct + (isCorrect ? 1 : 0),
        wrong: prevResults.wrong + (isCorrect ? 0 : 1),
        feedback: [
          ...prevResults.feedback,
          { question: question.question, isCorrect },
        ],
      }));

      const newIndex = index + 1;

      if (newIndex < questions.length) {
        setIndex(newIndex);
        setQuestion(questions[newIndex]);
        setSelectedOption(null);
      } else {
        setQuizCompleted(true);
      }
    }
  };

  const tryAgain = () => {
    window.location.reload();
  };
  return (
    <div>
      <h1 className="main-heading">Quiz</h1>
      <div className="quiz-container">
        {quizCompleted ? (
          <div className="quiz-results">
            <h2 className="quiz-results-text">Quiz Completed!</h2>
            <p className="quiz-results-text">
              Correct Answers: {results.correct}
            </p>
            <p className="quiz-results-text">Wrong Answers: {results.wrong}</p>
            <div>
              <h3 className="quiz-results-text">Feedback:</h3>
              <ul>
                {results.feedback.map((item, index) => (
                  <li
                    key={index}
                    className={
                      item.isCorrect ? "correct-answer" : "wrong-answer"
                    }
                  >
                    Question {index + 1} -{" "}
                    {item.isCorrect ? "Correct" : "Wrong"}
                  </li>
                ))}
              </ul>
            </div>
            <button className="quiz-button rest" onClick={tryAgain}>
              Restart
            </button>
          </div>
        ) : (
          <div>
            <h2 className="quiz-question">
              {index + 1}. {question.question}
            </h2>
            <hr />
            <ul className="quiz-choice">
              {Object.keys(question).map((key) => {
                if (key.includes("option")) {
                  const isSelected = selectedOption === key;

                  return (
                    <li
                      key={key}
                      className={`quiz-option ${isSelected ? "selected" : ""}`}
                      onClick={() => checkAnswer(key)}
                    >
                      {question[key]}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            <button className="quiz-button" onClick={nextQuestion}>
              Next
            </button>

            <div className="index">{`${index + 1} of ${
              questions.length
            } questions`}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
