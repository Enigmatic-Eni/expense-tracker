import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function SignUp(){
    return(
        <div className="wrapper flex">
            <div className="hero flex-1">
                <img src="./laptop.jpg" alt="Hero image"/>
            </div>
            <div className="sign_in_page flex-1 flex items-center justify-center h-screen">
                <form className="shadow-xl p-6 rounded-xl">
                    <h2 className="text-blue-700 text-xl font-bold mb-4">Logo</h2>
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
                        <Button className="bg-blue-600 w-full">Continue</Button>
                    </div>
                    <span></span>
                </form>
            </div>
        </div>
    )
}
export default SignUp;