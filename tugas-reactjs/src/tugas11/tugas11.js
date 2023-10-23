"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DefaultTable() {
  const [data, setData] = useState(null);

  //RealTime Table updates
  const [FecthStatus, setFetchStatus] = useState(true);

  // FecthData (lanjutan RealTime)
  useEffect(() => {
    if (FecthStatus === true) {
      axios
        .get("https://backendexample.sanbercloud.com/api/student-scores")
        .then((res) => {
          setData([...res.data]);
        })
        .catch((err) => {});

      setFetchStatus(false);
    }
  }, [FecthStatus, setFetchStatus]);

  //HANDLING INPUT / CREATE
  const [input, setInput] = useState({ name: "", course: "", score: "" });

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "name") {
      setInput({ ...input, name: value });
    }
    if (name === "course") {
      setInput({ ...input, course: value });
    }
    if (name === "score") {
      setInput({ ...input, score: value });
    }
  };

  //Handle Update

  //State Indikator
  const [currentId, setCurrentId] = useState(-1);
  const handleUpdate = (event) => {
    let idData = parseInt(event.target.value);
    setCurrentId(idData);
    console.log(idData);
    axios
      .get(
        `https://backendexample.sanbercloud.com/api/student-scores/${idData}`
      )
      .then((res) => {
        let data = res.data;
        setInput({
          name: data.name,
          course: data.course,
          score: data.score,
        });
      });
  };

  // Handle Delete
  const handleDelete = (event) => {
    let idData = parseInt(event.target.value);
    console.log(idData);
    axios
      .delete(
        `https://backendexample.sanbercloud.com/api/student-scores/${idData}`
      )
      .then((res) => {
        setFetchStatus(true);
      });
  };

  // Handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(input);  CEK bisa tidak
    let { name } = input;
    let { course } = input;
    let { score } = input;
    // axios
    //   .post("https://backendexample.sanbercloud.com/api/student-scores", {
    //     name,
    //     course,
    //     score,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     setFetchStatus(true); //lanjutan realTime Table
    //   });

    // Handle Update pada Submit
    if (currentId === -1) {
      //create data
      axios
        .post("https://backendexample.sanbercloud.com/api/student-scores", {
          name,
          course,
          score,
        })
        .then((res) => {
          console.log(res);
          setFetchStatus(true);
        });
    } else {
      //UPDATE DATA
      axios
        .put(
          `https://backendexample.sanbercloud.com/api/student-scores/${currentId}`,
          {
            name,
            course,
            score,
          }
        )
        .then((res) => {
          console.log(res);
          setFetchStatus(true);
        });
    }
    setCurrentId(-1);

    // Mengosongkan input setelah diisi
    setInput({
      name: "",
      course: "",
      score: "",
    });
  };

  return (
    <div className="container">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <p>Tugas 11</p>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-purple-600 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                NO
              </th>
              <th scope="col" className="px-6 py-3">
                NAMA
              </th>
              <th scope="col" className="px-6 py-3">
                MATA KULIAH
              </th>
              <th scope="col" className="px-6 py-3">
                NILAI
              </th>
              <th scope="col" className="px-6 py-3">
                INDEX NILAI
              </th>

              <th scope="col" className="px-6 py-3">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {data !== null &&
              data.map((res, i, index) => {
                const handleIndex = (score) => {
                  if (score >= 80) {
                    return "A";
                  }
                  if (score >= 70 && score <= 80) {
                    return "B";
                  }
                  if (score >= 60 && score <= 70) {
                    return "C";
                  }
                  if (score >= 50 && score <= 60) {
                    return "D";
                  }
                  if (score < 50) {
                    return "E";
                  } else {
                    return null;
                  }
                };
                return (
                  <>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {i + 1}
                      </th>
                      <td className="px-6 py-4">{res.name}</td>
                      <td className="px-6 py-4">{res.course}</td>
                      <td className="px-6 py-4">{res.score}</td>

                      <td className="px-6 py-4">{handleIndex(res.score)}</td>
                      <td className="flex items-center px-6 py-4 space-x-3">
                        <button
                          value={res.id}
                          onClick={handleUpdate}
                          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                          Edit
                        </button>
                        <button
                          value={res.id}
                          onClick={handleDelete}
                          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
      <div>
        <p class="my-3.5">Form Data</p>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <span class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                nama:
              </span>

              <input
                required
                onChange={handleInput}
                value={input.name}
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </li>

            <li>
              <span class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Mata Kuliah:
              </span>
              <input
                required
                onChange={handleInput}
                value={input.course}
                name="course"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </li>
            <li>
              <span class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nilai:
              </span>
              <input
                required
                onChange={handleInput}
                value={input.score}
                name="score"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </li>
          </ul>

          <input
            type={"submit"}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 my-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          />
        </form>
      </div>
    </div>
  );
}
