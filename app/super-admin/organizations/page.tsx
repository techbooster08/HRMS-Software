'use client';

import { FC, useState, FormEvent } from 'react';
import { Plus, Search, Pencil, Eye, Trash2, X } from 'lucide-react';
import Link from 'next/link';

// --- TYPE DEFINITIONS ---
type OrganizationPlan = 'Enterprise' | 'Professional' | 'Starter';
type OrganizationStatus = 'Active' | 'Trial' | 'Suspended';

interface Organization {
    id: number;
    name: string;
    domain: string;
    adminName: string;
    adminEmail: string;
    employees: number;
    plan: OrganizationPlan;
    status: OrganizationStatus;
    lastActive: string;
}

// --- MOCK DATA ---
const initialOrganizations: Organization[] = [
    { id: 1, name: 'TechCorp Solutions', domain: 'techcorp.com', adminName: 'John Smith', adminEmail: 'admin@techcorp.com', employees: 1250, plan: 'Enterprise', status: 'Active', lastActive: '2024-01-20' },
    { id: 2, name: 'Digital Innovations Inc', domain: 'digitalinnovations.com', adminName: 'Sarah Johnson', adminEmail: 'sarah@digitalinnovations.com', employees: 890, plan: 'Professional', status: 'Active', lastActive: '2024-01-20' },
    { id: 3, name: 'StartupXYZ', domain: 'startupxyz.com', adminName: 'Mike Chen', adminEmail: 'mike@startupxyz.com', employees: 45, plan: 'Starter', status: 'Trial', lastActive: '2024-01-19' },
    { id: 4, name: 'Global Manufacturing Ltd', domain: 'globalmanufacturing.com', adminName: 'Lisa Anderson', adminEmail: 'lisa@globalmanufacturing.com', employees: 2100, plan: 'Enterprise', status: 'Suspended', lastActive: '2024-01-15' },
    { id: 5, name: 'Creative Agency Pro', domain: 'creativeagencypro.com', adminName: 'David Wilson', adminEmail: 'david@creativeagencypro.com', employees: 125, plan: 'Professional', status: 'Active', lastActive: '2024-01-18' },
];

// --- HELPER COMPONENTS ---

const PlanBadge: FC<{ plan: OrganizationPlan }> = ({ plan }) => {
    const planColors = {
        Enterprise: 'bg-purple-100 text-purple-700',
        Professional: 'bg-blue-100 text-blue-700',
        Starter: 'bg-green-100 text-green-700',
    };
    return <span className={`px-3 py-1 text-xs font-semibold rounded-full ${planColors[plan]}`}>{plan}</span>;
};

const StatusBadge: FC<{ status: OrganizationStatus }> = ({ status }) => {
    const statusColors = {
        Active: 'bg-green-100 text-green-700',
        Trial: 'bg-yellow-100 text-yellow-700',
        Suspended: 'bg-red-100 text-red-700',
    };
    return <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusColors[status]}`}>{status}</span>;
};


// --- MODAL COMPONENT ---
interface AddOrganizationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (newOrg: Omit<Organization, 'id' | 'status' | 'lastActive' | 'adminName' | 'employees'>) => void;
}

const AddOrganizationModal: FC<AddOrganizationModalProps> = ({ isOpen, onClose, onAdd }) => {
    if (!isOpen) return null;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        onAdd({
            name: formData.get('name') as string,
            domain: formData.get('domain') as string,
            adminEmail: formData.get('adminEmail') as string,
            plan: formData.get('plan') as OrganizationPlan,
        });
    };

    return (
        <div className="fixed inset-0  backdrop-blur-[1px] bg-acc z-50 flex justify-center items-center ">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Add New Organization</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={24} />
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Organization Name *</label>
                            <input type="text" name="name" id="name" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="Enter organization name" />
                        </div>
                        <div>
                            <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-1">Domain *</label>
                            <input type="text" name="domain" id="domain" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="company.com" />
                        </div>
                        <div>
                            <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700 mb-1">Admin Email *</label>
                            <input type="email" name="adminEmail" id="adminEmail" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="admin@company.com" />
                        </div>
                        <div>
                            <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">Plan *</label>
                            <select name="plan" id="plan" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                                <option value="Starter">Starter - Up to 50 employees</option>
                                <option value="Professional">Professional - Up to 500 employees</option>
                                <option value="Enterprise">Enterprise - 500+ employees</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-end gap-4 mt-8">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Create Organization</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// --- MAIN PAGE COMPONENT ---

const OrganizationsPage: FC = () => {
    const [organizations, setOrganizations] = useState<Organization[]>(initialOrganizations);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddOrganization = (newOrgData: Omit<Organization, 'id' | 'status' | 'lastActive' | 'adminName' | 'employees'>) => {
        const newOrg: Organization = {
            id: organizations.length + 1,
            ...newOrgData,
            adminName: 'New Admin',
            employees: 0,
            status: 'Active',
            lastActive: new Date().toISOString().split('T')[0],
        };
        setOrganizations(prev => [...prev, newOrg]);
        setIsModalOpen(false);
    };

    const filteredOrganizations = organizations
        .filter(org => org.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(org => statusFilter === 'All' || org.status === statusFilter);

    return (
        <>
            <div className="bg-gray-50 overflow-x-scroll w-full p-8 mt-10">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">Organization Management</h1>
                            <p className="text-gray-500 mt-1">Manage all organizations using your HRMS platform</p>
                        </div>
                        <button onClick={() => setIsModalOpen(true)} className="flex items-center bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition-colors">
                            <Plus size={20} className="mr-2" />
                            Add Organization
                        </button>
                    </div>

                    {/* Filters and Actions */}
                    <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search organizations..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 w-72 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                                />
                            </div>
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                            >
                                <option value="All">All Status</option>
                                <option value="Active">Active</option>
                                <option value="Trial">Trial</option>
                                <option value="Suspended">Suspended</option>
                            </select>
                        </div>
                        <div className="text-gray-600 font-medium">
                            Total: {filteredOrganizations.length} organizations
                        </div>
                    </div>

                    {/* Organizations Table */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    {['Organization', 'Admin', 'Employees', 'Plan', 'Status', 'Last Active', 'Actions'].map((header) => (
                                        <th key={header} className="p-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrganizations.map((org) => (
                                    <tr key={org.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                        <td className="p-4">
                                            <div className="font-medium text-gray-800">{org.name}</div>
                                            <div className="text-sm text-gray-500">{org.domain}</div>
                                        </td>
                                        <td className="p-4">
                                            <div className="font-medium text-gray-800">{org.adminName}</div>
                                            <div className="text-sm text-gray-500">{org.adminEmail}</div>
                                        </td>
                                        <td className="p-4 font-medium text-gray-700">{org.employees.toLocaleString()}</td>
                                        <td className="p-4"><PlanBadge plan={org.plan} /></td>
                                        <td className="p-4"><StatusBadge status={org.status} /></td>
                                        <td className="p-4 text-gray-700">{org.lastActive}</td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <button className="text-gray-500 hover:text-purple-600"><Pencil size={18} /></button>
                                                <Link href={`/super-admin/organizations/${org.id}`}>
                                                    <button className="text-gray-500 hover:text-blue-600"><Eye size={18} /></button>
                                                </Link>
                                                <button className="text-gray-500 hover:text-red-600"><Trash2 size={18} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <AddOrganizationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddOrganization}
            />
        </>
    );
};

export default OrganizationsPage;

