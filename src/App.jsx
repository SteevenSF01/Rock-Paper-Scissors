import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Rock from "./components/Rock/Rock";
import Paper from "./components/Paper/Paper";
import Scissors from "./components/Scissors/Scissors";

function App() {
  return (
    <>
      <Header />
      <div className="w-[100%] h-[55%] mt-8 flex flex-wrap justify-between p-2 containerMain">
        <Paper />
        <Scissors />
        <div className="w-[100%] h-[50%] flex justify-center items-end ">
        <Rock />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="border-2 border-[#606e85] text-white px-8 py-1 rounded-lg ">Rules</button>
      </div>
    </>
  );
}

export default App;
