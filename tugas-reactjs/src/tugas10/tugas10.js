"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DefaultTable() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://backendexample.sanbercloud.com/api/student-scores")
      .then((res) => {
        setData([...res.data]);
        console.log(res);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="container">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <p>Tugas 10</p>
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
              data.map((res, index) => {
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
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}
                      </th>
                      <td className="px-6 py-4">{res.name}</td>
                      <td className="px-6 py-4">{res.course}</td>
                      <td className="px-6 py-4">{res.score}</td>

                      <td className="px-6 py-4">{handleIndex(res.score)}</td>
                      <td className="flex items-center px-6 py-4 space-x-3">
                        <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                          Edit
                        </button>
                        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
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
    </div>
  );
}
