import logo from "../assets/logo.png";
import { MdOutlineDashboard } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { LuPiggyBank } from "react-icons/lu";
import { RiFileListLine } from "react-icons/ri";
import { GiUpgrade } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);



  const links = [
    {
      name: "Dashboard",
      icon: <MdOutlineDashboard />,
      path: `/Dashboard`,
    },
    {
      name: "Budget",
      icon: <LuPiggyBank />,
      path: `/Budget`,
    },
    {
      name: "Expenses",
      icon: <RiFileListLine />,
      path: `/Expenses`,
    },
    {
      name: "Upgrade",
      icon: <GiUpgrade />,
      path: `/Upgrade`,
    },
  ];

  const path = useLocation().pathname;

  useEffect(()=>{
    console.log(path)
  })

  const currentUser = "Jerome";

  const initial = currentUser
    ?.split(" ")
    ?.map((n) => n[0])
    ?.join("");

  return (
    <div className=" ">
 
      <div className=" px-3 shadow w-[15rem] min-h-screen lg:flex flex-col justify-between hidden ">
        <div className=" ">
          <div className="flex items-center gap-2 py-5">
            <img src={logo} alt="" className=" w-[20%]" />
            <p className={`text-xl font-bold text-`}>DimeDiary</p>
          </div>
          <div className=" flex flex-col gap-5 px-4 pt-4">
            {links.map((items, index) => (
              <div key={index}>
                <Link to={items.path}
                  className={` flex items-center font-medium text-text-color gap-2 w-[90%] transition-all duration-500 ease-in-out py-3 pl-3 hover:bg-[#c2b2d9] hover:text-brand-color rounded-lg `}
                >
                  <p>{items.icon}</p>
                  <p>{items.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className=" flex gap-2 profile px-6 pb-7 hover:cursor-pointer">
          <div className=" bg-brand-color w-6 items-center text-center rounded-full text-white font-bold">
            {initial}
          </div>
          <p className=" text-text-color font-medium">Profile</p>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4  z-10 p-2 md:hidden"
      >
        {isOpen ? <MdClose size={24} /> : <FiMenu size={24} />}
      </button>

      <div
        className={`flex ${
          isOpen ? "w-[15rem]" : "w-0"
        } transition-all duration-300 absolute bg-white overflow-hidden`}
      >
        <div className=" px-3 shadow w-[15rem] min-h-screen flex flex-col justify-between ">
          <div className=" ">
            <div className="flex items-center gap-2 py-5 pl-6">
              <img src={logo} alt="" className=" w-[20%]" />
              <p className={`text-xl font-bold text-`}>DimeDiary</p>
            </div>
            <div className=" flex flex-col gap-5 px-4 pt-4">
            {links.map((items, index) => (
              <div key={index}>
                <Link to={items.path}
                  className={` flex items-center font-medium text-text-color gap-2 w-[90%] transition-all duration-500 ease-in-out py-3 pl-3 hover:bg-[#c2b2d9] hover:text-brand-color rounded-lg `}
                >
                  <p>{items.icon}</p>
                  <p>{items.name}</p>
                </Link>
              </div>
            ))}
            </div>
          </div>

          <div className=" flex gap-2 profile px-6 pb-7 hover:cursor-pointer">
            <div className=" bg-brand-color w-6 items-center text-center rounded-full text-white font-bold">
              {initial}
            </div>
            <p className=" text-text-color font-medium">Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}
