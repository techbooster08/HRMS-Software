"use client";
import React from "react";
import {
  ArrowUp,
  ArrowDown,
  Users,
  CheckCircle2,
  Calendar,
  UserPlus,
} from "lucide-react";
import AttendanceChart from "@/components/super-admin/Attendence";

type StatCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBgColor: string;
  change: string;
  changeText: string;
  changeType: "increase" | "decrease";
};

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, iconBgColor, change, changeText, changeType }) => {
  const ChangeIcon = changeType === "increase" ? ArrowUp : ArrowDown;
  const changeColor = changeType === "increase" ? "text-green-600" : "text-red-600";

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:scale-105">
      {/* Top section */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
        </div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBgColor}`}>
          {icon}
        </div>
      </div>

      {/* Change indicator */}
      <div className={`flex items-center text-sm mt-4 ${changeColor}`}>
        <ChangeIcon size={16} className="mr-1" />
        <span>
          <span className="font-semibold">{change}</span> {changeText}
        </span>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const stats: StatCardProps[] = [
    {
      title: "Total Employees",
      value: "248",
      icon: <Users size={24} className="text-blue-600" />,
      iconBgColor: "bg-blue-100",
      change: "12%",
      changeText: "from last month",
      changeType: "increase",
    },
    {
      title: "Present Today",
      value: "235",
      icon: <CheckCircle2 size={24} className="text-green-600" />,
      iconBgColor: "bg-green-100",
      change: "95%",
      changeText: "attendance rate",
      changeType: "increase",
    },
    {
      title: "On Leave",
      value: "8",
      icon: <Calendar size={24} className="text-yellow-600" />,
      iconBgColor: "bg-yellow-100",
      change: "2%",
      changeText: "decrease",
      changeType: "decrease",
    },
    {
      title: "New Hires This Month",
      value: "12",
      icon: <UserPlus size={24} className="text-purple-600" />,
      iconBgColor: "bg-purple-100",
      change: "3 more",
      changeText: "than last month",
      changeType: "increase",
    },
  ];

  return (
  <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen flex-1 overflow-x-auto">
      <h1 className="text-3xl font-bold text-gray-900">Super Admin Dashboard</h1>
      <p className="mt-2 text-gray-600">
        Welcome back! Here&apos;s what&apos;s happening in your organization today.
      </p>

      {/* Stats Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AttendanceChart />
      </div>
    </div>
  );
};

export default Dashboard;
