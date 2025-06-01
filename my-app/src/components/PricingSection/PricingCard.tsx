import React from 'react';

interface PricingCardProps {
  title: string;
  originalPrice: string;
  discountedPrice: string;
  savePercentage: string;
  monthlyPrice: string;
  formatText: string;
  icon: string; // This will be a URL or path to an image/SVG
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  originalPrice,
  discountedPrice,
  savePercentage,
  monthlyPrice,
  formatText,
  icon,
  features,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center max-w-sm">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>

      <div className="my-4">
        <span className="text-3xl font-bold text-green-500 mr-2">{discountedPrice}</span>
        <span className="text-xl text-gray-500 line-through">{originalPrice}</span>
      </div>

      {savePercentage && (
        <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full my-2">
          Save {savePercentage}
        </span>
      )}

      <p className="text-lg text-gray-700 my-2">{monthlyPrice}</p>

      <div className="font-bold text-gray-800 my-2 flex items-center">
        {icon && <span className="mr-2 text-2xl">{icon}</span>}
        <span>{formatText}</span>
      </div>

      <ul className="mt-4 text-left space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-2">✅</span>
            {feature}
          </li>
        ))}
      </ul>

      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-6 w-full">
        Enroll Now
      </button>
    </div>
  );
};

export default PricingCard;
