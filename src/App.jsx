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

  //States for current question index, score, and quiz completion.
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  //Function to handle when answer is selected
  const handleAnswer = (selectedOption)=>{
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

   if(currentQuestionIndex + 1 < questions.length){
     setCurrentQuestionIndex(currentQuestionIndex + 1);
   }else{
    setIsQuizFinished(true);
   }
  };

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

        <div className = "quiz-container">
          <div className="score">
            <h2>Score:{score}</h2>
          </div>

          {setIsQuizCompleted ? (
          <div className="questions">
            <h3>Quiz Completed!</h3>
            <p>Your final score is: {score}</p>
          </div>
          ) : ( 
          <div className="questions">
            <h3>{questions[currentQuestionIndex].question}</h3>
            <ul className="options">
            {questions[currentQuestionIndex].options.map((option) => (
              <li key={option} onClick={() => handleAnswer(option)}>
              {option}
            </li>
            ))}
            </ul>
          </div>
          )}
          </div>
        </div>
  );
}
    

export default App
