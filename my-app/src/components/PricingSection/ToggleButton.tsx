import React from 'react';

interface ToggleButtonProps {
  tabs: string[];
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div role="tablist" className="flex justify-center mb-8 p-1 bg-gray-200 rounded-lg">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabClick(tab)}
          role="tab"
          aria-selected={activeTab === tab}
          aria-controls={`panel-${tab.toLowerCase()}`}
          id={`tab-${tab.toLowerCase()}`}
          className={`
            py-2 px-4 sm:px-6 md:px-8
            text-sm sm:text-base font-medium rounded-md cursor-pointer
            transition-colors duration-150 ease-in-out
            ${
              activeTab === tab
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ToggleButton;
