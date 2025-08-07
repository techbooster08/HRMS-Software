"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserGear, faMoneyBill, faClock, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ChevronDown } from "lucide-react";

const Header = () => {
    const [showProductMenu, setShowProductMenu] = useState(false);
    const [showSolutionsMenu, setShowSolutionsMenu] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white z-50">
            <div className="w-full px-6 py-4 bg-white shadow-sm flex items-center justify-between relative z-50">
            {/* Logo */}
            <div className="flex items-center gap-2 min-w-max">
                <div className="bg-blue-600 p-2 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faBuilding} className="text-white w-4 h-4" />
                </div>
                <Link href="/" className="text-blue-600 font-semibold text-lg whitespace-nowrap">
                HRMS Software
                </Link>
            </div>

            {/* Nav - Desktop */}
            <nav className="hidden md:flex flex-1 items-center justify-center gap-8 text-sm text-gray-700 relative">
                {/* Product Dropdown */}
                <div
                className="relative"
                onMouseEnter={() => setShowProductMenu(true)}
                onMouseLeave={() => setShowProductMenu(false)}
                >
                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 font-semibold">
                    Product <ChevronDown size={16} />
                </div>
                {showProductMenu && (
                    <div className="absolute top-8 left-0 w-64 bg-white shadow-xl rounded-xl py-4 px-4 space-y-4 z-50">
                    <div className="flex items-start gap-3">
                        <div className="bg-blue-100 text-blue-600 p-2 rounded-xl">
                        <FontAwesomeIcon icon={faUserGear} />
                        </div>
                        <div>
                        <p className="font-semibold">Employee Management</p>
                        <p className="text-sm text-gray-500">Complete employee database</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="bg-green-100 text-green-600 p-2 rounded-xl">
                        <FontAwesomeIcon icon={faMoneyBill} />
                        </div>
                        <div>
                        <p className="font-semibold">Payroll Automation</p>
                        <p className="text-sm text-gray-500">Automated salary processing</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="bg-purple-100 text-purple-600 p-2 rounded-xl">
                        <FontAwesomeIcon icon={faClock} />
                        </div>
                        <div>
                        <p className="font-semibold">Attendance Tracking</p>
                        <p className="text-sm text-gray-500">Real-time monitoring</p>
                        </div>
                    </div>
                    </div>
                )}
                </div>

                {/* Solutions Dropdown */}
                <div
                className="relative"
                onMouseEnter={() => setShowSolutionsMenu(true)}
                onMouseLeave={() => setShowSolutionsMenu(false)}
                >
                <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 font-semibold">
                    Solutions <ChevronDown size={16} />
                </div>
                {showSolutionsMenu && (
                    <div className="absolute top-8 left-0 w-64 bg-white shadow-xl rounded-xl py-4 px-4 space-y-4 z-50">
                    <div>
                        <p className="text-sm font-semibold text-gray-800 mb-2">By Company Size</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                        <li><a href="#" className="hover:text-blue-600">Small Business (1–50)</a></li>
                        <li><a href="#" className="hover:text-blue-600">Medium Enterprise (51–500)</a></li>
                        <li><a href="#" className="hover:text-blue-600">Large Enterprise (500+)</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-800 mb-2">By Industry</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                        <li><a href="#" className="hover:text-blue-600">Healthcare</a></li>
                        <li><a href="#" className="hover:text-blue-600">Manufacturing</a></li>
                        <li><a href="#" className="hover:text-blue-600">Technology</a></li>
                        </ul>
                    </div>
                    </div>
                )}
                </div>

                {/* Other Nav Links */}
                <a href="#how-it-works" className="hover:text-blue-600 font-semibold text-md whitespace-nowrap">How it Works</a>
                <a href="#pricing" className="hover:text-blue-600 font-semibold text-md whitespace-nowrap">Pricing</a>
                <a href="#reviews" className="hover:text-blue-600 font-semibold text-md whitespace-nowrap">Reviews</a>
                <a href="#demos" className="hover:text-blue-600 font-semibold text-md whitespace-nowrap">Demos</a>
                <a href="#resources" className="hover:text-blue-600 font-semibold text-md whitespace-nowrap">Resources</a>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-4 min-w-max">
                <button className="text-sm cursor-pointer text-gray-600 font-semibold hover:text-blue-600 text-md">Sign In</button>
                <button className="text-sm cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                Start Free Trial
                </button>
            </div>

            {/* Hamburger for mobile */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-blue-600 w-5 h-5" />
                </button>
            </div>

            {/* Mobile Menu - Dropdown */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col p-4 gap-4 text-sm text-gray-700 md:hidden z-40">
                <a href="#product" className="hover:text-blue-600 font-semibold">Product</a>
                <a href="#solutions" className="hover:text-blue-600 font-semibold">Solutions</a>
                <a href="#how-it-works" className="hover:text-blue-600 font-semibold">How it Works</a>
                <a href="#pricing" className="hover:text-blue-600 font-semibold">Pricing</a>
                <a href="#reviews" className="hover:text-blue-600 font-semibold">Reviews</a>
                <a href="#demos" className="hover:text-blue-600 font-semibold">Demos</a>
                <a href="#resources" className="hover:text-blue-600 font-semibold">Resources</a>
                <div className="flex flex-col gap-2 pt-2 border-t">
                    <button className="text-sm text-gray-600 hover:text-blue-600">Sign In</button>
                    <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                    Free Trial
                    </button>
                </div>
                </div>
            )}
            </div>
        </header>
    );
};

export default Header;
