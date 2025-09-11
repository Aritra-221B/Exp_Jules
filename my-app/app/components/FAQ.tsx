'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: 'Is my data secure?',
    answer:
      'Yes, we use state-of-the-art security measures to protect your data. All information is encrypted and stored securely in the cloud.',
  },
  {
    question: 'Can I access the platform on my phone?',
    answer:
      'Absolutely! Our platform is fully responsive and works on all devices, including desktops, tablets, and smartphones.',
  },
  {
    question: 'What if I have a lot of animals?',
    answer:
      'Our platform is designed to handle farms of all sizes, from small family farms to large commercial operations. You can easily manage thousands of animals.',
  },
  {
    question: 'How do I share the medicine passport with buyers?',
    answer:
      'You can generate a unique, shareable link for each animal\'s medicine passport. You can also print a QR code that buyers can scan to view the passport.',
  },
];

const FAQItem: React.FC<{ faq: { question: string; answer: string }; isOpen: boolean; onClick: () => void }> = ({
  faq,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b">
      <button
        className="w-full text-left py-4 px-6 focus:outline-none"
        onClick={onClick}
      >
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-medium text-gray-800">{faq.question}</h4>
          <span>{isOpen ? '-' : '+'}</span>
        </div>
      </button>
      {isOpen && (
        <div className="py-4 px-6">
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
          <p className="text-gray-600">Here are some of our most common questions.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
