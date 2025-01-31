import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import logo from '../assets/logo.png';
import heroImage from "../assets/laptop.jpg";
import { Link } from "react-router-dom";
import SignUp from "./Sign_Up";
import axios from 'axios';
import { useState } from "react";

function SignIn(){
    const [data, setData] = useState({ email: '', password: '' });

    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/api/auth/signin', data);
        alert('Sign in successful');
        console.log(response.data); // Token and user data
      } catch (error) {
        alert(error.response?.data?.message || 'Sign in failed');
      }
    };
    
    return(
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
                    <h2 className="font-extrabold">Sign in</h2>
                    <div className="text-[13px] text-gray-500 mb-5">to continue to Explore Tracker</div>

                          <form onSubmit={handleSubmit}>
                                            <div className="login_with_mail mb-7">

                                                <Input className="w-[300px] mt-1 mb-3" placeholder="Email address" type="email" required onChange={handleChange} value={data.email} name="email" />
                                                <Input className="w-[300px] mt-1 mb-3" placeholder="Password" type="text" required onChange={handleChange} value={data.password} name="password" />
                                                <Button type="submit" className="bg-brand-color w-full">Sign In</Button>
                                            </div>
                                            </form>
                 
                    <div className="mb-5 text-[14px]">
                        No account? 
                        <Link to = '/sign_up' className="text-brand-color font-semibold">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn;