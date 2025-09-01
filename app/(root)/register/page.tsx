"use client";

import Header from "@/components/public-website/Header";
import Link from "next/link";
import {
    FaEnvelope,
    FaLock,
    FaUser,
    FaGoogle,
    FaGithub,
    FaIndustry,
    FaPhone,
    FaBuilding,
} from "react-icons/fa";

export default function RegisterSection() {
    return (
        <>

            <div className="relative min-h-screen pt-24 bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-700 flex items-center justify-center overflow-hidden">
                {/* Curved white bottom */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-white rounded-t-[50%]"></div>

                {/* Register Box */}
                <div className="relative z-20 mb-10 bg-white backdrop-blur-md shadow-lg rounded-2xl p-8 w-full max-w-3xl">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-1">
                        Start Your Free Trial
                    </h2>
                    <p className="text-center text-gray-500 mb-6">
                        Sign up to get started
                    </p>

                    {/* Form */}
                    <form className="w-full space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Company Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Company Name *
                                </label>
                                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                                    <FaBuilding className="text-gray-400 mr-2" />
                                    <input
                                        type="text"
                                        placeholder="Your Company Name"
                                        className="w-full outline-none text-gray-700 placeholder-gray-400"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name *
                                </label>
                                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                                    <FaUser className="text-gray-400 mr-2" />
                                    <input
                                        type="text"
                                        placeholder="John Smith"
                                        className="w-full outline-none text-gray-700 placeholder-gray-400"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Work Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Work Email *
                                </label>
                                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                                    <FaEnvelope className="text-gray-400 mr-2" />
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full outline-none text-gray-700 placeholder-gray-400"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number *
                                </label>
                                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                                    <FaPhone className="text-gray-400 mr-2" />
                                    <input
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        className="w-full outline-none text-gray-700 placeholder-gray-400"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Password *
                                </label>
                                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                                    <FaLock className="text-gray-400 mr-2" />
                                    <input
                                        type="password"
                                        placeholder="Create password"
                                        className="w-full outline-none text-gray-700 placeholder-gray-400"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm Password *
                                </label>
                                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                                    <FaLock className="text-gray-400 mr-2" />
                                    <input
                                        type="password"
                                        placeholder="Confirm password"
                                        className="w-full outline-none text-gray-700 placeholder-gray-400"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Company Size */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Company Size *
                                </label>
                                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                                    <select
                                        className="w-full outline-none text-gray-700 bg-transparent"
                                        required
                                    >
                                        <option value="">Select company size</option>
                                        <option value="1-10">1-10 employees</option>
                                        <option value="11-50">11-50 employees</option>
                                        <option value="51-200">51-200 employees</option>
                                        <option value="200+">200+ employees</option>
                                    </select>
                                </div>
                            </div>

                            {/* Industry */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Industry *
                                </label>
                                <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                                    <FaIndustry className="text-gray-400 mr-2" />
                                    <select
                                        className="w-full outline-none text-gray-700 bg-transparent"
                                        required
                                    >
                                        <option value="">Select industry</option>
                                        <option value="tech">Technology</option>
                                        <option value="finance">Finance</option>
                                        <option value="health">Healthcare</option>
                                        <option value="education">Education</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                        >
                            Register
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
                            <FaGithub className="mr-2 text-gray-700" /> GitHub
                        </button>
                    </div>

                    {/* Login Link */}
                    <p className="text-center text-sm text-gray-600 mt-6">
                        Already have an account?{" "}
                        <Link href={"/login"} className="text-blue-600 hover:underline">
                            Login
                        </Link>
                    </p>
                </div>

            </div>

            {/* <div className="bg-white shadow-lg rounded-2xl p-5 max-w-3xl mx-auto text-center mb-5">

                <h2 className="text-xl font-bold text-gray-900">Join 10,000+ Companies</h2>
                <p className="text-gray-500 mt-1 text-sm">
                    Trusted by businesses worldwide for their HR needs
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mt-4">

                    <div className="flex flex-col items-center">
                        <div className="bg-green-100 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                stroke="currentColor" className="w-6 h-6 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2v2m4 0v2m0 0v2a2 2 0 11-4 0v-2m4 0a2 2 0 114 0v2a2 2 0 11-4 0v-2m4 0v-2c0-1.105-.895-2-2-2s-2 .895-2 2v2" />
                            </svg>
                        </div>
                        <p className="mt-2 text-xs font-medium text-gray-700">SSL Encrypted</p>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="bg-blue-100 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                stroke="currentColor" className="w-6 h-6 text-blue-500">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2v2m4 0v2m0 0v2a2 2 0 11-4 0v-2m4 0a2 2 0 114 0v2a2 2 0 11-4 0v-2m4 0v-2c0-1.105-.895-2-2-2s-2 .895-2 2v2" />
                            </svg>
                        </div>
                        <p className="mt-2 text-xs font-medium text-gray-700">SOC 2 Certified</p>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="bg-purple-100 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                stroke="currentColor" className="w-6 h-6 text-purple-500">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2v2m4 0v2m0 0v2a2 2 0 11-4 0v-2m4 0a2 2 0 114 0v2a2 2 0 11-4 0v-2m4 0v-2c0-1.105-.895-2-2-2s-2 .895-2 2v2" />
                            </svg>
                        </div>
                        <p className="mt-2 text-xs font-medium text-gray-700">24/7 Support</p>
                    </div>


                    <div className="flex flex-col items-center">
                        <div className="bg-orange-100 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                stroke="currentColor" className="w-6 h-6 text-orange-500">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2v2m4 0v2m0 0v2a2 2 0 11-4 0v-2m4 0a2 2 0 114 0v2a2 2 0 11-4 0v-2m4 0v-2c0-1.105-.895-2-2-2s-2 .895-2 2v2" />
                            </svg>
                        </div>
                        <p className="mt-2 text-xs font-medium text-gray-700">No Setup Fees</p>
                    </div>

                </div>

            </div> */}

            <div className="mb-10">
                <div className="text-center mb-5">
                    <h2 className="text-xl font-bold text-gray-900">Join 10,000+ Companies</h2>
                    <p className="text-gray-500 mt-1 text-sm">
                        Trusted by businesses worldwide for their HR needs
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 max-w-3xl mx-auto gap-4 mb-4">

                    <div className="flex flex-col items-center">
                        <div className="bg-green-100 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                stroke="currentColor" className="w-6 h-6 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2v2m4 0v2m0 0v2a2 2 0 11-4 0v-2m4 0a2 2 0 114 0v2a2 2 0 11-4 0v-2m4 0v-2c0-1.105-.895-2-2-2s-2 .895-2 2v2" />
                            </svg>
                        </div>
                        <p className="mt-2 text-xs font-medium text-gray-700">SSL Encrypted</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-blue-100 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                stroke="currentColor" className="w-6 h-6 text-blue-500">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2v2m4 0v2m0 0v2a2 2 0 11-4 0v-2m4 0a2 2 0 114 0v2a2 2 0 11-4 0v-2m4 0v-2c0-1.105-.895-2-2-2s-2 .895-2 2v2" />
                            </svg>
                        </div>
                        <p className="mt-2 text-xs font-medium text-gray-700">SOC 2 Certified</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-purple-100 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                stroke="currentColor" className="w-6 h-6 text-purple-500">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2v2m4 0v2m0 0v2a2 2 0 11-4 0v-2m4 0a2 2 0 114 0v2a2 2 0 11-4 0v-2m4 0v-2c0-1.105-.895-2-2-2s-2 .895-2 2v2" />
                            </svg>
                        </div>
                        <p className="mt-2 text-xs font-medium text-gray-700">24/7 Support</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-orange-100 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                                stroke="currentColor" className="w-6 h-6 text-orange-500">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2v2m4 0v2m0 0v2a2 2 0 11-4 0v-2m4 0a2 2 0 114 0v2a2 2 0 11-4 0v-2m4 0v-2c0-1.105-.895-2-2-2s-2 .895-2 2v2" />
                            </svg>
                        </div>
                        <p className="mt-2 text-xs font-medium text-gray-700">No Setup Fees</p>
                    </div>

                </div>
            </div>

        </>
    );
}
