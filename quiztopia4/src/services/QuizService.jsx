import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import QuizContainer from "../containers/QuizContainer";
import Question from "../components/Question";
import he from 'he';



function QuizService({ category, start, setStart, score, setScore }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const url = category.url;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const decodedQuestions = data.results.map((item) => ({
          ...item,
          id: uuidv4(),
          question: he.decode(item.question),
        }));

        setQuestions(decodedQuestions);
      });
  }, []);

  return (
    <div>
      {questions && questions.length > 0 && (
        <Question
          questionList={questions}
          question={questions[currentIndex]}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          start={start}
          setStart={setStart}
          score={score}
          setScore={setScore}
        />
      )}
    </div>
  );
}

export default QuizService;
