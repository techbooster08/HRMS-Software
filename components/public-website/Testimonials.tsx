"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import person1 from "@/assets/public-website/Images/testimonial1.jpg";
import person2 from "@/assets/public-website/Images/testimonial2.jpg";


const testimonials = [
    {
        stars: "★★★★★",
        text:
            "This HRMS platform has revolutionized our HR operations. We've reduced payroll processing time by 75% and our employees love the self-service features. The automation capabilities are incredible!",
        img: person1,
        name: "Sarah Johnson",
        role: "HR Director",
        company: "TechCorp Solutions",
    },
    {
        stars: "★★★★★",
        text:
            "As a fast-growing startup, we needed an HR solution that could scale with us. This platform delivered beyond our expectations. The recruitment module alone has saved us countless hours and improved our hiring quality.",
        img: person2,
        name: "Michael Chen",
        role: "CEO",
        company: "Innovation Labs",
    },
    {
        stars: "★★★★★",
        text:
            "The compliance features are outstanding. We operate across multiple states with different labor laws, and this system keeps us compliant automatically. The peace of mind is invaluable.",
        img: person1,
        name: "Emily Rodriguez",
        role: "Operations Manager",
        company: "Global Manufacturing Inc.",
    },
    {
        stars: "★★★★★",
        text:
            "The ROI has been phenomenal. We've cut HR administration costs by 60% and improved employee satisfaction scores significantly. The analytics help us make data-driven decisions about our workforce.",
        img: person2,
        name: "David Thompson",
        role: "CFO",
        company: "Financial Services Pro",
    },
    {
        stars: "★★★★★",
        text:
            "Managing 500+ employees across 20 locations was a nightmare before this system. Now everything is centralized, automated, and transparent. Our managers can focus on people instead of paperwork.",
        img: person1,
        name: "Lisa Wang",
        role: "HR Manager",
        company: "Retail Chain Group",
    },
    {
        stars: "★★★★★",
        text:
            "In healthcare, compliance is critical. This platform handles all our regulatory requirements automatically and the audit trails are comprehensive. It's been a game-changer for our organization.",
        img: person2,
        name: "Robert Miller",
        role: "VP of Human Resources",
        company: "Healthcare Systems",
    },
];

const Testimonials = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
                <h2 className="text-3xl font-bold mb-2 text-black">What Our Customers Say</h2>
                <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                    Join thousands of satisfied customers who have transformed their HR operations with our comprehensive HRMS solution.
                </p>

                {isMobile ? (
                    <div className="relative flex flex-col items-center justify-center w-full">
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            className="w-full max-w-xs"
                        >
                            {testimonials.map((t, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="mx-auto p-6 bg-neutral-50 shadow-lg rounded-lg border border-gray-100 text-left w-full max-w-xs">
                                        <div className="flex mb-4 text-xl text-yellow-400">{t.stars}</div>
                                        <p className="text-gray-700 mb-6 italic">{t.text}</p>
                                        <div className="flex items-center gap-4">
                                            <Image src={t.img} alt={t.name} width={48} height={48} className="rounded-full object-cover" />
                                            <div>
                                                <h4 className="font-semibold text-black">{t.name}</h4>
                                                <p className="text-sm text-gray-500">{t.role}</p>
                                                <span className="text-blue-600 text-sm font-semibold">{t.company}</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* Center and space pagination dots */}
                        <style jsx global>{`
                            .swiper-pagination {
                                margin-top: 18px;
                                position: static;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                            }
                        `}</style>
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="p-6 bg-neutral-50 shadow-lg rounded-lg border border-gray-100 text-left transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                                <div className="flex mb-4 text-xl text-yellow-400">{t.stars}</div>
                                <p className="text-gray-700 mb-6 italic">{t.text}</p>
                                <div className="flex items-center gap-4">
                                    <Image src={t.img} alt={t.name} width={48} height={48} className="rounded-full object-cover" />
                                    <div>
                                        <h4 className="font-semibold text-black">{t.name}</h4>
                                        <p className="text-sm text-gray-500">{t.role}</p>
                                        <span className="text-blue-600 text-sm font-semibold">{t.company}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}


                    {/*  Happy clients section */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center mt-5">
                    <h2 className="text-2xl font-bold mb-2">Join 10,000+ Happy Customers</h2>
                    <p className="mb-8">
                        See why leading companies choose our HRMS platform for their HR needs
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                            <p className="text-2xl font-bold">4.9/5</p>
                            <p className="text-sm opacity-80">Average Rating</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">10,000+</p>
                            <p className="text-sm opacity-80">Active Users</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">99.9%</p>
                            <p className="text-sm opacity-80">Customer Satisfaction</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">24/7</p>
                            <p className="text-sm opacity-80">Support Available</p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Testimonials;