'use client'

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Define TypeScript interface for FAQ
interface FAQItem {
  question: string;
  answer: string;
}

// FAQs data array with TypeScript type
const faqs: FAQItem[] = [
  {
    question: "Are your paints original?",
    answer: "Yes, all our paints are 100% original and manufactured in our certified facilities.",
  },
  {
    question: "When does my order dispatch?",
    answer: "Orders are typically dispatched within 24-48 hours after confirmation.",
  },
  {
    question: "Can I cancel my order?",
    answer: "Yes, you can cancel your order within 24 hours of placement.",
  },
  {
    question: "What is my paint shades?",
    answer: "We offer over 50+ color shades across all our product ranges.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Why Choose Us
        </h2>

        <div className="bg-white text-black rounded-lg overflow-hidden">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-left">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}