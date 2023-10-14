import React, { useState } from "react";

function Tugas8(props) {
  const [jumlah, setJumlah] = useState(0);

  const handleChangeJumlah = () => {
    setJumlah(jumlah + 1);
  };

  return (
    <div className="container">
      <div className="counter">{jumlah}</div>
      <button
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={handleChangeJumlah}
      >
        Tambah
      </button>
      {jumlah > 10 ? <p>State count sudah lebih dari 10!!</p> : ""}
    </div>
  );
}
export default Tugas8;
