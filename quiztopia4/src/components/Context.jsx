import React, { useContext, useState, createContext } from "react";

export const ScoreContext = createContext();

const ScoreContextProvider = ({ children }) => {
  const [showScore, setShowScore] = useState(false);
  return (
    <ScoreContext.Provider value={{ showScore, setShowScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreContextProvider;
