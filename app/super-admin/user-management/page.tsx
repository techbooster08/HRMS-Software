"use client"
import { useState, useEffect, FC, FormEvent, ChangeEvent } from 'react';
import { ShieldCheck, Users, Briefcase, User as UserIcon, Plus, Search, Clock, Eye, Pen, Trash2, X, LucideProps } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

// --- TYPE DEFINITIONS ---

interface User {
    id: number;
    initial: string;
    name: string;
    email: string;
    role: 'Main Super Admin' | 'Admin';
    status: 'Active' | 'Suspended';
    lastLogin: string;
}

// interface Stat {
//     title: string;
//     count: number;
//     icon: React.ElementType<LucideProps>;
//     color: string;
//     bgColor: string;
// }

// --- MOCK DATA ---

const initialUsers: User[] = [
    { id: 1, initial: 'PS', name: 'Priya Sharma', email: 'priya.sharma@techcorp.com',  role: 'Main Super Admin', status: 'Active', lastLogin: '2024-01-20 09:15:00' },
    { id: 2, initial: 'RG', name: 'Rohan Gupta', email: 'rohan.gupta@digitalinnovations.com', role: 'Admin', status: 'Active', lastLogin: '2024-01-20 08:45:00' },
    { id: 3, initial: 'AV', name: 'Anjali Verma', email: 'anjali.verma@startupxyz.com', role: 'Main Super Admin', status: 'Active', lastLogin: '2024-01-19 16:30:00' },
    { id: 4, initial: 'SK', name: 'Sameer Khan', email: 'sameer.khan@globalmanufacturing.com', role: 'Admin', status: 'Suspended', lastLogin: '2024-01-15 14:20:00' },
    { id: 5, initial: 'NS', name: 'Neha Singh', email: 'neha.singh@creativeagencypro.com', role: 'Main Super Admin', status: 'Active', lastLogin: '2024-01-20 10:05:00' },
    { id: 6, initial: 'VR', name: 'Vikram Rathore', email: 'vikram.rathore@techcorp.com',  role: 'Admin', status: 'Active', lastLogin: '2024-01-20 08:30:00' },
];

// const stats: Stat[] = [
//     { title: 'Super Admins', count: 1, icon: ShieldCheck, color: 'text-violet-600', bgColor: 'bg-violet-100' },
//     { title: 'Org Admins', count: 5, icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-100' },
//     { title: 'HR Managers', count: 1, icon: Briefcase, color: 'text-green-600', bgColor: 'bg-green-100' },
//     { title: 'Employees', count: 1, icon: UserIcon, color: 'text-orange-600', bgColor: 'bg-orange-100' },
// ];


// --- REUSABLE COMPONENTS ---

// interface StatCardProps { stat: Stat; }
// const StatCard: FC<StatCardProps> = ({ stat }) => (
//     <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-center justify-between">
//         <div className="flex items-center">
//             <div className={`p-3 rounded-lg ${stat.bgColor}`}>
//                 <stat.icon className={`h-6 w-6 ${stat.color}`} />
//             </div>
//             <p className="ml-4 text-gray-600 font-medium">{stat.title}</p>
//         </div>
//         <p className="text-3xl font-bold text-gray-800">{stat.count}</p>
//     </div>
// );

interface StatusBadgeProps { status: User['status']; }
const StatusBadge: FC<StatusBadgeProps> = ({ status }) => {
    const baseClasses = "px-3 py-1 text-xs font-semibold rounded-full";
    const statusClasses = {
        Active: "bg-green-100 text-green-700",
        Suspended: "bg-red-100 text-red-700",
    };
    return <span className={`${baseClasses} ${statusClasses[status]}`}>{status}</span>;
};

interface RoleBadgeProps { role: User['role']; }
const RoleBadge: FC<RoleBadgeProps> = ({ role }) => {
    const baseClasses = "px-3 py-1 text-xs font-semibold rounded-full border";
    const roleClasses = {
        'Main Super Admin': 'bg-blue-50 border-blue-200 text-blue-600',
        'Admin': 'bg-green-50 border-green-200 text-green-600',
    };
    return <span className={`${baseClasses} ${roleClasses[role]}`}>{role}</span>;
};

