import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import logo from '../assets/logo.png';
import heroImage from "../assets/laptop.jpg";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function SignUp() {

    const [data, setData] = useState({ firstName: '', lastName: '', email: '', password: '' });

    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const navigate = useNavigate();
  
    const handleClick = () =>{
        navigate('../Dashboard')
    }
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/api/auth/signup', data);
          alert(response.data.message);
        } catch (error) {
          alert(error.response?.data?.error || 'Signup failed');
        }
      };
  return (
    <div className="wrapper flex">
                <div className="hero md:flex-1 bg-no-repeat bg-cover md:flex hidden place-items-end px-9 pb-9 text-white" style={{backgroundImage: `url(${heroImage})`}}>
                    <article>
                        <h1 className="text-3xl font-bold mb-3">Welcome to Expense Tracker</h1>
                        <p className="text-[13px] leading-loose text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iusto aspernatur consequuntur consequatur, magnam molestias</p>
                    </article>
                </div>
                <div className="sign_in_page flex-1 flex items-center justify-center h-screen border">
                    <div className="shadow-2xl p-6 rounded-xl">
                        <div className="logo_img flex items-center gap-1 mb-5">
                            <p className=" text-[13px] font-bold text-brand-color">DimeDiary</p>
                            <img className="w-[30px]" src={logo} alt="logo image"/>
                        </div>
                        <h2 className="font-extrabold">Sign Up</h2>
                        <div className="text-[13px] text-gray-500 mb-5">to continue to Explore Tracker</div>
                        <div className="social_auth flex flex-col gap-2 mb-5">                      
                        </div>
                        <form onSubmit={handleSubmit}>
                        <div className="login_with_mail mb-7">
                            {/* <label htmlFor="email" className="font-bold text-[13px]">Email address</label> */}
                            <Input className="w-[300px] mt-1 mb-3" placeholder="First Name" type="text" required onChange={handleChange} value={data.firstName} name="firstName" />
                            <Input className="w-[300px] mt-1 mb-3" placeholder="Last Name" type="text" required onChange={handleChange} value={data.lastName} name="lastName" />
                            <Input className="w-[300px] mt-1 mb-3" placeholder="Email address" type="email" required onChange={handleChange} value={data.email} name="email" />
                            <Input className="w-[300px] mt-1 mb-3" placeholder="Password" type="text" required onChange={handleChange} value={data.password} name="password" />
                         
                            <Button type="submit" className="bg-brand-color w-full">Sign Up</Button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
  )
}
