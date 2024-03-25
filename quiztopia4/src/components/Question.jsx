import React, { useEffect, useState, useContext } from "react";
import Answers from "./Answers";
import { ScoreContext } from "./Context";

function Question({
  questionList,
  question,
  setCurrentIndex,
  currentIndex,
  start,
  setStart,
  score,
  setScore,
}) {
  const [answers, setAnswers] = useState([]);

  const { setShowScore } = useContext(ScoreContext);

  useEffect(() => {
    let list = question.incorrect_answers;

    list.push(question.correct_answer);
    setAnswers(list);
    console.log(question.correct_answer);
  }, [question]);

  const handleAnswerClick = (selectedAnswer) => {
    const correct = selectedAnswer === question.correct_answer;
    next();
    if (correct) {
      setScore(score + 1);
    }
  };

  const next = () => {
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
  
      if (currentIndex === questionList.length - 1) {
        setShowScore(true);
      }
    }, 1500); 
  };

  return (
    <div>
      <h2>{question.question}</h2>
      <Answers answers={answers} handleAnswerClick={handleAnswerClick}
        correctAnswer={question.correct_answer}/>
    </div>
  );
}

export default Question;
