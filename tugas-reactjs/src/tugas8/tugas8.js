import React, { useState } from "react";

function Tugas8(props) {
  const [jumlah, setJumlah] = useState(0);

  const handleChangeJumlah = () => {
    setJumlah(jumlah + 1);
  };

  return (
    <div className="container">
      <p>{jumlah}</p>
      <button onClick={handleChangeJumlah}>Tambah</button>
      {jumlah > 10 ? <p>State count sudah lebih dari 10!!</p> : ""}
    </div>
  );
}
export default Tugas8;