interface UserRowProps { user: User; onViewDetails: (user: User) => void; }
const UserRow: FC<UserRowProps> = ({ user, onViewDetails }) => (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="py-4 px-6">
            <div className="flex items-center">
                <div className="w-10 h-10 flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                        {user.initial}
                    </div>
                </div>
                <div>
                    <div className="font-semibold text-gray-800">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                </div>
            </div>
        </td>
        <td className="py-4 px-6"><RoleBadge role={user.role} /></td>
        <td className="py-4 px-6"><StatusBadge status={user.status} /></td>
        <td className="py-4 px-6 text-gray-600">{user.lastLogin}</td>
        <td className="py-4 px-6">
            <div className="flex items-center space-x-3">
                <button className="text-gray-400 hover:text-gray-600"><Clock size={18} /></button>
                <button onClick={() => onViewDetails(user)} className="text-gray-400 hover:text-gray-600"><Eye size={18} /></button>
                <button className="text-gray-400 hover:text-gray-600"><Pen size={18} /></button>
                <button className="text-gray-400 hover:text-red-600"><Trash2 size={18} /></button>
            </div>
        </td>
    </tr>
);

interface UserDetailsModalProps { user: User | null; onClose: () => void; }
const UserDetailsModal: FC<UserDetailsModalProps> = ({ user, onClose }) => {
    if (!user) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 transition-opacity duration-300">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg m-4 transform transition-all duration-300 scale-95 hover:scale-100">
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800">User Details</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"><X size={24} /></button>
                </div>
                <div className="p-8 space-y-5">
                    <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full bg-violet-500 text-white flex items-center justify-center font-bold text-2xl mr-6">{user.initial}</div>
                        <div>
                            <p className="text-xl font-bold text-gray-900">{user.name}</p>
                            <p className="text-md text-gray-500">{user.email}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-4">
                        <div><p className="text-sm font-medium text-gray-500">Role</p><p className="text-md font-semibold text-gray-800"><RoleBadge role={user.role} /></p></div>
                        <div><p className="text-sm font-medium text-gray-500">Status</p><p className="text-md font-semibold text-gray-800"><StatusBadge status={user.status} /></p></div>
                        <div><p className="text-sm font-medium text-gray-500">Last Login</p><p className="text-md font-semibold text-gray-800">{user.lastLogin}</p></div>
                    </div>
                </div>
                <div className="bg-gray-50 px-6 py-4 rounded-b-2xl text-right">
                    <button onClick={onClose} className="px-5 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">Close</button>
                </div>
            </div>
        </div>
    );
};

type NewUserData = Omit<User, 'id' | 'initial' | 'status' | 'lastLogin'>;
interface AddUserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddUser: (user: NewUserData) => void;
}
const AddUserModal: FC<AddUserModalProps> = ({ isOpen, onClose, onAddUser }) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    // const [organization, setOrganization] = useState<string>('');
    const [role, setRole] = useState<User['role']>('Main Super Admin');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !email) return;
        onAddUser({ name, email, role });
        setName(''); setEmail(''); setRole('Main Super Admin');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 ">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg m-4">
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800">Add New User</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="p-8 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input type="text" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                            <select value={role} onChange={(e: ChangeEvent<HTMLSelectElement>) => setRole(e.target.value as User['role'])} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500">
                                <option>Organization Admin</option>
                                <option>HR Manager</option>
                            </select>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-6 py-4 rounded-b-2xl flex justify-end items-center space-x-3">
                        <button type="button" onClick={onClose} className="px-5 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300">Cancel</button>
                        <button type="submit" className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-md">Add User</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// --- MAIN APP COMPONENT ---

