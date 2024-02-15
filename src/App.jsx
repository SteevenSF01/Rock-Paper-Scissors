import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Rock from "./components/Rock/Rock";


function App() {
  return (
    <>
      <Header />
      <div className="w-[100%] h-[55%] border-4 my-12 containerMain">
        <Rock />

      </div>
    </>
  );
}

export default App;
