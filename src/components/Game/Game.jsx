import React from "react";
import Scissors from "../Scissors/Scissors";
import Rock from "../Rock/Rock";
import Paper from "../Paper/Paper";

export default function Game(props) {
  const choixComponents = [<Rock />, <Paper />, <Scissors />];

  const choixRandom =
    choixComponents[Math.floor(Math.random() * choixComponents.length)];

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
        {choixRandom}
        <p>THE HOUSE PICKED</p>
      </div>
      <div className="flex flex-col justify-center items-center w-[100%]">
        <p className="text-white text-[44px] font-bold ">YOU WIN</p>
        <button 
        onClick={() => props.setNavigation('home')}
        className="text-[#1f3756] px-12 rounded-xl py-2 bg-white">PLAY AGAIN</button>
      </div>
    </div>
  );
}
