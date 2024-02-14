import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialLinkedin } from "react-icons/sl";

function Footer() {
  return (
    <footer className="bottom-0 w-full h-[30%] top-full ">
      <div className="w-full h-full bg-zinc-300 z-30 font-['gilroy'] ">
        <div className="top w-full h-[80%] flex  ">
          <div className="topleft w-2/6 h-full  p-4">
            <h1 className="mb-2">Our Logo</h1>
            <p className="text-sm tracking-tight font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, similique!
            </p>
          </div>

          <div className="topRight w-4/6 h-full  flex px-10 border-l-2 mt-2 ">
            <div className="w-1/2 h-full ">
              <h1 className="font-bold text-xl">Resourses</h1>
              <ul className="gap-10 font-semibold text-white ">
                <li>
                  <NavLink to="/home" className=" shadow-lg">
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/about" className="shadow-lg">
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/contact" className="shadow-lg">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hostel" className="shadow-lg">
                    Services
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="pl-10 p-2 border-l-2">
              <h1 className="font-bold text-xl">Follow us</h1>
              <div className="icons flex items-center gap-10 mt-5 ">
                <FaInstagramSquare className="text-red-500 font-semibold text-xl hover:scale-125 ease-linear duration-300 " />
                <FaTwitter className="text-blue-600 font-semibold text-xl hover:scale-125 ease-linear duration-300" />
                <TiSocialYoutube className="text-red-600 font-semibold text-xl hover:scale-125 ease-linear duration-300" />
                <SlSocialLinkedin className="text-blue-700 font-semibold text-xl hover:scale-125 ease-linear duration-300" />
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-zinc-700 text-lg font-semibold text-center ml-6 mt-4">
          2024 👋 All Rights Reserved
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
