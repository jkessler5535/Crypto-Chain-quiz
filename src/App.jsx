import { useState } from 'react'
import './App.css'

function App() {
  //Quiz questions
  const questions = [
    {
    question: "What is cryptocurrency",
    options: ["Digital currency", "Food", "Car", "Auto Loan"],
    correctAnswer: "Digital currency",
    },
    {
      question: "What is Bitcoin?",
      options: ["A blockchain", "A game", "A bank", "A type of chain"],
      correctAnswer: "A blockchain",
    },
  ];


  return(
      <div>
        <h1>Blockchain & Crypto Quest</h1>
        <h2>How to Play:</h2>
        <ul>
          <li>Answer a question about blockchain or crypto</li>
          <li>Get a reward in the form of a cryptocurrency token</li>
          <li>Use your tokens to buy items in the store</li>
          <p>Have Fun and good luck!</p>
        </ul>

        <div className="quiz-container">
        {questions.map((question, index) => (
          <div key={index} className="question">
            <h3>{question.question}</h3>
            <ul className="options">
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>{option}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

        