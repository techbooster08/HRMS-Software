// components/FeatureCard.tsx
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  features: string[];
  image: StaticImageData;
  icon?: React.ReactNode;
}

const FeatureCard: FC<FeatureCardProps> = ({ title, description, features, image, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="relative h-48 bg-black">
        <Image src={image} alt={title} fill className="object-cover opacity-70 " />
        <div className="absolute top-3 left-3 bg-white rounded-full p-2 shadow">{icon}</div>
        <h3 className="absolute bottom-2 left-3 text-white font-bold text-xl drop-shadow">{title}</h3>
      </div>
      <div className="p-4">
        <p className="text-sm  text-gray-600 mb-3 text-justify h-15">{description}</p>
        <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-blue-700 list-disc list-outside pl-5 text-justify">
          {features.map((f, i) => (
            <li key={i}
             className="list-disc list-item leading-snug font-semibold max-sm:text-xs"
            >{f}</li>
          ))}
        </ul>
    
      </div>
    </div>
  );
};

export default FeatureCard;
