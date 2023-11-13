import React from "react";
import Score from "./Score";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";

const GamePlay = () => {
  const [selectedNumber, setselectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [score, setscore] = useState(0)
  const [error, seterror] = useState("")


  const rn = (min, max) => {
    var mr= Math.floor(Math.random() * (max - min) + min);
    return mr;
  };

  const rollDice =()=>{
    if(!selectedNumber) {
      seterror("You have not selected any number")
      return;
    }
    seterror("")
    const random=rn(1,7);
    setcurrentDice((prev) => random)


    if(selectedNumber===random){
      setscore(prev=>prev + random)
    }else{
      setscore(prev => prev- random)
    }
    setselectedNumber(undefined)
  }

  return (
    <MainContainer>
      <div className="top">
        <Score score={score}/>
        <NumberSelector error={error} 
        seterror={seterror}
        selectedNumber={selectedNumber} setselectedNumber={setselectedNumber}/>
      </div>
      <RoleDice currentDice={currentDice} rollDice={rollDice}/>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
padding-top: 70px;
  .top {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;
