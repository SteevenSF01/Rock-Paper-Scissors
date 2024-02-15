import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Rock from "./components/Rock/Rock";
import Paper from "./components/Paper/Paper";


function App() {
  return (
    <>
      <Header />
      <div className="w-[100%] h-[55%] border-4 my-12 containerMain">
        <Paper />
        <Rock />

      </div>
    </>
  );
}

export default App;
