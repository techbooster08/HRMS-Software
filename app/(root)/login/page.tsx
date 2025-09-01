// import Header from "@/components/public-website/Header";

import Header from "@/components/public-website/Header";
import Link from "next/link";
import { FaEnvelope, FaLock, FaGoogle, FaGithub } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa6";

export default function LoginSection() {
    return (
        <>
            

            <div className="relative mt-16 min-h-screen bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-700 flex items-center justify-center overflow-hidden ">

                {/* Curved bottom effect */}
                <div className="absolute bottom-0 left-0 w-full h-48 bg-white rounded-t-[50%]"></div>

                {/* Login Box */}
                <div className="relative mt-10 mb-10 z-10 bg-white backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-md">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                        Welcome Back
                    </h2>
                    <p className="text-center text-gray-500 mb-6">
                        Login to your account
                    </p>

                    {/* Form */}
                    <form>
                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-black mb-2">
                                Email
                            </label>
                            <div className="flex items-center border border-gray-500 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                                <FaEnvelope className="text-gray-400 mr-2" />
                                <input
                                    type="email"
                                    className="w-full outline-none text-gray-600"
                                    placeholder="Enter your email"
                                    required
                                
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="flex items-center border border-gray-500 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                                <FaLock className="text-gray-400 mr-2" />
                                <input
                                    type="password"
                                    className="w-full outline-none text-gray-600"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                        </div>

                        {/* Remember Me + Forgot Password */}
                        <div className="flex items-center justify-between mb-6">
                            {/* <label className="flex items-center text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    className="mr-2 rounded bg-white  accent-amber-50 "
                                    checked
                                    
                                />
                                Remember me
                            </label> */}
                            <a href="#" className="text-sm text-blue-600 hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-3 text-gray-500 text-sm">OR</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Social Logins */}
                    <div className="flex gap-4">
                        <button className="flex-1 flex items-center justify-center border text-red-600 border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
                            <FaGoogle className="mr-2 text-red-500" /> Google
                        </button>
                        <button className="flex-1 flex items-center justify-center text-black border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
                            <FaMicrosoft className="mr-2 text-gray-700" /> Microsoft
                        </button>
                    </div>

                    {/* Signup Link */}
                    <p className="text-center text-sm text-gray-600 mt-6">
                        Don’t have an account?{" "}
                        <Link href={'/register'} className="text-blue-600 hover:underline">
                            Start Free Trial
                        </Link>
                    </p>
                </div>
            </div>

        </>
    );
}
