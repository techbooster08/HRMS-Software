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
      {/* Contact Boxes */}
      <div className="max-w-7xl mx-auto px-6 py-10 " id="resources">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-800 rounded-lg">
          {/* Phone */}
          <div className="flex flex-col items-center  p-6 text-center ">
            <PhoneIcon className="h-8 w-8 text-blue-400 mb-4" />
            <h4 className="font-semibold">Phone Support</h4>
            <p className="text-gray-400 text-sm">1800-8002-HRMS-HELP</p>
            <p className="text-gray-400 text-sm">Mon-Fri, 9AM–6PM IST</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center  p-6 text-center ">
            <EnvelopeIcon className="h-8 w-8 text-blue-400 mb-4" />
            <h4 className="font-semibold">Email Support</h4>
            <p className="text-gray-400 text-sm">techinical@support@hrms.com</p>
            <p className="text-gray-400 text-sm">24/7 response</p>
          </div>

          {/* Office */}
          <div className="flex flex-col items-center  p-6 text-center ">
            <MapPinIcon className="h-8 w-8 text-blue-400 mb-4" />
            <h4 className="font-semibold">Office</h4>
            <p className="text-gray-400 text-sm">Three Artisans Multiservices</p>
            <p className="text-gray-400 text-sm">
              Amravati Maharashtra, India
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-gray-800">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-600 p-2 rounded-lg flex items-center justify-center">
              <FontAwesomeIcon
                icon={faBuilding}
                className="text-white w-4 h-4"
              />
            </div>
            <Link
              href="/"
              className="text-blue-500 font-semibold text-lg whitespace-nowrap"
            >
              HRMS Software
            </Link>
          </div>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
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

        {/* Product */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Product</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["Features", "Pricing", "Demo", "Integrations", "Mobile App", "API Documentation"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Solutions</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["Small Business", "Enterprise", "Healthcare", "Manufacturing", "Technology", "Non-Profit"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Support</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["Help Center", "Contact Us", "Live Chat", "Training", "Community", "System Status"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm border-t border-gray-800 space-y-4 md:space-y-0">
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
    </footer>
  );
}

export default Footer;
