'use client';

import { FC, useState, ReactNode } from 'react';
import { Settings, Shield, Mail, CreditCard, Puzzle, Wrench } from 'lucide-react';

// --- TYPE DEFINITIONS ---
type SettingsTab = 'general' | 'security' | 'email' | 'billing' | 'integrations' | 'maintenance';

interface TabButtonProps {
    icon: ReactNode;
    label: string;
    isActive: boolean;
    onClick: () => void;
}

interface FormSectionProps {
    title: string;
    children: ReactNode;
}

interface ToggleInputProps {
    label: string;
    description: string;
    isEnabled: boolean;
    setIsEnabled: (enabled: boolean) => void;
}

// --- UI COMPONENTS ---

const TabButton: FC<TabButtonProps> = ({ icon, label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-left text-sm font-medium transition-colors ${
            isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
        }`}
    >
        {icon}
        {label}
    </button>
);

const FormSection: FC<FormSectionProps> = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-6">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {children}
        </div>
    </div>
);

const ToggleInput: FC<ToggleInputProps> = ({ label, description, isEnabled, setIsEnabled }) => (
    <div className="col-span-2 flex items-center justify-between">
        <div>
            <p className="font-medium text-gray-800">{label}</p>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
        <button
            type="button"
            onClick={() => setIsEnabled(!isEnabled)}
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${
                isEnabled ? 'bg-blue-600' : 'bg-gray-300'
            }`}
        >
            <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                    isEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
            />
        </button>
    </div>
);

const TextInput: FC<{
    label: string;
    name?: string;
    placeholder?: string;
    type?: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ label, name, placeholder, type = 'text', value, onChange }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
    </div>
);

const SelectInput: FC<{
    label: string;
    name?: string;
    children: ReactNode;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ label, name, children, value, onChange }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        >
            {children}
        </select>
    </div>
);

const PlaceholderContent: FC<{ title: string }> = ({ title }) => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 flex items-center justify-center h-64">
        <p className="text-gray-500">Settings for {title} coming soon</p>
    </div>
);


// --- TAB CONTENT COMPONENTS ---

