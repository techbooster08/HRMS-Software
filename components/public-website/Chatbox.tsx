'use client'
import React, { useState, useEffect, useRef } from 'react';

interface Message {
    sender: 'bot' | 'user';
    text: string;
}

interface FaqNode {
    message: string;
    options?: Record<string, string>;
}

const faqTree: Record<string, FaqNode> = {
    'start': {
        message: "Hello! I'm the HRMS Assistant. How can I help you today?",
        options: {
            'features': "What are the key features?",
            'what_is_hrms': "What is HRMS software?",
            'suitability': "Is this suitable for my business?"
        }
    },
    'features': {
        message: "Our HRMS provides a comprehensive suite of features. Which area would you like to explore?",
        options: {
            'employee_management': "Employee Management",
            'payroll_management': "Payroll Management",
            'attendance_tracking': "Attendance Tracking",
            'performance_analytics': "Performance Analytics",
            'compliance_management': "Compliance Management",
            'start': "Back to main menu"
        }
    },
    'employee_management': {
        message: "<strong>Employee Management:</strong> This feature centralizes all employee data, from onboarding to offboarding. It simplifies managing personal information, documents, roles, and career progression in one secure database.",
        options: { 'features': "See other features", 'start': "Back to main menu" }
    },
    'payroll_management': {
        message: "<strong>Payroll Management:</strong> Automate salary calculations, tax deductions, and payslip generation. Our system ensures accurate and timely payroll processing, reducing manual errors and saving time.",
        options: { 'features': "See other features", 'start': "Back to main menu" }
    },
    'attendance_tracking': {
        message: "<strong>Attendance Tracking:</strong> Monitor employee attendance, leaves, and work hours effortlessly. It supports various tracking methods and integrates with payroll for seamless salary calculation.",
        options: { 'features': "See other features", 'start': "Back to main menu" }
    },
    'performance_analytics': {
        message: "<strong>Performance Analytics:</strong> Set goals, conduct performance reviews, and get valuable insights through analytics. This helps in identifying top performers and areas for improvement across the organization.",
        options: { 'features': "See other features", 'start': "Back to main menu" }
    },
    'compliance_management': {
        message: "<strong>Compliance Management:</strong> Stay updated with labor laws and statutory requirements. The system helps manage compliance-related documentation and deadlines, mitigating legal risks.",
        options: { 'features': "See other features", 'start': "Back to main menu" }
    },
    'what_is_hrms': {
        message: "A Human Resource Management System (HRMS) is a software application that combines many human resources functions, including benefits administration, payroll, recruiting and training, and performance analysis and review into one package.",
        options: { 'features': "Tell me about the features", 'start': "Back to main menu" }
    },
    'suitability': {
        message: "Our HRMS is designed for businesses of all sizes! It's scalable and customizable to fit the needs of small startups, growing mid-sized companies, and large enterprises. It helps streamline operations and reduce administrative overhead.",
        options: { 'features': "Tell me about the features", 'start': "Back to main menu" }
    }
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentOptions, setCurrentOptions] = useState<Record<string, string>>({});
    const chatAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            const startNode = faqTree.start;
            setMessages([{ sender: 'bot', text: startNode.message }]);
            if (startNode.options) setCurrentOptions(startNode.options);
        }
    }, [isOpen, messages.length]);

    useEffect(() => {
        if (chatAreaRef.current) {
            chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
        }
    }, [messages]);

    const handleOptionClick = (key: string, text: string) => {
        setMessages((prev) => [...prev, { sender: 'user', text }]);
        setCurrentOptions({});
        const node = faqTree[key];
        if (node) {
            setTimeout(() => {
                setMessages((prev) => [...prev, { sender: 'bot', text: node.message }]);
                setCurrentOptions(node.options || {});
            }, 500);
        }
    };

    return (
        <>
            {/* Chatbot Window */}
            <div
                className={`fixed bottom-24 right-5 md:right-10 z-[1000] transition-all duration-500 ease-in-out ${isOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
            >
                <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl flex flex-col h-[70vh] max-h-[600px] relative z-[1001]">
                    {/* Header */}
                    <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex items-center shadow-lg">
                        <div className="relative w-12 h-12">
                            <img
                                className="w-12 h-12 rounded-full border-2 border-white object-cover"
                                src="https://placehold.co/100x100/FFFFFF/3B82F6?text=HR"
                                alt="HR Bot Avatar"
                            />
                            <span className="absolute bottom-0 right-0 block h-3 w-3 bg-green-400 border-2 border-blue-600 rounded-full"></span>
                        </div>
                        <div className="ml-4">
                            <h1 className="text-lg font-bold">HRMS Assistant</h1>
                            <p className="text-sm text-blue-100">Online | Ready to help</p>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div ref={chatAreaRef} className="flex-1 p-6 overflow-y-auto space-y-4 relative z-[1001]">
                        {messages.map((msg, index) =>
                            msg.sender === 'bot' ? (
                                <div key={index} className="chat-bubble-bot flex items-start gap-3">
                                    <img
                                        className="w-8 h-8 rounded-full object-cover"
                                        src="https://placehold.co/100x100/FFFFFF/3B82F6?text=HR"
                                        alt="HR Bot Avatar"
                                    />
                                    <div className="bg-gray-200 text-gray-800 p-3 rounded-lg rounded-tl-none max-w-xs md:max-w-sm shadow">
                                        <p
                                            className="text-sm"
                                            dangerouslySetInnerHTML={{ __html: msg.text }}
                                        ></p>
                                    </div>
                                </div>
                            ) : (
                                <div key={index} className="flex justify-end">
                                    <div className="bg-blue-600 text-white p-3 rounded-lg rounded-br-none max-w-xs md:max-w-sm shadow">
                                        <p className="text-sm">{msg.text}</p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>

                    {/* Options Area */}
                    <div className="p-4 border-t border-gray-200 relative z-[1001]">
                        <div className="chat-options grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {Object.entries(currentOptions).map(([key, value], index) => (
                                <button
                                    key={key}
                                    onClick={() => handleOptionClick(key, value)}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                    className="w-full text-left p-3 rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                                >
                                    {value}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Support Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-5 right-5 md:right-10 bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl hover:bg-blue-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 z-[1100]"
                aria-label="Toggle chat"
            >
                <svg
                    className={`w-8 h-8 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        ></path>
                    )}
                </svg>
            </button>
        </>
    );
}
