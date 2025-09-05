"use client";

import React, { useState, FC, useMemo, Fragment } from 'react';
import { Search, MessageSquare, Send, Plus, Edit, Trash2, X, BookOpen, FileText, ArrowLeft } from 'lucide-react';

// --- TYPE DEFINITIONS ---

type TicketStatus = 'Open' | 'Pending' | 'Resolved';
type TicketPriority = 'Low' | 'Medium' | 'High';

interface Ticket {
    id: string;
    subject: string;
    requester: {
        name: string;
        email: string;
    };
    organization: string;
    status: TicketStatus;
    priority: TicketPriority;
    assignedTo: string;
    lastUpdate: string;
    conversation: { author: string; text: string; time: string }[];
}

interface Article {
    id: string;
    title: string;
    category: 'Getting Started' | 'User Management' | 'Billing' | 'Integrations' | 'Troubleshooting';
    content: string;
    lastUpdated: string;
}

const teamMembers = ['Divya Sharma', 'Rohan Mehra', 'Priya Singh', 'Amit Patel', 'Unassigned'];

const initialTickets: Ticket[] = [
    {
        id: 'TKT-001',
        subject: 'Cannot login with new credentials',
        requester: { name: 'Aarav Kumar', email: 'aarav.k@innovateinc.com' },
        organization: 'Innovate Inc.',
        status: 'Open',
        priority: 'High',
        assignedTo: 'Divya Sharma',
        lastUpdate: '2025-09-03 10:00 AM',
        conversation: [
            { author: 'Aarav Kumar', text: 'Hi, I received my new credentials but I am unable to log in. It says "Invalid username or password".', time: '10:00 AM' },
        ],
    },
    {
        id: 'TKT-002',
        subject: 'Billing question for invoice #INV-2025-08-123',
        requester: { name: 'Sneha Reddy', email: 'sneha.r@techcorp.com' },
        organization: 'TechCorp Solutions',
        status: 'Pending',
        priority: 'Medium',
        assignedTo: 'Rohan Mehra',
        lastUpdate: '2025-09-02 04:30 PM',
        conversation: [
             { author: 'Rohan Mehra', text: 'Hi Sneha, looking into this for you. I need to check with our finance team and will get back to you shortly.', time: '04:30 PM' },
             { author: 'Sneha Reddy', text: 'I have a question about a charge on our latest invoice. Can someone clarify what the "Platform Surcharge" is?', time: '02:15 PM' },
        ],
    },
     {
        id: 'TKT-003',
        subject: 'Feature Request: Dark Mode',
        requester: { name: 'Vikram Singh', email: 'vikram.s@globalmfg.com' },
        organization: 'Global Manufacturing',
        status: 'Resolved',
        priority: 'Low',
        assignedTo: 'Amit Patel',
        lastUpdate: '2025-09-01 11:00 AM',
        conversation: [
            { author: 'Amit Patel', text: 'Thank you for the suggestion! We have added it to our product roadmap. I am marking this as resolved for now.', time: '11:00 AM' },
            { author: 'Vikram Singh', text: 'It would be great if the platform supported a dark mode. It would be easier on the eyes.', time: '09:00 AM' },
        ],
    },
];

