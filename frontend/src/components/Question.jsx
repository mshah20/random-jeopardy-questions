import { useEffect, useState } from "react";
import axios from "axios";
import "./Question.css";

const Question = () => {

  const [correctMsg, setCorrectMsg] = useState(false);
  const [incorrectMsg, setIncorrectMsg] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [data, setData] = useState({});

  const handleUserAnswer = (e) => {
    setUserAnswer(e.target.value);
  }

  const handleCheck = () => {
  
    if(userAnswer.toLowerCase() === data.answer.toLowerCase()) {
      setCorrectMsg(true);
      setDisabled(true);
    }
    else {
      setIncorrectMsg(true);
      
      setTimeout(() => {
        setIncorrectMsg(false);
      }, 2000) 
    }
  }

  const handleKeyDown = (e) => {
    if(e.code === "Enter") {
      handleCheck();
    }
  }

  const handleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  }

  const fetchRandom = async () => {
    const { data } = await axios.get("http://localhost:5000/random");
    setData(data);
  }

  const handleNew = () => {
    fetchRandom();
    setDisabled(false);
    setCorrectMsg(false);
    setUserAnswer("");
  }

  useEffect(() => {
    fetchRandom();
  }, [])

  return(
    <div className="question-answer-container">

      <div className="details-container">
        <h1 className="details">{data.category}</h1>
        <h1 className="details"
          style={{color: "#fecd50"}}
        >
          ${data.price}
        </h1>
      </div>

      <h1 className="question">
        {data.question}
      </h1>

      <div className="input-container">
        <input id="answer"
          placeholder="Answer"
          value={userAnswer}
          disabled={disabled}
          onChange={handleUserAnswer}
          onKeyDown={handleKeyDown}
        />
        <button className="check-btn"
          disabled={disabled}
          onClick={handleCheck}
        >
          Check
        </button>
      </div>

      <div className="result-container">
        <p className={`transparent ${correctMsg ? "correct-message" : ""}`}>You are correct!</p>
        <p className={`transparent ${incorrectMsg ? "incorrect-message" : ""}`}>Try again.</p>
      </div>

      <div className="show-ans-container">
        <p className={`${showAnswer ? "answer" : ""}`}>{data.answer}</p>
        <button className="show-ans-btn" title="Show Answer" onClick={handleShowAnswer}>?</button>
      </div>

      <button className="new-btn" onClick={handleNew}>New Question</button>
      
    </div>
  );
}

export default Question;