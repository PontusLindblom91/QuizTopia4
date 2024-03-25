import React, { useContext, useState } from "react";
import categories from "../services/CategoryService";
import QuizService from "../services/QuizService";
import Score from "../components/Score";
import { ScoreContext } from "../components/Context";

function QuizContainer({
  handleCategoryClick,
  start,
  setStart,
  score,
  setScore,
}) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { showScore } = useContext(ScoreContext);

  const handleClick = (category) => {
    setSelectedCategory(category);
    handleCategoryClick(category);
  };

  return (
    <div>
      {start ? (
        categories.map((category) => (
          <button
            id={category.id}
            key={category.id}
            onClick={() => {
              handleClick(category);
            }}>
            {category.title}
          </button>
        ))
      ) : (
        <>
          {showScore ? (
            <Score score={score} setScore={setScore} setStart={setStart} />
          ) : (
            <QuizService
              category={selectedCategory}
              start={start}
              setStart={setStart}
              score={score}
              setScore={setScore}
            />
          )}
        </>
      )}
    </div>
  );
}

export default QuizContainer;
