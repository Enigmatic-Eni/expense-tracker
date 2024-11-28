import React from "react";
import logo from "../assets/logo.png";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" bg-[#F7F8FA] min-h-screen">
      <div className=" flex items-center justify-between px-2 py-4 fixed w-full z-20 bg-white left-0 top-0 shadow-md">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" className=" w-[8%]" />
          <p className={`text-xl font-bold text-`}>DimeDiary</p>
        </div>

        <div className=" gap-6 flex items-center">
          <Button variant="outline" className="font-semibold">
            Dashboard
          </Button>
          <Button className="bg-[#823BE3] text-white px-4 py-2 rounded font-semibold hover:bg-[#8f66c7]">
            Get Started
          </Button>
        </div>
      </div>
      <div className=" bg-[#F7F8FA] pt-20 text-center">
        <div className=" py-16 ">
          <p className=" text-5xl font-bold pb-5">Manage your Expenses</p>
          <p className=" text-[#823BE3] text-5xl font-bold pb-7">
            Control your Money
          </p>
          <Button className=" bg-[#823BE3] text-white px-4 py-2 rounded font-semibold hover:bg-[#8f66c7]">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
