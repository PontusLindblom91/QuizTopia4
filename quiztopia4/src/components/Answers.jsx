import React, { useState, useEffect } from "react";

function Answers({ answers, handleAnswerClick, correctAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [buttonClassNames, setButtonClassNames] = useState([]);

  useEffect(() => {
    const shuffled = [...answers].sort(() => Math.random() - 0.5);
    setShuffledAnswers(shuffled);
    setButtonClassNames(Array(shuffled.length).fill(""));
    setSelectedAnswer(null);
  }, [answers]);

  useEffect(() => {
    if (selectedAnswer !== null) {
      setButtonClassNames((prevClassNames) => {
        const classNames = [...prevClassNames];
        const correctIndex = shuffledAnswers.indexOf(correctAnswer);
        classNames.fill("");
        classNames[correctIndex] = "correct";
        const selectedAnswerIndex = shuffledAnswers.indexOf(selectedAnswer);
        if (selectedAnswerIndex !== correctIndex) {
          classNames[selectedAnswerIndex] = "wrong";
        }
        return classNames;
      });
    }
  }, [selectedAnswer, correctAnswer, shuffledAnswers]);

  const handleOnClick = (answer, index) => {
    setSelectedAnswer(answer);
    handleAnswerClick(answer);
  };

  return (
    <div>
      {shuffledAnswers.map((answer, index) => (
        <button
          key={index}
          onClick={() => handleOnClick(answer, index)}
          className={buttonClassNames[index]}>
          {answer}
        </button>
      ))}
    </div>
  );
}

export default Answers;
