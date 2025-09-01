import React from 'react'
import { ShieldCheck, Clock, Headphones } from "lucide-react";
const Demo = () => {
    const features = [
        { icon: <ShieldCheck className="w-6 h-6" />, text: "No Credit Card Required" },
        { icon: <Clock className="w-6 h-6" />, text: "Setup in Minutes" },
        { icon: <Headphones className="w-6 h-6" />, text: "24/7 Support" },
    ];  
    return (
        <section className='pt-10 bg-[#0f172a]' id='demos'>
            <div className='bg-[linear-gradient(90deg,rgba(51,74,189,1)_0%,rgba(18,58,204,1)_50%,rgba(15,57,99,1)_100%)] py-16'>

            
            <div className='max-w-7xl mx-auto px-4 md:px-12 text-center text-white'>
                <h2 className="text-3xl font-bold mb-2 ">Ready to Transform Your HR Operations?</h2>
                <p className=" max-w-3xl mx-auto mb-12">
                    Join thousands of companies already using our HRMS platform to streamline their HR processes, reduce costs, and improve employee satisfaction.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
                    <button className="bg-white text-[#1e40af] border-2 cursor-pointer border-white font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition active:scale-105">
                        Start 30 days Free Trial
                    </button>
                    <button className="border-2 border-white text-white cursor-pointer font-medium py-3 px-8 rounded-md hover:bg-white hover:text-blue-600 transition active:scale-105">
                        Schedule Demo
                    </button>
                </div>

                <div className=" text-white ">
                    <div className="max-w-6xl mx-auto flex flex-row max-md:gap-5  items-center justify-center gap-30">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 max-md:gap-1">
                                {feature.icon}
                                <span className="text-lg max-md:text-sm">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            </div>

        </section>
    )
}

export default Demo;