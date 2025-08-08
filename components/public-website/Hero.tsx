"use client";
import { FaPlayCircle, FaCheckCircle, FaRocket } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-purple-500/70 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-10">
        {/* Move the badge below the navbar area */}
        <div className="w-full flex justify-center pt-10">
          <span className="text-sm font-semibold tracking-widest bg-white/20 px-4 py-1 rounded-full mb-4 mt-8 inline-block">
            Revolutionary HR Technology
          </span>
        </div>

        <h1 className="text-5xl max-w-max md:text-7xl font-extrabold leading-tight">
          Transform Your 
          <span className="text-white"> HR Operations</span>
        </h1>

        <div className="w-full flex justify-center my-3">
          <div
            className="w-[40%] h-[8px] rounded-full"
            style={{
              background: "linear-gradient(90deg, #38bdf8 0%, #8b5cf6 50%,  #3b82f6 100%)"
            }}
          ></div>
        </div>

        <p className="mt-3 max-w-4xl text-justify text-xl  font-medium  text-white/90">
          Experience the future of human resource management with our groundbreaking HRMS platform.
          <span className="font-semibold text-white"> Automate everything</span>, boost productivity by <span className="font-semibold text-white">300%</span>, and revolutionize your workforceand revolutionize your  workforce workforce.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-white flex items-center gap-3 cursor-pointer text-blue-600 font-semibold px-7 py-4 rounded-full hover:bg-blue-100 transition-all">
            Start Free Trial <FaRocket />
          </button>
          <button className="bg-white/20 cursor-pointer hover:bg-white/30 transition-all px-7 py-4 rounded-full flex items-center gap-2">
            <FaPlayCircle /> Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
          {[
            { value: "500%", label: "Efficiency Increase", color: "text-white" },
            { value: "99.99%", label: "Uptime Guarantee", color: "text-white" },
            { value: "50,000+", label: "Global Users", color: "text-green-400" },
            { value: "24/7", label: "AI-Powered Support", color: "text-yellow-400" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-xl px-12 py-10"
            >
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-sm text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-lg text-white/90">
          <p className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> No Credit Card Required</p>
          <p className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Setup in 5 Minutes</p>
          <p className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Enterprise-Grade Security</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
