'use client';

import { useState, FC, ReactNode } from 'react';
import Link from 'next/link'; 
import { usePathname } from 'next/navigation'; 
import {
    LayoutDashboard,
    Users,
    Building2,
    Activity,
    BarChart2,
    Settings,
    ChevronLeft,
    ChevronRight,
    LucideProps,
} from 'lucide-react';


// --- Type Definitions ---
interface SidebarLinkProps {
    href: string;
    icon: FC<LucideProps>;
    children: ReactNode;
    active: boolean;
}

interface NavLink {
    href: string;
    label: string;
    icon: FC<LucideProps>;
}


const SidebarLink: FC<SidebarLinkProps> = ({ href, icon: Icon, children, active }) => (
    <Link href={href}>
        <div
            className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-colors duration-200 ${
                active
                    ? 'bg-blue-100 text-blue-700 font-semibold'
                    : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
            <Icon size={20} className={`mr-3 ${active ? 'text-blue-700' : 'text-gray-500'}`} />
            <span className="truncate">{children}</span>
        </div>
    </Link>
);

const Sidebar: FC =  () => {
    const pathname = usePathname();
    console.log(pathname)   ;
    
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

   
    
    const navLinks: NavLink[] = [
        { href: '/super-admin/dashboard', label: 'Dashboard Overview', icon: LayoutDashboard },
        { href: '/super-admin/organizations', label: 'Organizations', icon: Building2 },
        { href: '/super-admin/user-management', label: 'User Management', icon: Users },
        { href: '/super-admin/system-monitoring', label: 'System Monitoring', icon: Activity },
        { href: '/super-admin/support-center', label: 'Support Center', icon: BarChart2 },
        { href: '/super-admin/global-settings', label: 'Global Settings', icon: Settings },
    ];

    return (
        <aside className={`relative bg-white border-r mt-15 border-gray-200 flex flex-col transition-width duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>   
             <button 
                onClick={() => setIsCollapsed(!isCollapsed)} 
                className="absolute top-1/2 -right-3.5 z-10 p-1 bg-white border-2 border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>


            <nav className="flex-1 px-4 py-4 overflow-y-auto">
                {navLinks.map((link) => (
                    <SidebarLink
                        key={link.href}
                        href={link.href}
                        icon={link.icon}
                        active={pathname === link.href}
                    >
                        {!isCollapsed && link.label}
                    </SidebarLink>
                ))}
            </nav>

            <div className="p-4 mt-auto">
                <div className={`p-4 rounded-lg bg-gray-50 border border-gray-200 ${isCollapsed ? 'p-2' : ''}`}>
                    <div className="flex items-center justify-between">
                         <h4 className={`font-semibold text-gray-700 ${isCollapsed ? 'hidden' : ''}`}>System Status</h4>
                        <div className="relative flex items-center">
                             <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute"></div>
                             <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                         </div>
                    </div>
                    {!isCollapsed && (
                        <>
                            <p className="text-sm text-gray-500 mt-2">All systems operational</p>
                            <div className="flex items-center mt-1 text-xs text-gray-500">
                                <span className="w-2 h-2 mr-1.5 bg-green-500 rounded-full"></span>
                                Online
                            </div>
                        </>
                    )}
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
