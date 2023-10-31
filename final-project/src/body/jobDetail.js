"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsFillBuildingFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import ContentCard from "./ContentCard";
import { Route, Link, Routes, useParams } from "react-router-dom";

export default function JobDetail() {
  let navigate = useNavigate();
  const routeChange = (event) => {
    let idData = parseInt(event.target.value);
    let path = `/job-detail/${idData}`;
    navigate(path);
  };

  const [data, setData] = useState(null);
  const params = useParams();
  let idData = params.userId;
  useEffect(() => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
      .then((res) => {
        setData([...res.data.data]);
        console.log(setData);
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center mt-4">
        <div className="p-[20px 0px] md:max-w-screen-xl w-full m-auto p-[0px 20px] ">
          <div className="flex flex-wrap justify-between ">
            {data !== null &&
              data.map((card, i) => {
                const handleIndex = (job_status) => {
                  if (job_status === 1) {
                    return <div className="text-blue-700">Dibuka</div>;
                  }
                  if (job_status === 0) {
                    return <div className="text-red-700">Ditutup</div>;
                  } else {
                    return null;
                  }
                };
                return (
                  <>
                    <div
                      key={i}
                      className=" flex-auto max-w-full sm:flex-[0_0_calc(50%-20px)] flex-[0_0_calc(33.33%-20px)] md:max-w-[calc(33.33%-20px)] w-full bg-[#B9B4C7] rounded-xl p-3.5	mb-3.5 
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FAF0E6]  duration-300 
                 max-w-[calc(50%-20px)] "
                    >
                      <div className="grid grid-cols-6 gap-y-1.5 ">
                        <div className="col-start-1 col-end-4">
                          {card.title}
                        </div>
                        <div className="col-start-4 col-end-7 justify-self-end self-center ">
                          {card.salary_min} - {card.salary_max}
                        </div>
                        <div className="col-start-1 col-end-7 truncate">
                          {card.job_description}
                        </div>
                        <div className="row-span-2">
                          <img
                            src={card.company_image_url}
                            alt={card.company_name}
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "10%",
                            }}
                          ></img>
                        </div>
                        <div className="col-start-2 justify-self-end self-center">
                          <BsFillBuildingFill />
                        </div>
                        <div className="col-start-3 col-end-7 self-center">
                          {card.company_name}
                        </div>
                        <div className="col-start-2 justify-self-end self-center ">
                          <BiCurrentLocation />
                        </div>
                        <div className="col-start-3 col-end-7  self-center">
                          {card.company_city}
                        </div>
                        <div className="col-start-3 col-end-7 self-center">
                          {handleIndex(card.job_status)}
                        </div>
                        <div className="col-start-1 col-end-7">
                          <button
                            value={card.id}
                            onClick={routeChange}
                            className="text-[#FAF0E6] bg-[#5C5470] hover:bg-[#352F44] rounded-xl max-w-[120px] h-10 flex justify-center	items-center mt-5 transition duration-300 w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Cek Disini
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
