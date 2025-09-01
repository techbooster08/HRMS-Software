'use client';

import { useState } from 'react';
import Image from 'next/image';
import SIA1 from '@/assets/public-website/Images/SIA1.jpg';
import SIA2 from '@/assets/public-website/Images/SIA2.jpg';
import SIA3 from '@/assets/public-website/Images/SIA3.jpg';
import SIA4 from '@/assets/public-website/Images/SIA4.jpg';
import { FaMobileAlt, FaPalette, FaChartBar } from "react-icons/fa";

const tabs = [
  {
    name: 'Employee Dashboard',
    image: SIA1,
    desc: 'Employee Dashboard',
    subtext: 'Employee-friendly interface for self-service tasks and insights.'
  },
  {
    name: 'Payroll Management',
    image: SIA4,
    desc: 'Payroll Management',
    subtext: 'Automated payroll processing with detailed breakdowns and compliance tracking.'
  },
  {
    name: 'Attendance Analytics',
    image: SIA2,
    desc: 'Attendance Analytics',
    subtext: 'Track attendance, leaves, and productivity insights.'
  },
  {
    name: 'Performance Reviews',
    image: SIA3,
    desc: 'Performance Reviews',
    subtext: 'Manage performance reviews and employee growth.'
  },
];

const features = [
  {
    icon: <FaMobileAlt className="text-blue-600 text-3xl" />,
    title: "Mobile Responsive",
    description: "Access all features on any device, anywhere",
  },
  {
    icon: <FaPalette className="text-blue-600 text-3xl" />,
    title: "Customizable UI",
    description: "Tailor the interface to match your brand",
  },
  {
    icon: <FaChartBar className="text-blue-600 text-3xl" />,
    title: "Advanced Analytics",
    description: "Deep insights with interactive dashboards",
  },
];

export default function SoftwareInAction() {
  const [activeIndex, setActiveIndex] = useState(0); // Default to 'Payroll Management'

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-[#f5f9ff]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          See Our Software in Action
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          Explore our intuitive interface designed for maximum productivity and user experience.<br />
          Every feature is crafted with your HR team’s needs in mind.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto sm:overflow-visible no-scrollbar justify-start sm:justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-3 py-1.5 sm:px-4 sm:py-3 rounded-full text-sm sm:text-sm cursor-pointer font-medium transition-all whitespace-nowrap ${activeIndex === index
              ? "bg-blue-600 text-white shadow"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Image + Text */}
      <div className="max-w-5xl mx-auto bg-[#f5f9ff] rounded-xl shadow-md p-3 sm:p-6">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={tabs[activeIndex].image}
            alt={tabs[activeIndex].desc}
            width={1200}
            height={800}
            className="w-full h-auto object-cover rounded-lg"
            priority
          />
        </div>
        <div className="text-center mt-5 sm:mt-8">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
            {tabs[activeIndex].desc}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            {tabs[activeIndex].subtext}
          </p>
        </div>
      </div>


      {/* feature */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center mt-10">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <div className="bg-blue-100 p-4 rounded-full">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 text-md">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
