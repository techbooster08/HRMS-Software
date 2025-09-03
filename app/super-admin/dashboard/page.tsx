'use client';

import React, { FC } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Users, Building2, UserPlus, ArrowUp, ArrowDown, LogIn, FileText } from 'lucide-react';

// --- TYPE DEFINITIONS ---

interface StatCardProps {
    title: string;
    value: string;
    change?: string;
    changeType?: 'increase' | 'decrease';
    icon: React.ElementType<{ className?: string }>;
    iconBgColor: string;
}

interface ChartData {
    month: string;
    organizations: number;
}

interface ActivityItem {
    icon: React.ElementType;
    text: React.ReactNode;
    time: string;
    iconBgColor: string;
}

// --- MOCK DATA ---

const statCardsData: StatCardProps[] = [
    {
        title: "Total Organizations",
        value: "78",
        change: "+8 this month",
        changeType: 'increase',
        icon: Building2,
        iconBgColor: "bg-blue-100 text-blue-600",
    },
    {
        title: "Platform-Wide Users",
        value: "1,248",
        change: "+12% from last month",
        changeType: 'increase',
        icon: Users,
        iconBgColor: "bg-violet-100 text-violet-600",
    },
    {
        title: "New Sign-ups (30d)",
        value: "152",
        change: "-5% vs previous 30d",
        changeType: 'decrease',
        icon: UserPlus,
        iconBgColor: "bg-green-100 text-green-600",
    },
];

const organizationGrowthData: ChartData[] = [
    { month: 'Jan', organizations: 25 },
    { month: 'Feb', organizations: 32 },
    { month: 'Mar', organizations: 45 },
    { month: 'Apr', organizations: 48 },
    { month: 'May', organizations: 55 },
    { month: 'Jun', organizations: 61 },
    { month: 'Jul', organizations: 70 },
    { month: 'Aug', organizations: 78 },
];

const recentActivityData: ActivityItem[] = [
    { 
        icon: Building2, 
        text: <p>New organization <strong>&quot;Innovate Inc.&quot;</strong> has joined the platform.</p>, 
        time: "2 hours ago",
        iconBgColor: "bg-blue-100 text-blue-600"
    },
    { 
        icon: UserPlus, 
        text: <p><strong>TechCorp Solutions</strong> added 15 new users.</p>, 
        time: "8 hours ago",
        iconBgColor: "bg-violet-100 text-violet-600"
    },
    { 
        icon: FileText, 
        text: <p>Monthly platform usage report has been generated.</p>, 
        time: "Yesterday",
        iconBgColor: "bg-gray-100 text-gray-600"
    },
    { 
        icon: LogIn, 
        text: <p>An admin from <strong>&quot;Global Manufacturing&quot;</strong> signed in from a new device.</p>, 
        time: "3 days ago",
        iconBgColor: "bg-yellow-100 text-yellow-600"
    },
];


// --- REUSABLE COMPONENTS ---

const StatCard: FC<StatCardProps> = ({ title, value, change, changeType, icon: Icon, iconBgColor }) => {
    const isIncrease = changeType === 'increase';
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
                <p className="text-gray-600 font-medium">{title}</p>
                <div className={`p-3 rounded-lg ${iconBgColor}`}>
                    <Icon className="h-6 w-6" />
                </div>
            </div>
            <p className="text-4xl font-bold text-gray-800 mb-2">{value}</p>
            {change && changeType && (
                <div className="flex items-center text-sm">
                    <span className={`flex items-center ${isIncrease ? 'text-green-600' : 'text-red-600'}`}>
                        {isIncrease ? <ArrowUp size={14} className="mr-1" /> : <ArrowDown size={14} className="mr-1" />}
                        {change}
                    </span>
                </div>
            )}
        </div>
    );
};

const RecentActivity: FC<{items: ActivityItem[]}> = ({ items }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Platform Activity</h3>
        <div className="space-y-4">
            {items.map((item, index) => (
                <div key={index} className="flex items-start">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${item.iconBgColor}`}>
                        <item.icon size={20} />
                    </div>
                    <div>
                        <div className="text-sm text-gray-700">{item.text}</div>
                        <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);


// --- MAIN DASHBOARD COMPONENT ---

const SuperAdminDashboard: FC = () => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 font-sans bg-gray-50/50 min-h-screen mt-10">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Super Admin Dashboard</h1>
                <p className="mt-1 text-gray-500">Welcome back! Here&apos;s a platform-wide overview.</p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {statCardsData.map((stat) => (
                    <StatCard key={stat.title} {...stat} />
                ))}
            </div>

            {/* Main Content Area */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Organization Growth Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Organization Growth</h3>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <AreaChart data={organizationGrowthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} axisLine={false} tickLine={false} />
                                <Tooltip
                                    contentStyle={{
                                        borderRadius: '0.75rem',
                                        border: '1px solid #e5e7eb',
                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                                    }}
                                />
                                <Legend />
                                <Area type="monotone" dataKey="organizations" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Activity Feed */}
                <div className="lg:col-span-1">
                     <RecentActivity items={recentActivityData} />
                </div>
            </div>
        </div>
    );
};

export default SuperAdminDashboard;
