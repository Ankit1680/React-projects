import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../details";

function HomeDetails({ data }) {
  const { userid } = useParams();

  return (
    <div className="w-full h-screen ">
      <h1 className="text-pink-400 font-semibold text-center  ">
        Hotels : {userid}
      </h1>
      <h1>Name: </h1>
    </div>
  );
}

export default HomeDetails;
