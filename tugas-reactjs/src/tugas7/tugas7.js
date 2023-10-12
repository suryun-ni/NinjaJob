import React from "react";

function Tugas7(props) {
  return (
    <div className="container">
      <div className="container-list">
        <h1>Data diri peserta kelas Reactjs</h1>
      </div>
      <p>Nama Lengkap : {props.name} </p>
      <p>Email : {props.email}</p>
      <p>Batch Pelatihan : {props.batch} </p>
    </div>
  );
}

export default Tugas7;
