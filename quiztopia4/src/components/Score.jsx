import React, { useContext, useState } from "react";
import Question from "./Question";
import { ScoreContext } from "../components/Context";

function Score({ score, setStart, setScore }) {
  const { setShowScore } = useContext(ScoreContext);

  const handleClick = () => {
    setStart(true);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div>
      <h3>Your score: {score}</h3>
      <button onClick={handleClick}>Play Again</button>
    </div>
  );
}

export default Score;
