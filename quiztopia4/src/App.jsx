import { useEffect, useState } from "react";
import "./App.css";
import QuizContainer from "./containers/QuizContainer";
import ScoreContextProvider from "./components/Context"; // Kanske ska vara scoreContext istället för scoreContextProvider

function App() {
  const [start, setStart] = useState(true);
  const [score, setScore] = useState(0);

  const handleCategoryClick = () => {
    setStart(false);
  };

  useEffect(() => {
    console.log(start);
  }, [start]);

  return (
    <ScoreContextProvider>
      {" "}
      <h1>QuizTopia</h1>
      <hr />
      <QuizContainer
        handleCategoryClick={handleCategoryClick}
        start={start}
        setStart={setStart}
        score={score}
        setScore={setScore}
      />
    </ScoreContextProvider>
  );
}

export default App;
