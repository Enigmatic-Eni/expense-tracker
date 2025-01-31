import React from "react";
import logo from "../assets/logo.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () =>{
      navigate('/Sign_In')
  }

  return (
    <div className=" bg-[#F7F8FA] min-h-screen">
      <div className=" flex items-center justify-between px-2 py-4 fixed w-full z-20 bg-white left-0 top-0 shadow-md">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo image" className=" w-[8%]" />
          <p className={`text-xl font-bold text-`}>DimeDiary</p>
        </div>

        <div className=" gap-6 flex items-center">
          <Button variant="outline" className="font-semibold">
            Dashboard
          </Button>
          <Button onClick={handleClick} className="bg-[#823BE3] text-white px-4 py-2 rounded font-semibold hover:bg-[#8f66c7]">
            Get Started
          </Button>
        </div>
      </div>
      <div className=" bg-[#F7F8FA] pt-20 text-center">
        <div className=" py-16 ">
          {/* grouping the title as one */}
          <div className="title mb-7 text-5xl font-bold">
            <h1>Manage your Expenses</h1>
            <h1 className="text-[#823BE3]">Control your Money</h1>
          </div>
          <p className="font-bold mb-7">Start Creating Your Budget and Save Ton of Money</p>
          <Button onClick={handleClick} className=" bg-[#823BE3] text-white px-4 py-2 rounded font-semibold hover:bg-[#8f66c7]">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

