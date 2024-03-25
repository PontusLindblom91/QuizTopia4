import React, { useState, useEffect } from "react";

function Answers({ answers, handleAnswerClick, correctAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    const shuffled = [...answers].sort(() => Math.random() - 0.5);
    setShuffledAnswers(shuffled);
  }, [answers]);

  const handleOnClick = (answer) => {
    setSelectedAnswer(answer);
    handleAnswerClick(answer);
  };

  return (
    <div>
      {shuffledAnswers.map((answer, index) => {
        const isCorrect = answer === correctAnswer;
        const isSelected = answer === selectedAnswer;
        let className = "";
        if (isSelected) {
          className = isCorrect ? "correct" : "wrong";
        }
        return (
          <button
            key={index}
            onClick={() => handleOnClick(answer)}
            className={className}>
            {answer}
          </button>
        );
      })}
    </div>
  );
}

export default Answers;
