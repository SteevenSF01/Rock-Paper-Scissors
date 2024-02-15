import React, { useState, useEffect } from "react";
import Scissors from "../Scissors/Scissors";
import Rock from "../Rock/Rock";
import Paper from "../Paper/Paper";

export default function Game(props) {
  const choixComponents = [
    { type: "rock", component: <Rock /> },
    { type: "paper", component: <Paper /> },
    { type: "scissors", component: <Scissors /> },
  ];
  const [result, setResult] = useState("");
  const [choixRandom, setChoixRandom] = useState(null);

  useEffect(() => {
    const randomChoice =
      choixComponents[Math.floor(Math.random() * choixComponents.length)];
    setChoixRandom(randomChoice);
  }, []);

  const resultat = (choixUser, choixPc) => {
    if (
      (choixUser === "rock" && choixPc === "scissors") ||
      (choixUser === "scissors" && choixPc === "paper") ||
      (choixUser === "paper" && choixPc === "rock")
    ) {
      setResult("YOU WIN");
      props.setScore(props.score +1)
    } else if (choixUser === choixPc) {
        setResult("IT'S A DRAW");
    } else {
        setResult("YOU LOSE");
        if (props.score > 0) {
            props.setScore(props.score -1)
        }else{
            props.setScore(0)
        }
    }
  };

  useEffect(() => {
    if (choixRandom) {
      resultat(props.navigation, choixRandom.type);
    }
  }, [choixRandom, props.navigation]);

  return (
    <div className="w-[90%] h-[55%] mt-8 mx-auto flex flex-wrap justify-between p-2 ">
      <div className="w-[50%] h-[55%] text-white flex flex-col justify-between items-center  ">
        {props.navigation === "paper" ? (
          <Paper />
        ) : props.navigation === "scissors" ? (
          <Scissors />
        ) : (
          <Rock />
        )}
        <p>YOU PICKED</p>
      </div>

      <div className="w-[50%] h-[55%] text-white flex flex-col justify-between items-center ">
    
      {choixRandom ? choixRandom.component : null}
        <p>THE HOUSE PICKED</p>
      </div>
      <div className="flex flex-col justify-center items-center w-[100%]">
        <p className="text-white text-[44px] font-bold ">{result}</p>

        <button
          onClick={() => {
            props.setNavigation("home");
            // setResult("");
          }}
          className="text-[#1f3756] px-12 rounded-xl py-2 bg-white"
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
}