const GeneralSettingsTab: FC = () => {
    // Dummy state for controlled components
    const [settings, setSettings] = useState({
        platformName: 'HRMS Pro',
        supportEmail: 'support@hrmspro.com',
        timezone: 'utc-3',
        language: 'english',
        maxOrgs: 10000,
        maxEmployees: 5000,
        fileUploadLimit: 50,
        apiRateLimit: 1000,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSettings(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <FormSection title="Platform Configuration">
                <TextInput label="Platform Name" name="platformName" value={settings.platformName} onChange={handleChange} />
                <TextInput label="Support Email" name="supportEmail" value={settings.supportEmail} onChange={handleChange} />
                <SelectInput label="Default Timezone" name="timezone" value={settings.timezone} onChange={handleChange}>
                    <option value="utc-3">UTC (GMT-3)</option>
                    <option value="utc+5:30">IST (GMT+5:30)</option>
                </SelectInput>
                <SelectInput label="Default Language" name="language" value={settings.language} onChange={handleChange}>
                    <option value="english">English</option>
                    <option value="spanish">Hindi</option>
                    <option value="spanish"></option>
                </SelectInput>
            </FormSection>
            <FormSection title="User Limits & Restrictions">
                <TextInput label="Max Organizations (Enterprise)" name="maxOrgs" type="number" value={settings.maxOrgs} onChange={handleChange} />
                <TextInput label="Max Employees per Org" name="maxEmployees" type="number" value={settings.maxEmployees} onChange={handleChange} />
                <TextInput label="File Upload Limit (MB)" name="fileUploadLimit" type="number" value={settings.fileUploadLimit} onChange={handleChange} />
                <TextInput label="API Rate Limit (requests/min)" name="apiRateLimit" type="number" value={settings.apiRateLimit} onChange={handleChange} />
            </FormSection>
        </>
    );
};

const SecuritySettingsTab: FC = () => {
    const [settings, setSettings] = useState({
        minLength: '',
        requireSpecialChars: true,
        passwordExpiration: 90,
        enforce2FA: true,
        allowSms2FA: true,
    });
    
    return (
         <>
            <FormSection title="Password Policies">
                <TextInput
                    label="Minimum Password Length"
                    name="minLength"
                    placeholder="Set minimum character requirement"
                    type="number"
                    value={settings.minLength}
                    onChange={e => setSettings({ ...settings, minLength: e.target.value })}
                />
                <ToggleInput
                    label="Require Special Characters"
                    description="Force users to include special characters"
                    isEnabled={settings.requireSpecialChars}
                    setIsEnabled={val => setSettings({ ...settings, requireSpecialChars: val })}
                />
                <TextInput
                    label="Password Expiration (days)"
                    name="passwordExpiration"
                    type="number"
                    value={settings.passwordExpiration}
                    onChange={e => setSettings({ ...settings, passwordExpiration: parseInt(e.target.value) || 0 })}
                />
            </FormSection>
            <FormSection title="Two-Factor Authentication">
                <ToggleInput
                    label="Enforce 2FA for Admins"
                    description="Require 2FA for all administrator accounts"
                    isEnabled={settings.enforce2FA}
                    setIsEnabled={val => setSettings({ ...settings, enforce2FA: val })}
                />
                <ToggleInput
                    label="Allow SMS 2FA"
                    description="Enable SMS-based two-factor authentication"
                    isEnabled={settings.allowSms2FA}
                    setIsEnabled={val => setSettings({ ...settings, allowSms2FA: val })}
                />
            </FormSection>
        </>
    );
};

const EmailSettingsTab: FC = () => {
    const [settings, setSettings] = useState({
        smtpHost: 'smtp.hrmspro.com',
        port: '587',
        security: 'tls'
    });

    return (
        <FormSection title="SMTP Configuration">
            <TextInput label="SMTP Host" name="smtpHost" value={settings.smtpHost} onChange={e => setSettings({ ...settings, smtpHost: e.target.value })} />
            <div />
            <TextInput label="Port" name="port" value={settings.port} onChange={e => setSettings({ ...settings, port: e.target.value })} />
            <SelectInput label="Security" name="security" value={settings.security} onChange={e => setSettings({ ...settings, security: e.target.value })}>
                <option value="tls">TLS</option>
                <option value="ssl">SSL</option>
            </SelectInput>
        </FormSection>
    );
};

// --- MAIN PAGE COMPONENT ---

const GlobalSettingsPage: FC = () => {
    const [activeTab, setActiveTab] = useState<SettingsTab>('general');

    const tabs = [
        { id: 'general', label: 'General Settings', icon: <Settings size={18} /> },
        { id: 'security', label: 'Security & Authentication', icon: <Shield size={18} /> },
        { id: 'email', label: 'Email Configuration', icon: <Mail size={18} /> },
        { id: 'billing', label: 'Billing & Subscriptions', icon: <CreditCard size={18} /> },
        { id: 'integrations', label: 'API & Integrations', icon: <Puzzle size={18} /> },
        { id: 'maintenance', label: 'System Maintenance', icon: <Wrench size={18} /> },
    ];
    
    const renderContent = () => {
        switch (activeTab) {
            case 'general': return <GeneralSettingsTab />;
            case 'security': return <SecuritySettingsTab />;
            case 'email': return <EmailSettingsTab />;
            case 'billing': return <PlaceholderContent title="Billing & Subscriptions" />;
            case 'integrations': return <PlaceholderContent title="API & Integrations" />;
            case 'maintenance': return <PlaceholderContent title="System Maintenance" />;
            default: return null;
        }
    };

    return (
        <div className="bg-gray-50 mt-10 p-8">
            <main className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Global Settings</h1>
                    <p className="text-gray-500 mt-1">Configure system-wide settings and preferences</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left Navigation */}
                    <aside className="lg:col-span-1">
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                           <div className="space-y-1">
                                {tabs.map(tab => (
                                    <TabButton 
                                        key={tab.id}
                                        icon={tab.icon}
                                        label={tab.label}
                                        isActive={activeTab === tab.id}
                                        onClick={() => setActiveTab(tab.id as SettingsTab)}
                                    />
                                ))}
                           </div>
                        </div>
                    </aside>

                    {/* Right Content */}
                    <div className="lg:col-span-3 overflow-y-scroll">
                        {renderContent()}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6 flex justify-between items-center">
                            <p className="text-sm text-gray-500">
                                Changes will be applied system-wide and may take a few minutes to propagate.
                            </p>
                            <div className="flex items-center gap-4">
                                <button className="font-semibold text-gray-600 hover:text-gray-800">Reset Changes</button>
                                <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">Save Settings</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default GlobalSettingsPage;