const initialArticles: Article[] = [
    { id: 'KB-001', title: 'How to Reset Your Password', category: 'Getting Started', content: 'To reset your password, navigate to the main login screen and click the "Forgot Password" link. You will be prompted to enter the email address associated with your account. Once submitted, a password reset link will be sent to your email. Please note that this link is valid for one hour.', lastUpdated: '2025-08-15' },
    { id: 'KB-002', title: 'Adding a New User to Your Organization', category: 'User Management', content: 'Only users with "Organization Admin" privileges can add new users. From the main dashboard, go to "User Management." Click the "Add User" button in the top right corner. A modal will appear where you must fill in the new user\'s full name, email address, and assign them a role. They will receive an email to set up their account.', lastUpdated: '2025-08-20' },
    { id: 'KB-003', title: 'Understanding Your Monthly Invoice', category: 'Billing', content: 'Your monthly invoice is composed of your base subscription fee plus any additional charges incurred during the billing cycle. These can include user overages, premium feature add-ons, or API usage fees. For a detailed, line-by-line breakdown, please navigate to the "Billing" section and select the invoice you wish to view.', lastUpdated: '2025-08-22' },
    { id: 'KB-004', title: 'Connecting to the Slack Integration', category: 'Integrations', content: 'Our Slack integration allows you to receive important notifications directly in your workspace. To connect, go to "Global Settings" > "Integrations". Find Slack in the list and click "Connect". You will be redirected to Slack to authorize the application.', lastUpdated: '2025-09-01' },
];

// --- HELPER & UI COMPONENTS ---

const StatusBadge: FC<{ status: TicketStatus }> = ({ status }) => {
    const styles = {
        Open: 'bg-red-100 text-red-700',
        Pending: 'bg-yellow-100 text-yellow-700',
        Resolved: 'bg-green-100 text-green-700',
    };
    return <span className={`px-3 py-1 text-xs font-semibold rounded-full ${styles[status]}`}>{status}</span>;
};

const PriorityTag: FC<{ priority: TicketPriority }> = ({ priority }) => {
    const styles = {
        High: 'bg-red-500',
        Medium: 'bg-yellow-500',
        Low: 'bg-gray-400',
    };
    return <div className="flex items-center"><span className={`w-2.5 h-2.5 rounded-full mr-2 ${styles[priority]}`}></span>{priority}</div>
};

// --- MODALS ---

