import { useState } from 'react'
import './App.css'

function App() {
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
            <h2>Score:<span id="score">0</span></h2>
          </div>

          <div className="questions">
            <h3>Question 1:</h3>
            <ul className="options">
              <li>Currency</li>
              <li>Food</li>
              <li>Vehicle</li>
              <li>sport</li>
            </ul>
          </div>

        </div>
    </div>
  )
}
    

export default App
