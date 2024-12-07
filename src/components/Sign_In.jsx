import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import logo from '../assets/logo.png';
import heroImage from "../assets/laptop.jpg";

function SignUp(){
    return(
        <div className="wrapper flex">
            <div className="hero flex-1 bg-no-repeat bg-cover flex place-items-end px-9 pb-9 text-white" style={{backgroundImage: `url(${heroImage})`}}>
                <article>
                    <h1 className="text-3xl font-bold mb-3">Welcome to Expense Tracker</h1>
                    <p className="text-[13px] leading-loose text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iusto aspernatur consequuntur consequatur, magnam molestias</p>
                </article>
            </div>
            <div className="sign_in_page flex-1 flex items-center justify-center h-screen border">
                <form className="shadow-2xl p-6 rounded-xl">
                    <div className="logo_img flex items-center gap-1 mb-5">
                        <p className=" text-[13px] font-bold text-brand-color">DimeDiary</p>
                        <img className="w-[30px]" src={logo} alt="logo image"/>
                    </div>
                    <h2 className="font-extrabold">Sign in</h2>
                    <div className="text-[13px] text-gray-500 mb-5">to continue to Explore Tracker</div>
                    <div className="social_auth flex flex-col gap-2 mb-5">
                        <Button variant="outline" className="flex justify-start">
                            <FaFacebook className="text-blue-700"/>Continue with Facebook
                        </Button>
                        <Button variant="outline" className="flex justify-start">
                            <FcGoogle/>Continue with Google
                        </Button>
                    </div>
                    <div className="line flex items-center justify-center">
                        <span className="right flex-1 h-px bg-gray-300"></span>
                        <span className="px-4 text-[13px]">or</span>
                        <span className="left flex-1 h-px bg-gray-300"></span>
                    </div>
                    <div className="login_with_mail mb-7">
                        <label htmlFor="email" className="font-bold text-[13px]">Email address</label>
                        <Input className="w-[300px] mt-1 mb-3"/>
                        <Button className="bg-brand-color w-full">Continue</Button>
                    </div>
                    <div className="mb-5 text-[14px]">
                        No account? <a href="" className="text-brand-color font-semibold">sign up</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUp;