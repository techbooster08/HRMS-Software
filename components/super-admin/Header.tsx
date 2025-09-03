"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Bell,
  ChevronDown,
  Building2,
  User,
  Shield,
  BellRing,
  Cloud,
  HelpCircle,
  Info,
  LogOut,
} from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const profileRef = useRef(null);
  const notifRef = useRef(null);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !(profileRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
      if (
        notifRef.current &&
        !(notifRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Dummy notifications
  const notifications = [
    { id: 1, title: "New employee added", time: "2 mins ago" },
    { id: 2, title: "Leave request pending", time: "15 mins ago" },
    { id: 3, title: "Backup completed", time: "1 hr ago" },
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg w-10 h-10 flex items-center justify-center">
              <Building2 className="text-white w-5 h-5" />
            </div>
            <Link
              href="/"
              className="text-blue-600 font-semibold text-lg whitespace-nowrap"
            >
              HRMS Software
            </Link>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Notifications */}
            <div className="relative" ref={notifRef}>
              <button
                onClick={() => setIsNotifOpen(!isNotifOpen)}
                className="relative text-gray-500 hover:text-gray-800 focus:outline-none"
              >
                <Bell size={24} />
                <span className="absolute top-0 right-0 block h-2 w-2 transform translate-x-1/2 -translate-y-1/2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
              </button>

              {isNotifOpen && (
                <div className="absolute right-0 mt-3 w-80 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                  <div className="p-3 border-b border-gray-200 flex justify-between items-center">
                    <p className="font-semibold text-gray-800">Notifications</p>
                    <button className="text-xs text-blue-600 hover:underline">
                      Mark all as read
                    </button>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((notif) => (
                      <div
                        key={notif.id}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                      >
                        <p className="text-sm text-gray-800">{notif.title}</p>
                        <p className="text-xs text-gray-500">{notif.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-2 border-t border-gray-200 text-center">
                    <button className="text-sm text-blue-600 hover:underline">
                      View all
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <div
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-3 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  SA
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-gray-900">
                    Super Admin
                  </p>
                  <p className="text-xs text-gray-500">
                    Platform Administrator
                  </p>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 hidden sm:block transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""
                    }`}
                />
              </div>

              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-64 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1">
                    <div className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                          SA
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">
                            Super Admin
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            superadmin@platform.com
                          </p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Platform Administrator
                        </span>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 my-1"></div>
                    <DropdownItem icon={<User size={18} />} text="Account Settings" />
                    <DropdownItem icon={<Shield size={18} />} text="Security & Privacy" />
                    <DropdownItem icon={<BellRing size={18} />} text="Notification Settings" />
                    <DropdownItem icon={<Cloud size={18} />} text="Backup & Export" />
                    <div className="border-t border-gray-200 my-1"></div>
                    <DropdownItem icon={<HelpCircle size={18} />} text="Help & Support" />
                    <DropdownItem icon={<Info size={18} />} text="About Platform" />
                    <div className="border-t border-gray-200 my-1"></div>
                    <DropdownItem icon={<LogOut size={18} />} text="Sign Out" isDanger />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Reusable Dropdown Item
const DropdownItem = ({ icon, text, isDanger = false }) => (
  <button
    type="button"
    className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-left ${isDanger ? "text-red-600 hover:bg-red-50" : "text-gray-700 hover:bg-gray-100"
      }`}
  >
    {icon}
    <span>{text}</span>
  </button>
);

export default Header;
