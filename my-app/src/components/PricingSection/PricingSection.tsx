import React, { useState } from 'react';
import PricingCard from './PricingCard';
import ToggleButton from './ToggleButton';

interface PricingPlan {
  id: string;
  title: string;
  originalPrice: string;
  discountedPrice: string;
  savePercentage: string;
  monthlyPrice: string;
  formatText: string;
  icon: string; // Using string for emoji or could be path/URL for actual image icons
  features: string[];
}

const pricingData: Record<string, PricingPlan[]> = {
  Beginner: [
    {
      id: 'beginner-group',
      title: 'Group (1:4)',
      originalPrice: '₹350',
      discountedPrice: '₹250',
      savePercentage: '29%',
      monthlyPrice: '₹2000 /month',
      formatText: '1:4 Group Class',
      icon: '👥',
      features: ["Experienced and certified faculties", "Fun, Engaging & Interactive live sessions", "Get your first certificate from prestigious colleges like Trinity, ABRSM, and RSL"],
    },
    {
      id: 'beginner-buddy',
      title: 'Buddy (1:2)',
      originalPrice: '₹600',
      discountedPrice: '₹400',
      savePercentage: '33%',
      monthlyPrice: '₹3200 /month',
      formatText: '1:2 Semi-Private Class',
      icon: '🤝',
      features: ["Experienced and certified faculties", "Fun, Engaging & Interactive live sessions", "Get your first certificate from prestigious colleges like Trinity, ABRSM, and RSL"],
    },
    {
      id: 'beginner-individual',
      title: 'Individual (1:1)',
      originalPrice: '₹800',
      discountedPrice: '₹650',
      savePercentage: '19%',
      monthlyPrice: '₹5200 /month',
      formatText: '1:1 Personal Coaching',
      icon: '👤',
      features: ["Experienced and certified faculties", "Fun, Engaging & Interactive live sessions", "Get your first certificate from prestigious colleges like Trinity, ABRSM, and RSL"],
    },
  ],
  Intermediate: [
    {
      id: 'intermediate-buddy',
      title: 'Buddy (1:2)',
      originalPrice: '₹800',
      discountedPrice: '₹600',
      savePercentage: '25%',
      monthlyPrice: '₹2400 /month', // Note: Data says 2400, not 4800 if it's per session price * sessions. Assuming 2400 is correct.
      formatText: '1:2 Semi-Private Class',
      icon: '🤝',
      features: ["Deeper Musical Techniques", "Expert Guidance & Support", "Trinity, ABRSM, RSL certified faculties to provide the best education"],
    },
    {
      id: 'intermediate-individual',
      title: 'Individual (1:1)',
      originalPrice: '₹900',
      discountedPrice: '₹750',
      savePercentage: '25%', // Note: Data says 25%, (900-750)/900 is ~16.7%. Using provided 25%.
      monthlyPrice: '₹3000 /month', // Note: Data says 3000.
      formatText: '1:1 Personal Coaching',
      icon: '👤',
      features: ["Deeper Musical Techniques", "Expert Guidance & Support", "Trinity, ABRSM, RSL certified faculties to provide the best education"],
    },
  ],
  Advanced: [
    {
      id: 'advanced-individual',
      title: 'Individual (1:1)',
      originalPrice: '₹1200',
      discountedPrice: '₹900',
      savePercentage: '25%',
      monthlyPrice: '₹3600 /month',
      formatText: '1:1 Personal Coaching',
      icon: '👤',
      features: [
        "Master impressive advanced techniques",
        "Build deeper music theory and expression",
        "Learn from Trinity, ABRSM & RSL–certified expert instructors",
        "Take your musicality to the next level and build the pathway to becoming the best and finest musician",
      ],
    },
  ],
};

const PricingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Beginner');
  const tabLabels = ["Beginner", "Intermediate", "Advanced"];

  const currentPlans = pricingData[activeTab] || [];

  // Adjust grid columns based on number of plans for the active tab
  let gridColsClass = 'lg:grid-cols-3'; // Default for 3 cards (Beginner)
  if (currentPlans.length === 1) {
    gridColsClass = 'lg:grid-cols-1 lg:max-w-sm'; // For 1 card (Advanced) - center it
  } else if (currentPlans.length === 2) {
    gridColsClass = 'lg:grid-cols-2 lg:max-w-2xl'; // For 2 cards (Intermediate) - center them
  }


  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ToggleButton tabs={tabLabels} activeTab={activeTab} onTabClick={setActiveTab} />

        {currentPlans.length > 0 ? (
          <div
            role="tabpanel"
            id={`panel-${activeTab.toLowerCase()}`}
            aria-labelledby={`tab-${activeTab.toLowerCase()}`}
            className={`grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-8 mx-auto`}
          >
            {currentPlans.map((plan) => (
              <PricingCard
                key={plan.id}
                title={plan.title}
                originalPrice={plan.originalPrice}
                discountedPrice={plan.discountedPrice}
                savePercentage={plan.savePercentage}
                monthlyPrice={plan.monthlyPrice}
                formatText={plan.formatText}
                icon={plan.icon}
                features={plan.features}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No plans available for this level.</p>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
