import React, { useState } from 'react';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need to buy or learn new software?",
      answer: "No. We build automations that connect your existing tools (your email, your CRM, your spreadsheets). Your team doesn't have to learn anything new."
    },
    {
      question: "What if the automation breaks?",
      answer: "We provide ongoing maintenance and monitoring. If an API changes or a workflow stalls, we fix it before you even notice."
    },
    {
      question: "Why not just hire another admin assistant?",
      answer: "Our systems work 24/7, do not make typos, do not take sick days, and cost a fraction of a full-time human salary."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section bg-surface">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2>Common Questions</h2>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item glass-panel ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer-wrapper" style={{ maxHeight: openIndex === index ? '200px' : '0' }}>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
