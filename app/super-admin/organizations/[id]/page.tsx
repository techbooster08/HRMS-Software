'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, User, Mail, Users, Building2, Calendar } from 'lucide-react';

// --- TYPES ---
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
const mockOrganizations: Organization[] = [
  { id: 1, name: 'TechCorp Solutions', domain: 'techcorp.com', adminName: 'Nitin Chitale', adminEmail: 'admin@techcorp.com', employees: 1250, plan: 'Enterprise', status: 'Active', lastActive: '2024-01-20' },
  { id: 2, name: 'Digital Innovations Inc', domain: 'digitalinnovations.com', adminName: 'Sarah Johnson', adminEmail: 'sarah@digitalinnovations.com', employees: 890, plan: 'Professional', status: 'Active', lastActive: '2024-01-20' },
  { id: 3, name: 'StartupXYZ', domain: 'startupxyz.com', adminName: 'Mike Chen', adminEmail: 'mike@startupxyz.com', employees: 45, plan: 'Starter', status: 'Trial', lastActive: '2024-01-19' },
  { id: 4, name: 'Global Manufacturing Ltd', domain: 'globalmanufacturing.com', adminName: 'Lisa Anderson', adminEmail: 'lisa@globalmanufacturing.com', employees: 2100, plan: 'Enterprise', status: 'Suspended', lastActive: '2024-01-15' },
  { id: 5, name: 'Creative Agency Pro', domain: 'creativeagencypro.com', adminName: 'David Wilson', adminEmail: 'david@creativeagencypro.com', employees: 125, plan: 'Professional', status: 'Active', lastActive: '2024-01-18' },
];

// --- MOCK EMPLOYEES ---
const mockEmployees = [
  { id: 1, name: 'Anuj Thankre', role: 'HR Manager', email: 'alice@techcorp.com' },
  { id: 2, name: 'Sarang Thankre', role: 'Software Engineer', email: 'bob@techcorp.com' },
  { id: 3, name: 'Pranav Dhabarde', role: 'Product Manager', email: 'charlie@techcorp.com' },
];

export default function OrganizationDetailPage() {
  const params = useParams();
  const id = Number(params.id);

  const organization = mockOrganizations.find(org => org.id === id);

  if (!organization) {
    return <div className="p-8 text-center text-gray-600">Organization not found.</div>;
  }

  return (
    <div className="p-8 max-w-6xl mx-auto mt-10">
      {/* Back button */}
      <Link href="/super-admin/organizations" className="flex items-center text-blue-600 hover:underline mb-6">
        <ArrowLeft className="mr-2" size={18} /> Back to Organizations
      </Link>

      {/* Header */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{organization.name}</h1>
        <p className="text-gray-500">{organization.domain}</p>
      </div>

      {/* Grid Sections */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Organization Info */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Organization Info</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2"><Building2 size={18}/> <strong>Admin:</strong> {organization.adminName} ({organization.adminEmail})</li>
            <li className="flex items-center gap-2"><Users size={18}/> <strong>Employees:</strong> {organization.employees.toLocaleString()}</li>
            <li><strong>Status:</strong> {organization.status}</li>
            <li className="flex items-center gap-2"><Calendar size={18}/> <strong>Last Active:</strong> {organization.lastActive}</li>
          </ul>
        </div>

        {/* Subscription Info */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Subscription Plan</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Plan:</strong> {organization.plan}</li>
            <li><strong>Billing Cycle:</strong> Annual</li>
            <li><strong>Renewal Date:</strong> 2025-01-20</li>
            <li><strong>Seats Available:</strong> Unlimited</li>
          </ul>
        </div>
      </div>

      {/* Employees List */}
      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h2 className="text-xl font-semibold mb-4">Employees</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 border border-gray-200 text-left">Name</th>
              <th className="p-3 border border-gray-200 text-left">Role</th>
              <th className="p-3 border border-gray-200 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {mockEmployees.map(emp => (
              <tr key={emp.id} className="hover:bg-gray-50">
                <td className="p-3 border border-gray-200">{emp.name}</td>
                <td className="p-3 border border-gray-200">{emp.role}</td>
                <td className="p-3 border border-gray-200">{emp.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Activity Section */}
      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✔️ New employee "Alice Johnson" added on 2025-01-15</li>
          <li>✔️ Plan upgraded to Enterprise on 2025-01-10</li>
          <li>✔️ Admin updated billing info on 2024-12-20</li>
        </ul>
      </div>
    </div>
  );
}
