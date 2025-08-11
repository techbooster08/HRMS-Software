import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      {/* Top Section */}
      <div className="max-w-8xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 border-b border-gray-800">
        {/* Logo & Description */}
        <div>
          <div className="text-blue-400 text-2xl font-bold mb-4">
            <div className="flex items-center gap-2 min-w-max">
              <div className="bg-blue-600 p-2 rounded-lg flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="text-white w-4 h-4"
                />
              </div>
              <Link
                href="/"
                className="text-blue-600 font-semibold text-lg whitespace-nowrap"
              >
                HRMS Software
              </Link>
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Transform your HR operations with our comprehensive HRMS platform.
            Streamline processes, boost efficiency, and empower your workforce
            with cutting-edge technology.
          </p>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-blue-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaSquareXTwitter />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Demo
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Integrations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Mobile App
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                API Documentation
              </a>
            </li>
          </ul>
        </div>

        {/* Solutions Links */}
        <div>
          <h4 className="font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Small Business
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Enterprise
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Healthcare
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Manufacturing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Technology
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Non-Profit
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Live Chat
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Training
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                System Status
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="max-w-7xl mx-auto px-10 py-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm border-b border-gray-800 space-y-4 md:space-y-0">
        <p className="text-center md:text-left">
          © 2024 HRMS Platform. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Cookie Policy
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span>All systems operational</span>
        </div>
      </div>

      {/* Contact Boxes */}
      <div className="max-w-7xl mx-auto px-6 py-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-gray-800">
          <div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 text-center">
            <PhoneIcon className="h-8 w-8 text-blue-400 mb-4" />
            <h4 className="font-semibold">Phone Support</h4>
            <p className="text-gray-400 text-sm">1-800-HRMS-HELP</p>
            <p className="text-gray-400 text-sm">Mon-Fri, 9AM–6PM EST</p>
          </div>
          <div className="flex flex-col items-center rounded-lg p-6 text-center">
            <EnvelopeIcon className="h-8 w-8 text-blue-400 mb-4" />
            <h4 className="font-semibold">Email Support</h4>
            <p className="text-gray-400 text-sm">support@hrms.com</p>
            <p className="text-gray-400 text-sm">24/7 response</p>
          </div>
          <div className="flex flex-col items-center rounded-lg p-6 text-center">
            <MapPinIcon className="h-8 w-8 text-blue-400 mb-4" />
            <h4 className="font-semibold">Office</h4>
            <p className="text-gray-400 text-sm">Three Artisans Multiservices</p>
            <p className="text-gray-400 text-sm">
              Amravati Maharashtra, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
