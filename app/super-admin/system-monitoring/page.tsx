'use client';

import { FC, useState, ReactNode } from 'react';
import { 
    Timer, 
    Zap, 
    Users, 
    HardDrive, 
    ArrowUp, 
    AlertTriangle, 
    Info, 
    CheckCircle,
    ChevronDown,
    RefreshCw
} from 'lucide-react';

// --- TYPE DEFINITIONS ---

type ServerStatus = 'Healthy' | 'Warning' | 'Critical';
type AlertType = 'error' | 'warning' | 'info' | 'success';

interface StatCardProps {
    icon: ReactNode;
    title: string;
    value: string;
    change?: number;
    metric?: string;
    progressBarValue?: number;
}

interface Server {
    id: number;
    name: string;
    location: string;
    status: ServerStatus;
    cpu: number;
    memory: number;
    disk: number;
    uptime: string;
}

interface Alert {
    id: number;
    type: AlertType;
    message: string;
    timestamp: string;
}

// --- MOCK DATA ---
const servers: Server[] = [
    { id: 1, name: 'Web Server 01', location: 'us-east-1', status: 'Healthy', cpu: 45, memory: 68, disk: 32, uptime: '15d 4h 21m' },
    { id: 2, name: 'Web Server 02', location: 'us-west-1', status: 'Healthy', cpu: 52, memory: 71, disk: 28, uptime: '15d 4h 21m' },
    { id: 3, name: 'Database Server', location: 'us-east-1', status: 'Warning', cpu: 78, memory: 85, disk: 49, uptime: '15d 4h 21m' },
    { id: 4, name: 'Cache Server', location: 'us-west-1', status: 'Healthy', cpu: 23, memory: 45, disk: 18, uptime: '15d 4h 21m' },
];

const alerts: Alert[] = [
    { id: 1, type: 'error', message: 'Database Server CPU usage above 75%', timestamp: '2024-01-20 11:20:25' },
    { id: 2, type: 'warning', message: 'High memory usage on Web Server 02', timestamp: '2024-01-20 11:15:00' },
    { id: 3, type: 'success', message: 'Scheduled maintenance completed successfully', timestamp: '2024-01-20 10:45:00' },
    { id: 4, type: 'warning', message: 'Unusual traffic spike detected', timestamp: '2024-01-20 10:20:15' },
];

// --- HELPER & UI COMPONENTS ---

const StatCard: FC<StatCardProps> = ({ icon, title, value, change, metric, progressBarValue }) => {
    return (
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                    {icon}
                    <span className="text-gray-600 font-medium">{title}</span>
                </div>
                {change && (
                     <div className={`flex items-center text-sm font-semibold ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        <ArrowUp size={14} className={`${change < 0 ? 'transform rotate-180' : ''} mr-1`}/>
                        {Math.abs(change)}%
                    </div>
                )}
            </div>
            <div className="mt-4">
                <h2 className="text-3xl font-bold text-gray-800">{value}</h2>
                {metric && <p className="text-sm text-gray-500">{metric}</p>}
                {progressBarValue !== undefined && (
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                        <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: `${progressBarValue}%` }}></div>
                    </div>
                )}
            </div>
        </div>
    );
};

const ProgressBar: FC<{ label: string; value: number; color: string }> = ({ label, value, color }) => (
    <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-600">{label}</span>
            <span className="text-sm font-semibold text-gray-800">{value}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
            <div className={`${color} h-2 rounded-full`} style={{ width: `${value}%` }}></div>
        </div>
    </div>
);

const ServerPerformanceCard: FC<{ server: Server }> = ({ server }) => {
    const statusStyles = {
        Healthy: 'text-green-600 bg-green-100',
        Warning: 'text-yellow-600 bg-yellow-100',
        Critical: 'text-red-600 bg-red-100',
    };

    const getBarColor = (value: number) => {
        if (value > 80) return 'bg-red-500';
        if (value > 60) return 'bg-yellow-500';
        return 'bg-green-500';
    };

    return (
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h4 className="font-bold text-gray-800">{server.name}</h4>
                    <p className="text-sm text-gray-500">{server.location}</p>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[server.status]}`}>
                    {server.status}
                </span>
            </div>
            <ProgressBar label="CPU Usage" value={server.cpu} color={getBarColor(server.cpu)} />
            <ProgressBar label="Memory Usage" value={server.memory} color={getBarColor(server.memory)} />
            <ProgressBar label="Disk Usage" value={server.disk} color={getBarColor(server.disk)} />
            <div className="mt-4 pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-500">Uptime: <span className="font-medium text-gray-700">{server.uptime}</span></p>
            </div>
        </div>
    );
};

const AlertItem: FC<{ alert: Alert }> = ({ alert }) => {
    const alertStyles = {
        error: { bg: 'bg-red-50', icon: <AlertTriangle className="text-red-500" size={20} /> },
        warning: { bg: 'bg-yellow-50', icon: <AlertTriangle className="text-yellow-500" size={20} /> },
        info: { bg: 'bg-blue-50', icon: <Info className="text-blue-500" size={20} /> },
        success: { bg: 'bg-blue-50', icon: <CheckCircle className="text-blue-500" size={20} /> },
    };

    return (
        <div className={`flex items-start justify-between p-4 rounded-lg ${alertStyles[alert.type].bg}`}>
            <div className="flex items-start gap-4">
                {alertStyles[alert.type].icon}
                <div>
                    <p className="font-medium text-gray-800">{alert.message}</p>
                    <p className="text-sm text-gray-500 mt-1">{alert.timestamp}</p>
                </div>
            </div>
            <button className="text-sm font-semibold text-purple-600 hover:text-purple-800">Resolve</button>
        </div>
    );
};


// --- MAIN PAGE COMPONENT ---

const page: FC = () => {
    const [refreshInterval, setRefreshInterval] = useState('30');
    
    return (
        <div className="bg-gray-50 overflow-y-scroll mt-10 p-8">
            <main className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">System Monitoring</h1>
                        <p className="text-gray-500 mt-1">Real-time monitoring of system health and performance</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm">
                           <span className="text-gray-600">Auto-refresh:</span>
                            <select 
                                value={refreshInterval} 
                                onChange={(e) => setRefreshInterval(e.target.value)}
                                className="font-semibold border-none bg-transparent focus:ring-0"
                            >
                                <option value="15">15 seconds</option>
                                <option value="30">30 seconds</option>
                                <option value="60">1 minute</option>
                            </select>
                        </div>
                        <button className="flex items-center bg-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition-colors">
                            <RefreshCw size={16} className="mr-2" />
                            Refresh Now
                        </button>
                    </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard icon={<Timer className="text-green-500" />} title="Uptime" value="99.98%" metric="Last 30 days" />
                    <StatCard icon={<Zap className="text-blue-500" />} title="Response Time" value="246ms" metric="Average response" change={-8}/>
                    <StatCard icon={<Users className="text-purple-500" />} title="Active Users" value="8,247" change={12} />
                    <StatCard icon={<HardDrive className="text-orange-500" />} title="Storage" value="1.2TB" metric="Data usage" progressBarValue={75} />
                </div>

                {/* Server Performance */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Server Performance</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {servers.map(server => <ServerPerformanceCard key={server.id} server={server} />)}
                    </div>
                </div>

                {/* Recent Alerts */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                         <h2 className="text-xl font-bold text-gray-800">Recent Alerts</h2>
                         <a href="#" className="text-sm font-semibold text-purple-600 hover:text-purple-800">View All Alerts</a>
                    </div>
                    <div className="space-y-4">
                        {alerts.map(alert => <AlertItem key={alert.id} alert={alert} />)}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default page;
