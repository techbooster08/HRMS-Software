// components/Pricing.tsx
"use client";

import { useState } from "react";
import { FaShieldAlt, FaCloud, FaLock, FaSyncAlt } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { BsCheckLg } from "react-icons/bs";

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: "Starter",
            monthly: 29,
            yearly: 290,
            employees: "Up to 50 employees",
            features: [
                "Employee Database",
                "Basic Payroll",
                "Attendance Tracking",
                "Leave Management",
                "Email Support",
                "Email Support",
                "Mobile App Access",
            ],
        },
        {
            name: "Professional",
            monthly: 59,
            yearly: 590,
            employees: "Up to 200 employees",
            popular: true,
            features: [
                "Everything in Starter",
                "Performance Management",
                "Advanced Reports",
                "Custom Workflows",
                "API Access",
                "Priority Support",
                "Document Management",
                "Recruitment Tools",
            ],
        },
        {
            name: "Enterprise",
            monthly: 99,
            yearly: 990,
            employees: "Unlimited employees",
            features: [
                "Everything in Professional",
                "Advanced Analytics",
                "Custom Integrations",
                "Dedicated Manager",
                "White-label Options",
                "Advanced Security",
                "Custom Training",

            ],
        },
    ];

    const features = [
        {
            icon: <FaShieldAlt className="w-6 h-6 text-blue-600" />,
            title: "30-Day Free Trial",
            description: "No credit card required",
        },
        {
            icon: <FaCloud className="w-6 h-6 text-blue-600" />,
            title: "Cloud Hosting",
            description: "99.9% uptime guarantee",
        },
        {
            icon: <FaLock className="w-6 h-6 text-blue-600" />,
            title: "Data Security",
            description: "Bank-level encryption",
        },
        {
            icon: <FaSyncAlt className="w-6 h-6 text-blue-600" />,
            title: "Regular Updates",
            description: "Always latest features",
        },
    ];


    return (
        <section className="bg-[#f5f9ff] py-10 px-2.5" id="pricing">
            <div className="text-center mb-8">
                <h2 className="text-3xl text-black font-bold">Simple, Transparent Pricing</h2>
                <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
                    Choose the perfect plan for your organization. All plans include a
                    30-day free trial and can be upgraded or downgraded at any time.
                </p>

                {/* Toggle Switch */}
                <div className="flex justify-center items-center text-black gap-3 mt-6">
                    <span className={!isAnnual ? "font-bold" : ""}>Monthly</span>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={isAnnual}
                            onChange={() => setIsAnnual(!isAnnual)}
                            className="peer sr-only"
                        />
                        {/* Track */}
                        <div className="w-14 h-7 bg-blue-600 rounded-full peer-checked:rotate-180  relative transition-colors ">
                            {/* Knob */}
                            <div className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300  "></div>
                        </div>
                    </label>

                    <span className={isAnnual ? "font-bold text-black" : ""}>Annual</span>
                    {(
                        <span className="text-green-600 text-sm font-medium">Save 17%</span>
                    )}
                </div>

            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-2 rounded-lg ">
                {plans.map((plan) => (
                    <div
                        key={plan.name}

                        className="relative rounded-lg shadow-lg overflow- border transition-transform duration-300 hover:scale-105 active:scale-105 bg-white "
                    >
                        {/* Top Gradient with Bottom Curve */}
                        <div className="relative  bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white p-6 pb-16 rounded-b-[50%] rounded-t-lg">
                            {plan.popular && (
                                <span className="absolute top-2 right-3 text-white bg-gradient-to-tl from-blue-500 to-zinc-400 text-xs font-semibold  px-3 py-2 rounded-md ">
                                    Popular
                                </span>
                            )}
                            <div className="text-center">
                                <h3 className="text-2xl font-bold">{plan.name}</h3>
                                <p className="opacity-80 my-1">{plan.employees}</p>
                                <p className="text-5xl font-extrabold mt-7">
                                    ${isAnnual ? plan.yearly : plan.monthly}
                                    <span className="text-lg font-medium opacity-80">
                                        /{isAnnual ? "year" : "month"}
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="bg-white p-6  text-gray-700">
                            <ul className="space-y-3">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 ">
                                        <span className="border-1 border-gray-400 h-3 w-3 relative">
                                            <BsCheckLg className="text-green-600 text-lg font-extrabold  absolute top-[-6] " />
                                        </span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button
                                className={`mt-6 w-full py-2 rounded-lg font-semibold transition ${plan.popular
                                    ? "bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white"
                                    : "bg-gray-200 text-black hover:bg-gray-300"
                                    }`}
                            >
                                Start Free Trial
                            </button>
                        </div>
                    </div>
                ))}
            </div>


            <div className="bg-white py-7 px-2 rounded-lg max-w-6xl  mx-auto mt-10 shadow-sm">
                <h2 className="text-center text-xl font-bold mb-8 text-black">All Plans Include</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="bg-blue-100 p-6 lg:p-4  rounded-full mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="font-semibold text-xl lg:text-sm text-black">{feature.title}</h3>
                            <p className="text-gray-500 text-md lg:text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}