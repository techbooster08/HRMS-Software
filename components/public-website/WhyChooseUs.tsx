// components/WhyChooseUs.tsx
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import whychoose from '@/assets/public-website/Images/whychoose.jpg';

export default function WhyChooseUs() {
  const features = [
    {
      title: "Cloud-Based Accessibility",
      description:
        "Access your HR data anytime, anywhere with our secure cloud infrastructure. No maintenance headaches or server costs.",
    },
    {
      title: "Seamless Integration",
      description:
        "Integrate with your existing tools and systems. Our platform connects with popular accounting, CRM, and productivity software.",
    },
    {
      title: "Advanced Security",
      description:
        "Enterprise-grade security with data encryption, role-based access controls, and regular security audits to protect sensitive information.",
    },
    {
      title: "Scalable Solution",
      description:
        "Grows with your business. Whether you have 10 or 10,000 employees, our platform scales to meet your needs.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        {/* Left Column - Text */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose Our HRMS Platform?
          </h2>
          <ul className="space-y-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-4">
                <FaCheckCircle className="text-green-500 text-xl mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1">
          <Image
            src= {whychoose}
            alt="Team using HRMS"
            width={700}
            height={500}
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
