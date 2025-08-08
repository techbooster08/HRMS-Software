// components/FeaturesSection.tsx
import { FaUserTie, FaMoneyCheckAlt, FaFingerprint, FaChartBar, FaUserPlus, FaShieldAlt } from "react-icons/fa";
import FeatureCard from "@/components/public-website/FeatureCard";
// images
import feature1 from '@/assets/public-website/Images/feature1.jpg';
import feature2 from '@/assets/public-website/Images/feature2.jpg';
import feature3 from '@/assets/public-website/Images/feature3.jpg';
import feature4 from '@/assets/public-website/Images/feature4.jpg';
import feature5 from '@/assets/public-website/Images/feature5.jpg';
import feature6 from '@/assets/public-website/Images/feature6.jpg';

const Features = () => {
    const features = [
        {
            title: "Employee Management",
            description: "Centralized employee database with complete profiles, documents, organizational hierarchy, and advanced search capabilities.",
            image: feature1,
            icon: <FaUserTie className="text-blue-600" size={20} />,
            features: ["360° Employee Profiles", "Organizational Charts", "Document Management", "Advanced Search"]
        },
        {
            title: "Payroll Automation",
            description: "Fully automated salary calculations, tax deductions, direct deposits, and compliance with multi-state regulations.",
            image: feature2,
            icon: <FaMoneyCheckAlt className="text-blue-600" size={20} />,
            features: ["Auto Tax Calculations", "Multi-State Compliance", "Direct Deposit", "Custom Pay Structures"]
        },
        {
            title: "Attendance Tracking",
            description: "Real-time attendance monitoring with biometric integration, GPS tracking, shift scheduling, and overtime management.",
            image: feature3,
            icon: <FaFingerprint className="text-blue-600" size={20} />,
            features: ["Biometric Integration", "Shift Management", "GPS Tracking", "Overtime Alerts"]
        },
        {
            title: "Performance Analytics",
            description: "Comprehensive performance reviews, goal tracking, 360-degree feedback, and predictive analytics for workforce planning.",
            image: feature4,
            icon: <FaChartBar className="text-blue-600" size={20} />,
            features: ["360° Reviews", "Predictive Analytics", "Goal Tracking", "Custom KPIs"]
        },
        {
            title: "Recruitment Management",
            description: "End-to-end recruitment process from job posting to onboarding with AI-powered candidate matching and interview scheduling.",
            image: feature5,
            icon: <FaUserPlus className="text-blue-600" size={20} />,
            features: ["AI Candidate Matching", "Onboarding Workflows", "Interview Scheduling", "Talent Pipeline"]
        },
        {
            title: "Compliance Management",
            description: "Stay compliant with labor laws across multiple jurisdictions, automated reporting, audit trails, and policy management.",
            image: feature6,
            icon: <FaShieldAlt className="text-blue-600" size={20} />,
            features: ["Multi-State Compliance", "Audit Trails", "Automated Reports", "Policy Management"]
        }
    ];

    return (
        <>
            <section className="bg-[#f5f9ff] py-10 px-4 md:px-12">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black">Our Powerful Features</h2>
                    <p className="text-gray-600 mb-12">
                        Experience the most comprehensive HRMS platform with cutting-edge features designed to revolutionize your human resource management and drive organizational success.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((f, idx) => (
                            <FeatureCard key={idx} {...f} />
                        ))}
                    </div>
                </div>


                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl max-w-7xl mx-auto text-center py-16 px-6 mt-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Experience the Difference?
                    </h2>
                    <p className="text-lg mb-8 max-w-3xl mx-auto">
                        Join thousands of organizations already using our comprehensive HRMS platform to streamline operations and boost productivity.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
                        <button className="bg-white text-blue-600 font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition">
                            Start Free Trial
                        </button>
                        <button className="border border-white text-white font-medium py-3 px-6 rounded-full hover:bg-white hover:text-blue-600 transition">
                            View Live Demo
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <h3 className="text-2xl font-bold">99.9%</h3>
                            <p className="text-sm mt-2">Uptime Guarantee</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">10,000+</h3>
                            <p className="text-sm mt-2">Happy Customers</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">24/7</h3>
                            <p className="text-sm mt-2">Expert Support</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">SOC 2</h3>
                            <p className="text-sm mt-2">Certified Security</p>
                        </div>
                    </div>
                </div>

            </section>

        </>

    );
};

export default Features;
