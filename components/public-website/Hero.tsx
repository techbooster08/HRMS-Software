"use client";
import { FaPlayCircle, FaCheckCircle } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-purple-600/70 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
        <span className="text-sm font-semibold tracking-widest bg-white/20 px-4 py-1 rounded-full mb-4">
          Revolutionary HR Technology
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Transform Your <br />
          <span className="text-white">HR Operations</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg font-medium text-white/90">
          Experience the future of human resource management with our groundbreaking HRMS platform.
          <span className="font-semibold text-white"> Automate everything</span>, boost productivity by <span className="font-semibold text-white">300%</span>, and revolutionize your workforce.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition-all">
            Start Free Trial
          </button>
          <button className="bg-white/20 hover:bg-white/30 transition-all px-6 py-3 rounded-full flex items-center gap-2">
            <FaPlayCircle /> Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
          <div>
            <p className="text-2xl font-bold text-white">500%</p>
            <p className="text-sm text-white/80">Efficiency Increase</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">99.99%</p>
            <p className="text-sm text-white/80">Uptime Guarantee</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-400">50,000+</p>
            <p className="text-sm text-white/80">Global Users</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-yellow-400">24/7</p>
            <p className="text-sm text-white/80">AI-Powered Support</p>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/90">
          <p className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> No Credit Card Required</p>
          <p className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Setup in 5 Minutes</p>
          <p className="flex items-center gap-2"><FaCheckCircle className="text-green-400" /> Enterprise-Grade Security</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
