import "./App.css";
import React from "react";
import Tugas6 from "./tugas6/tugas6";
import Tugas7 from "./tugas7/tugas7";

const App = () => {
  return (
    <>
      <Tugas6 />
      <Tugas7
        name="Tengku Surya Al Furqan"
        email="tengkusurya29@gmail.com"
        batch="50"
      />
    </>
  );
};

export default App;