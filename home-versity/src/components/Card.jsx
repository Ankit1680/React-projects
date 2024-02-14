import React from "react";
import { TbAirConditioning } from "react-icons/tb";
import { RiStarSFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiBowlFoodDuotone } from "react-icons/pi";


function Card({ data }) {
  return (
    <>
      <div className="relative w-[250px] h-[320px] bg-white m-4 rounded-tr-3xl  rounded-bl-3xl border-2 pb-2 shadow-md shadow-zinc-400">
        <div className=" absolute w-10 h-5 bg-black rounded-tl-lg rounded-br-lg mt-2">
          {data.isMale ? (
            <h3 className="text-white text-sm  text-center">M</h3>
          ) : (
            <h3 className="text-white text-sm  text-center">F</h3>
          )}
        </div>
        <div className="top w-full h-[40%]  rounded-tr-3xl rounded-br-3xl rounded-bl-3xl shadow-xl p-2">
          <img
            src={data.img}
            alt=""
            className="w-full h-full object-cover rounded-3xl "
          />
        </div>

        <div className="bottom w-full h-[60%]    rounded-bl-3xl p-2 font-sans">
          <h1 className="text-lg font-semibold font-['gilroy']">{data.name}</h1>
          <p className="text-sm tracking-tighter">{data.desc}</p>
          <div className="flex items-center g-2 shadow-xl">
            <div className="flex items-center px-1 border-2 border-blue-300 rounded-lg font-['gilroy']">
              {<PiBowlFoodDuotone />}
              <h3 className=" text-sm  p-1 mr-2 ">
                {data.isVeg ? (
                  <h3 className="font-semibold text-green-600">Veg Only</h3>
                ) : (
                  <h3 className="text-red-600 font-semibold tracking-tight">
                    Non Veg
                  </h3>
                )}
              </h3>
            </div>
            <div className="flex items-center m-2 border-2 border-blue-300 rounded-lg pl-1 tracking-tight">
              {<TbAirConditioning />}
              <h3 className=" text-sm p-1 mr-2 ">
                {data.isAc ? "AC" : "Non-AC"}
              </h3>
            </div>
          </div>

          <div className="star w-full flex justify-between items-center gap-6 ">
            <div className="border w-[100px] rounded-lg bg-green-500  py-1 px-1 flex justify-center items-center gap-2 mt-3">
              <h2 className="font-medium text-white ">{data.rating} stars</h2>
              {<RiStarSFill className="text-yellow-300" />}
            </div>

            <div className="flex justify-between items-center bg-blue-500 rounded-lg py-1.5 px-3 mt-3 mr-4 ">
              <button className="text-white text-sm flex justify-center items-center gap-1  ">
                {" "}
                Explore {<FaArrowRightLong />}
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Card;
