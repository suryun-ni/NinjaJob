import "./App.css";
import React from "react";
import Tugas6 from "./tugas6/tugas6";
import Tugas7 from "./tugas7/tugas7";
import Tugas8 from "./tugas8/tugas8";
import Tugas9 from "./tugas9/tugas9";
import Tugas10 from "./tugas10/tugas10";
import Tugas11 from "./tugas11/tugas11";

const App = () => {
  return (
    <>
      <Tugas6 />
      <Tugas7
        name="Tengku Surya Al Furqan"
        email="tengkusurya29@gmail.com"
        batch="50"
      />
      <Tugas8 />
      <Tugas9 />
      <Tugas10 />
      <Tugas11 />
    </>
  );
};

export default App;
