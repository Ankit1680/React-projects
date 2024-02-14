import React from "react";
import { FaHeadphonesAlt } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialLinkedin } from "react-icons/sl";

function Contact() {
  return (
    <div className="w-full h-screen bg-zinc-200 pt-10 px-8">
      <div className="top w-full h-1/2 flex justify-center items-center  shadow-xl bg-[url('https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center py-2 rounded-xl ">
        <h1 className="text-5xl text-white font-bold text-center shadow-md shadow-blue-300 rounded-2xl px-4 font-['gilroy'] tracking-tight ">
          Team HomeVersity
        </h1>
      </div>

      <div className="w-full h-1/2  p-10 ">
        <div className="flex justify-between gap-2 font-['gilroy']  ">
          <div className="top w-4/12 h-full  ">
            <h1 className="text-xl font-semibold tracking-tighter hover:bg-pink-200  ease-linear duration-300 border rounded-md px-2 mb-2">
              Address
            </h1>
            <div className="flex items-center gap-2 pr-4">
              {<FaLocationDot className="text-green-500 text-2xl" />}
              <p className="text-sm tracking-tighter ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ducimus, obcaecati.
              </p>
            </div>
          </div>

          <div className="center w-4/12 h-full ">
            <h1 className="text-xl font-semibold tracking-tighter  mb-2  hover:bg-yellow-200  ease-linear duration-300 border rounded-md px-2">
              Customer Care
            </h1>

            <div className="flex items-center gap-2">
              {<FaHeadphonesAlt className="text-blue-500" />}
              <h2>9999 8888 22</h2>
            </div>
          </div>

          <div className="bottom w-4/12 h-full tracking-tighter ">
            <h1 className="text-xl font-semibold  mb-2 hover:bg-sky-200  ease-linear duration-300 border rounded-md px-2">
              Email Support
            </h1>
            <div className="flex items-center gap-2">
              {<MdOutlineMarkEmailRead className="text-pink-500" />}
              <h2>support@gmail.com</h2>
            </div>
          </div>
        </div>
        {/* <div className="w-full h-20  mt-4 p-2 flex justify-center items-center gap-10">
          <h1 className="text-2xl font-semibold text-zinc-700 bg-gradient-to-tl rounded-lg p-1 from-blue-500 shadow-2xl">
            Follow us on :
          </h1>
          <div className="icons flex  items-center gap-10">
            <FaInstagramSquare className="text-red-500 font-semibold text-xl hover:scale-125 ease-linear duration-300 " />
            <FaTwitter className="text-blue-600 font-semibold text-xl hover:scale-125 ease-linear duration-300" />
            <TiSocialYoutube className="text-red-500 font-semibold text-xl hover:scale-125 ease-linear duration-300" />
            <SlSocialLinkedin className="text-blue-700 font-semibold text-xl hover:scale-125 ease-linear duration-300" />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
