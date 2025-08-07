import React from "react";
import Image from "next/image";
import {
    FaLock,
    FaCogs,
    FaUsers,
    FaRocket,
} from "react-icons/fa";

import softwareWork1 from "@/assets/public-website/Images/softwarework1.jpg";
import softwareWork2 from "@/assets/public-website/Images/softwarework2.jpg";
import softwareWork3 from "@/assets/public-website/Images/softwarework3.jpg";
import softwareWork4 from "@/assets/public-website/Images/softwarework4.jpg";

const steps = [
    {
        id: 1,
        title: "Quick Setup",
        desc: "Create your account and import employee data in minutes. Our intelligent setup wizard guides you through every step.",
        icon: <FaLock />,
        image: softwareWork1,
    },
    {
        id: 2,
        title: "Configure & Customize",
        desc: "Tailor the system to your organization’s needs. Set up departments, roles, policies, and approval workflows.",
        icon: <FaCogs />,
        image: softwareWork2,
    },
    {
        id: 3,
        title: "Team Onboarding",
        desc: "Invite your team and provide training. Our comprehensive resources ensure smooth adoption across your organization.",
        icon: <FaUsers />,
        image: softwareWork3,
    },
    {
        id: 4,
        title: "Go Live & Scale",
        desc: "Launch your automated HR processes and watch productivity soar. Monitor, optimize, and scale as your business grows.",
        icon: <FaRocket />,
        image: softwareWork4,
    },
];

const HowItWorks = () => {
    return (
        <section className="py-16 px-4 bg-[#f5f9ff] text-slate-800">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-slate-900">How Our Software Works</h2>
                <div className="mt-3 text-lg text-slate-600 flex flex-col items-center">
                    Get up and running in just 4 simple steps. Our streamlined process ensures
                    you are maximizing HR efficiency from day one.
                </div>

                {/* Steps Grid */}
                <div className="mt-16 space-y-20">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`flex flex-col lg:flex-row items-center gap-10 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image */}
                            <div className="flex-1 max-w-xl rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    width={600}
                                    height={400}
                                    className="rounded-2xl object-cover w-full h-full"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-left">
                                <div className="flex items-center gap-4 mb-4">
                                    <h2 className="text-5xl font-bold text-blue-100">{String(step.id).padStart(2, "0")}</h2>
                                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg">
                                        {step.icon}
                                    </div>
                                </div>

                                <h3 className="text-3xl font-bold mb-4 text-gray-900">{step.title}</h3>
                                <p className="text-gray-600 text-lg mb-4">{step.desc}</p>

                                <p className="text-blue-600 font-semibold flex items-center gap-2">
                                    <span className="text-blue-500 text-xl">•</span> Average setup time: 15 minutes
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-base px-8 py-10 rounded-2xl bg-white text-slate-700 font-medium shadow-xl">
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-2xl font-extrabold text-blue-600">15 min</p>
                        <p className="text-slate-500">Average Setup</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-2xl font-extrabold text-blue-600">99.9%</p>
                        <p className="text-slate-500">Success Rate</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-2xl font-extrabold text-blue-600">24/7</p>
                        <p className="text-slate-500">Support Available</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-2xl font-extrabold text-blue-600">00</p>
                        <p className="text-slate-500">Downtime Migration</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
