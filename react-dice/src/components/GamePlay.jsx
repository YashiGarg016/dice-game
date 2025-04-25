import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const roleDice = () => {
  if(!selectedNum) {
    setError("You need to select a number first!");
    return;
  }
 
  const randomNum = generateRandomNum(1, 6);
  setCurrentDice((prev) => randomNum);
    if(selectedNum === randomNum){
        setScore((prev) => prev + randomNum); }
    else{
        setScore((prev) => prev - 2);
    }

    setSelectedNum(undefined);
};


const resetScore = () => {
  setScore(0);
  
};





  return (
    <MainContainer>
        <div className="top_section">
          <TotalScore score={score} />
          <NumberSelector error={error}  setError={setError}
          selectedNum={selectedNum} setSelectedNum={setSelectedNum} />
        </div>
        <RollDice currentDice = {currentDice} roleDice={roleDice} />
        <div className="btns">
          <Button onClick={resetScore}>Reset</Button>
          <Button onClick={() => setShowRules(prev => !prev)}>{
            showRules ? "Hide " : "Show "
            }Da Rules</Button>
        </div>
 {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
.top_section{
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.btns{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
}
`;