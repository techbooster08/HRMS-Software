// components/Pricing.tsx
"use client";

import { useState } from "react";
import { FaShieldAlt, FaCloud, FaLock, FaSyncAlt } from "react-icons/fa";

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
                "SLA Guarantee",
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
        <section className="bg-[#f5f9ff] py-12 px-4">
            <div className="text-center mb-8">
                <h2 className="text-3xl text-black font-bold">Simple, Transparent Pricing</h2>
                <p className="text-gray-600 mt-2">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`bg-white rounded-lg shadow-lg p-6  border ${plan.popular ? "border-blue-500 border-2" : "border-gray-200"
                            }`}
                    >
                        {plan.popular && (
                            <p className=" text-blue-500 text-sm border-blue-500 border-1 inline-block font-bold text-center py-2 px-3 rounded-full   mb-3">
                                Most Popular
                            </p>
                        )}
                        <h3 className="text-xl text-black font-semibold">{plan.name}</h3>
                        <p className="text-gray-500">{plan.employees}</p>
                        <p className="text-4xl font-bold my-4 text-black">
                            ${isAnnual ? plan.yearly : plan.monthly}
                            <span className="text-lg font-medium text-gray-500">
                                /{isAnnual ? "year" : "month"}
                            </span>
                        </p>
                        <button
                            className={`w-full py-2 rounded-lg font-semibold transition ${plan.popular
                                ? "bg-blue-500 text-white hover:bg-blue-600"
                                : "bg-gray-200 text-black hover:bg-gray-300"
                                }`}
                        >
                            Start Free Trial
                        </button>
                        <ul className="mt-5 space-y-2 text-gray-700">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    ✅ <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="bg-white py-10 px-6 rounded-lg max-w-6xl mx-auto mt-10 shadow-sm">
                <h2 className="text-center text-xl font-bold mb-8 text-black">All Plans Include</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="bg-blue-100 p-4 rounded-full mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="font-semibold text-black">{feature.title}</h3>
                            <p className="text-gray-500 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}