const UserManagement: FC = () => {
    const [allUsers, setAllUsers] = useState<User[]>(initialUsers);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedRole, setSelectedRole] = useState<string>('All Roles');
    const [selectedStatus, setSelectedStatus] = useState<string>('All Status');
    const [filteredUsers, setFilteredUsers] = useState<User[]>(allUsers);
    const [viewingUser, setViewingUser] = useState<User | null>(null);
    const [isAddingUser, setIsAddingUser] = useState<boolean>(false);

    useEffect(() => {
        let currentUsers = [...allUsers];
        if (searchTerm) {
            currentUsers = currentUsers.filter(user =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (selectedRole !== 'All Roles') {
            currentUsers = currentUsers.filter(user => user.role === selectedRole);
        }
        if (selectedStatus !== 'All Status') {
            currentUsers = currentUsers.filter(user => user.status === selectedStatus);
        }
        setFilteredUsers(currentUsers);
    }, [searchTerm, selectedRole, selectedStatus, allUsers]);

    const handleViewDetails = (user: User) => setViewingUser(user);
    const handleCloseModal = () => setViewingUser(null);

    const handleAddUser = (newUser: NewUserData) => {
        const getInitials = (name: string): string => name.split(' ').map(n => n[0]).join('').toUpperCase();
        const userToAdd: User = {
            id: allUsers.length + 1,
            initial: getInitials(newUser.name),
            status: 'Active',
            lastLogin: new Date().toISOString().slice(0, 19).replace('T', ' '),
            ...newUser
        };
        setAllUsers(prevUsers => [userToAdd, ...prevUsers]);
        toast.success('User added successfully!');
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans mt-10 w-full">
            <Toaster position="top-right" />
            <div className="container mx-auto p-4 sm:p-6 lg:p-8">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">User Management</h1>
                        <p className="mt-1 text-gray-500">Manage all users across the HRMS platform</p>
                    </div>
                    <button onClick={() => setIsAddingUser(true)} className="mt-4 sm:mt-0 flex items-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-viobluelet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                        <Plus className="h-5 w-5 mr-2" />
                        Add User
                    </button>
                </header>

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map(stat => <StatCard key={stat.title} stat={stat} />)}
                </div> */}

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="p-4 flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 bg-gray-50/50">
                        <div className="w-full sm:w-auto flex items-center border border-gray-300 rounded-lg bg-white focus-within:ring-2 focus-within:ring-blue-500">
                            <Search className="h-5 w-5 text-gray-400 mx-3" />
                            <input type="text" placeholder="Search users..." className="py-2 pr-3 w-full focus:outline-none rounded-r-lg" value={searchTerm} onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)} />
                        </div>
                        <div className="w-full sm:w-auto flex items-center space-x-4 mt-4 sm:mt-0">
                            <select className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" value={selectedRole} onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedRole(e.target.value)}>
                                <option>All Roles</option>
                                <option>Main Super Admin</option>
                                <option>Amin</option>
                            </select>
                            <select className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" value={selectedStatus} onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedStatus(e.target.value)}>
                                <option>All Status</option>
                                <option>Active</option>
                                {/* <option>Trial</option> */}
                                <option>Suspended</option>
                            </select>
                        </div>
                        <div className="hidden lg:block text-sm text-gray-600">Total: {filteredUsers.length} users</div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 border-b border-gray-200 text-xs text-gray-500 uppercase tracking-wider">
                                <tr>
                                    <th scope="col" className="py-3 px-6 font-medium">User</th>
                                    <th scope="col" className="py-3 px-6 font-medium">Role</th>
                                    <th scope="col" className="py-3 px-6 font-medium">Status</th>
                                    <th scope="col" className="py-3 px-6 font-medium">Last Login</th>
                                    <th scope="col" className="py-3 px-6 font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredUsers.length > 0 ? (
                                    filteredUsers.map((user) => <UserRow key={user.id} user={user} onViewDetails={handleViewDetails} />)
                                ) : (
                                    <tr><td colSpan={6} className="text-center py-10 text-gray-500">No users found.</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <UserDetailsModal user={viewingUser} onClose={handleCloseModal} />
            <AddUserModal isOpen={isAddingUser} onClose={() => setIsAddingUser(false)} onAddUser={handleAddUser} />
        </div>
    );
}

export default UserManagement;
