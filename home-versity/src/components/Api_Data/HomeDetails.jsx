import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../details.js";

function HomeDetails() {
  //recive the dynamic data in useParams()
  const { userid } = useParams();
  const showdata = data[userid]; //take the data of specific home throough userid

  //go back functionality
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/hostel");
    //navigate(-1);
  };

  console.log(showdata);

  return (
    <div className="w-full h-screen  ">
      <div className="top w-[80%] h-1/2 m-auto">
        <img
          className="w-full h-full object-cover object-center"
          src={showdata.img}
          alt=""
        />
      </div>

      <div className="bottom  w-[80%] h-1/2 m-auto flex flex-col items-center">
        <h1 className="text-2xl font-semibold text-center">{showdata.name}</h1>

        <button
          onClick={goBackHandler}
          className="bg-blue-500 rounded p-2 text-white font-semibold text-center"
        >
          Previous
        </button>
      </div>
    </div>
  );
}

export default HomeDetails;
