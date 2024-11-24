import React, { useState } from 'react';
import './App.css';

function App() {
  // Quiz questions
  const bitcoinQuestions = [
    {
      question: "What is Crypto currency?",
      options: ["Digital currency", "Food", "Car", "Auto Loan"],
      correctAnswer: "Digital currency",
    },
    {
      question: "What is Bitcoin?",
      options: ["A blockchain", "A game", "A bank", "A type of chain"],
      correctAnswer: "A blockchain",
    },
  ];

  const blockchainQuestions = [
    {
    question: "What is a blockchain?",
    options: ["A distributed ledger", "A game", "A type of database", "A cryptocurrency"],
    correctAnswer: " A distributed ledger",
    },
   {
    question: "What is the purpose of a smart contract?",
    options: ["Self-executing agreement", "Digital asset", "Mining tool", "Blockchain app"],
    correctAnswer: "Self-executing agreement",
  },
];

  // State to track the current question index and score
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption]= useState("");
  

  // Handle the selection of an answer
  const handleAnswer = () => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
      alert("That is Correct!");
    }else{
      alert("That is Incorrect!");
    }

    // Move to the next question 
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    } else {
      alert(`Quiz completed! Your final score is: ${score}`);
    }
  };

  return (
    <div className="main-container">
      <h1>Blockchain & Crypto Quest</h1>
      <h2>How to Play:</h2>
      <ul>
        <li>Answer a question about blockchain or crypto</li>
        <li>Get a reward in the form of a cryptocurrency token</li>
        <li>Use your tokens to buy items in the store</li>
        <p>Have fun and good luck!</p>
      </ul>

      <div className="quiz-container">
        <div className="question">
          <h3>{questions[currentQuestionIndex].question}</h3>
          <ul className="options">
            {questions[currentQuestionIndex].options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <label>
                  <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                  />
                {option}
                </label>
              </li>
            ))}
          </ul>

          <div className="submit-btn">
            <button onClick={handleAnswer} disabled={!selectedOption}>
            Submit Answer
            </button>
          </div>
        </div>

        <div className="score">
          <h2>Score: {score}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