const TicketDetailsModal: FC<{ ticket: Ticket | null; onClose: () => void; onUpdate: (updatedTicket: Ticket) => void; }> = ({ ticket, onClose, onUpdate }) => {
    const [reply, setReply] = useState('');
    const [assignedTo, setAssignedTo] = useState(ticket?.assignedTo || 'Unassigned');

    if (!ticket) return null;

    const handleReply = () => {
        if (!reply) return;
        const newConversation = { author: 'Support Team', text: reply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
        const updatedTicket = { ...ticket, conversation: [newConversation, ...ticket.conversation], status: 'Pending' as TicketStatus, assignedTo, lastUpdate: new Date().toLocaleString() };
        onUpdate(updatedTicket);
        setReply('');
    };
    
    const handleAssigneeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newAssignee = e.target.value;
        setAssignedTo(newAssignee);
        onUpdate({ ...ticket, assignedTo: newAssignee, lastUpdate: new Date().toLocaleString() });
    };

    return (
         <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col">
                <header className="flex justify-between items-center p-6 border-b">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{ticket.subject}</h2>
                        <p className="text-sm text-gray-500">from {ticket.requester.name} ({ticket.organization})</p>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100"><X /></button>
                </header>
                <div className="flex flex-1 overflow-hidden">
                    <div className="w-2/3 border-r overflow-y-auto p-6">
                        <div className="space-y-6">
                            {ticket.conversation.slice().reverse().map((msg, idx) => (
                                <div key={idx} className={`flex gap-3 ${msg.author !== 'Support Team' ? '' : 'flex-row-reverse'}`}>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 ${msg.author !== 'Support Team' ? 'bg-gray-400' : 'bg-blue-600'}`}>
                                        {msg.author.charAt(0)}
                                    </div>
                                    <div className={`p-4 rounded-lg max-w-md ${msg.author !== 'Support Team' ? 'bg-gray-100' : 'bg-blue-50'}`}>
                                        <div className="flex items-center justify-between mb-1">
                                            <p className="font-bold text-sm">{msg.author}</p>
                                            <p className="text-xs text-gray-400">{msg.time}</p>
                                        </div>
                                        <p className="text-sm text-gray-700 whitespace-pre-wrap">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-1/3 p-6 bg-gray-50/70 flex flex-col justify-between">
                         <div>
                            <h3 className="text-lg font-semibold mb-4">Ticket Details</h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between"><span className="font-medium text-gray-500">Status</span> <StatusBadge status={ticket.status} /></div>
                                <div className="flex justify-between items-center"><span className="font-medium text-gray-500">Priority</span> <PriorityTag priority={ticket.priority} /></div>
                                <div className="flex justify-between items-center"><span className="font-medium text-gray-500">Assignee</span> 
                                    <select value={assignedTo} onChange={handleAssigneeChange} className="p-1 border rounded-md text-sm">
                                        {teamMembers.map(m => <option key={m} value={m}>{m}</option>)}
                                    </select>
                                </div>
                                <div className="flex justify-between"><span className="font-medium text-gray-500">Last Update</span> <span className="text-gray-700">{ticket.lastUpdate}</span></div>
                            </div>
                        </div>
                        <div className="mt-6">
                             <textarea value={reply} onChange={(e) => setReply(e.target.value)} placeholder="Type your response..." className="w-full h-28 p-2 border rounded-md text-sm mb-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
                            <button onClick={handleReply} className="w-full bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
                                <Send size={16}/> Respond
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ArticleModal: FC<{ article: Article | null; onClose: () => void; onSave: (article: Article) => void; onDelete: (id: string) => void; isCreating: boolean; }> = ({ article, onClose, onSave, onDelete, isCreating }) => {
    const [title, setTitle] = useState(article?.title || '');
    const [category, setCategory] = useState<Article['category']>(article?.category || 'Getting Started');
    const [content, setContent] = useState(article?.content || '');

    const handleSave = () => {
        if (!title || !content) return;
        const newArticle = {
            id: article?.id || `KB-${Date.now()}`,
            title,
            category,
            content,
            lastUpdated: new Date().toISOString().split('T')[0]
        };
        onSave(newArticle);
        onClose();
    };
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl">
                 <header className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-2xl font-bold text-gray-800">{isCreating ? 'Create New Article' : 'Edit Article'}</h2>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100"><X /></button>
                </header>
                <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border rounded-md"/>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        <select value={category} onChange={e => setCategory(e.target.value as Article['category'])} className="w-full p-2 border rounded-md">
                            <option>Getting Started</option>
                            <option>User Management</option>
                            <option>Billing</option>
                             <option>Integrations</option>
                             <option>Troubleshooting</option>
                        </select>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                        <textarea value={content} onChange={e => setContent(e.target.value)} className="w-full h-48 p-2 border rounded-md"></textarea>
                    </div>
                </div>
                <footer className="bg-gray-50 px-6 py-4 flex justify-between items-center rounded-b-2xl">
                    {!isCreating && article && (
                         <button onClick={() => onDelete(article.id)} className="px-4 py-2 bg-red-100 text-red-700 font-semibold rounded-lg hover:bg-red-200 flex items-center gap-2">
                            <Trash2 size={16}/> Delete
                        </button>
                    )}
                    <div className="flex justify-end gap-3 w-full">
                        <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300">Cancel</button>
                        <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Save Article</button>
                    </div>
                </footer>
            </div>
        </div>
    );
};


// --- MAIN PAGE COMPONENT ---
const SupportCenterPage: FC = () => {
    const [activeTab, setActiveTab] = useState<'tickets' | 'kb'>('tickets');
    
    // Tickets State
    const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
    const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
    const [ticketSearch, setTicketSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [priorityFilter, setPriorityFilter] = useState('All');

    // Knowledge Base State
    const [articles, setArticles] = useState<Article[]>(initialArticles);
    const [editingArticle, setEditingArticle] = useState<Article | null>(null);
    const [readingArticle, setReadingArticle] = useState<Article | null>(null);
    const [isCreatingArticle, setIsCreatingArticle] = useState(false);
    const [kbSearch, setKbSearch] = useState('');
    const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);


    const filteredTickets = useMemo(() => tickets.filter(t => 
        (statusFilter === 'All' || t.status === statusFilter) &&
        (priorityFilter === 'All' || t.priority === priorityFilter) &&
        (t.subject.toLowerCase().includes(ticketSearch.toLowerCase()) || t.requester.name.toLowerCase().includes(ticketSearch.toLowerCase()))
    ), [tickets, statusFilter, priorityFilter, ticketSearch]);

    const filteredArticles = useMemo(() => articles.filter(a =>
        a.title.toLowerCase().includes(kbSearch.toLowerCase()) || a.content.toLowerCase().includes(kbSearch.toLowerCase())
    ), [articles, kbSearch]);

    const handleUpdateTicket = (updatedTicket: Ticket) => {
        setTickets(tickets.map(t => t.id === updatedTicket.id ? updatedTicket : t));
        setSelectedTicket(updatedTicket);
    };

    const handleSaveArticle = (articleToSave: Article) => {
        const exists = articles.some(a => a.id === articleToSave.id);
        if (exists) {
            setArticles(articles.map(a => a.id === articleToSave.id ? articleToSave : a));
        } else {
            setArticles([articleToSave, ...articles]);
        }
    };

    const handleDeleteArticle = (id: string) => {
        setArticles(articles.filter(a => a.id !== id));
        setShowDeleteConfirm(null);
        setEditingArticle(null); // Close edit modal if open
    };
    
    const openEditModal = (article: Article) => {
        setReadingArticle(null);
        setIsCreatingArticle(false);
        setEditingArticle(article);
    }
    
    return (
        <div className="p-4 sm:p-6 lg:p-8 font-sans bg-gray-50/50 min-h-screen mt-10">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Support Center</h1>
                <p className="mt-1 text-gray-500">Manage support tickets and the knowledge base.</p>
            </header>

            {/* Tabs */}
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    <button onClick={() => setActiveTab('tickets')} className={`${activeTab === 'tickets' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2`}>
                        <MessageSquare size={16}/> Support Tickets
                    </button>
                    <button onClick={() => setActiveTab('kb')} className={`${activeTab === 'kb' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2`}>
                        <BookOpen size={16}/> Knowledge Base
                    </button>
                </nav>
            </div>

            {/* Content */}
            {activeTab === 'tickets' && (
                <div className="mt-6 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="p-4 flex flex-col sm:flex-row items-center justify-between border-b bg-gray-50/50 gap-4">
                         <div className="w-full sm:w-1/3 flex items-center border rounded-lg bg-white focus-within:ring-2 focus-within:ring-blue-500">
                            <Search className="h-5 w-5 text-gray-400 mx-3"/>
                            <input type="text" placeholder="Search tickets..." className="py-2 pr-3 w-full focus:outline-none" value={ticketSearch} onChange={e => setTicketSearch(e.target.value)} />
                        </div>
                        <div className="flex items-center space-x-4">
                             <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="border rounded-lg py-2 px-3 text-sm">
                                <option value="All">All Statuses</option><option>Open</option><option>Pending</option><option>Resolved</option>
                            </select>
                            <select value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)} className="border rounded-lg py-2 px-3 text-sm">
                                <option value="All">All Priorities</option><option>High</option><option>Medium</option><option>Low</option>
                            </select>
                        </div>
                    </div>
                     <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
                                <tr>
                                    <th className="p-4 font-medium">Subject</th>
                                    <th className="p-4 font-medium">Requester</th>
                                    <th className="p-4 font-medium">Status</th>
                                    <th className="p-4 font-medium">Priority</th>
                                    <th className="p-4 font-medium">Assigned To</th>
                                    <th className="p-4 font-medium">Last Update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTickets.map(ticket => (
                                    <tr key={ticket.id} onClick={() => setSelectedTicket(ticket)} className="border-t hover:bg-gray-50 cursor-pointer">
                                        <td className="p-4 font-semibold text-gray-800">{ticket.subject}</td>
                                        <td className="p-4 text-gray-600">{ticket.requester.name}</td>
                                        <td className="p-4"><StatusBadge status={ticket.status} /></td>
                                        <td className="p-4"><PriorityTag priority={ticket.priority} /></td>
                                        <td className="p-4 text-gray-600">{ticket.assignedTo}</td>
                                        <td className="p-4 text-gray-500">{ticket.lastUpdate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            
            {activeTab === 'kb' && (
                 <div className="mt-6">
                    {readingArticle ? (
                        <div className="bg-white p-8 rounded-xl border shadow-sm">
                            <button onClick={() => setReadingArticle(null)} className="flex items-center gap-2 text-blue-600 font-semibold text-sm mb-4 hover:underline">
                                <ArrowLeft size={16} /> Back to Knowledge Base
                            </button>
                            <p className="text-sm text-gray-500 mb-2">{readingArticle.category} &bull; Last updated {readingArticle.lastUpdated}</p>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">{readingArticle.title}</h2>
                            <div className="prose max-w-none text-gray-700 whitespace-pre-wrap">
                                {readingArticle.content}
                            </div>
                             <div className="mt-8 border-t pt-4 flex gap-3">
                                <button onClick={() => openEditModal(readingArticle)} className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 flex items-center gap-2">
                                    <Edit size={16}/> Edit Article
                                </button>
                             </div>
                        </div>
                    ) : (
                        <Fragment>
                            <div className="flex justify-between items-center mb-4">
                                <div className="w-full sm:w-1/3 flex items-center border rounded-lg bg-white focus-within:ring-2 focus-within:ring-blue-500 shadow-sm">
                                    <Search className="h-5 w-5 text-gray-400 mx-3"/>
                                    <input type="text" placeholder="Search knowledge base..." className="py-2.5 pr-3 w-full focus:outline-none" value={kbSearch} onChange={e => setKbSearch(e.target.value)} />
                                </div>
                                <button onClick={() => { setIsCreatingArticle(true); setEditingArticle(null); }} className="bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-blue-700 flex items-center gap-2">
                                    <Plus size={16} /> Create Article
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredArticles.map(article => (
                                    <div key={article.id} className="bg-white p-6 rounded-xl border shadow-sm flex flex-col">
                                        <FileText className="text-blue-500 mb-3" />
                                        <h3 className="font-bold text-lg text-gray-800 mb-1">{article.title}</h3>
                                        <p className="text-xs text-gray-400 mb-3">{article.category} &bull; Updated {article.lastUpdated}</p>
                                        <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">{article.content}</p>
                                        <div className="mt-auto">
                                            <button onClick={() => setReadingArticle(article)} className="text-blue-600 font-semibold text-sm hover:underline">Read more...</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Fragment>
                    )}
                 </div>
            )}

            {/* Modals */}
            {selectedTicket && <TicketDetailsModal ticket={selectedTicket} onClose={() => setSelectedTicket(null)} onUpdate={handleUpdateTicket} />}
            {(isCreatingArticle || editingArticle) && <ArticleModal article={editingArticle} isCreating={isCreatingArticle} onClose={() => { setEditingArticle(null); setIsCreatingArticle(false); }} onSave={handleSaveArticle} onDelete={() => setShowDeleteConfirm(editingArticle!.id)} />}
            
            {showDeleteConfirm && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
                         <div className="p-8 text-center">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">Are you sure?</h2>
                            <p className="text-gray-600">This action cannot be undone. This will permanently delete the article.</p>
                         </div>
                         <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3 rounded-b-2xl">
                            <button onClick={() => setShowDeleteConfirm(null)} className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300">Cancel</button>
                            <button onClick={() => handleDeleteArticle(showDeleteConfirm)} className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700">Delete</button>
                         </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SupportCenterPage;

