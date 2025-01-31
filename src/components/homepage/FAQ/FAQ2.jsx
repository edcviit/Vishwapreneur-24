import { useState } from 'react';
import './FAQ.css';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={onClick}>
        <span className="question-text ">{question}</span>
        <div className="faq-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>
      <div className="faq-answer">
        <div className="faq-answer-content">{answer}</div>
      </div>
    </div>
  );
};

const ContactButton = () => {
  return (
    <button className="contact-support">
      <span>Contact support</span>
      <svg className="arrow-icon " width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path 
          d="M5 12H19M19 12L12 5M19 12L12 19" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const FAQ2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Vishwapreneur?",
      answer: "Vishwapreneur is a National Level Entrepreneurial Summit showcasing entrepreneurs, creators and innovative minds of our century who had the courage to think out of the box. Vishwapreneur is a platform for budding entrepreneurs to seek motivation & guidance through the experiences of successful business tycoons."
    },
    {
      question: "Who can participate in the event?.",
      answer: "The purpose of the summit is to provide a platform for budding entrepreneurs to seek motivation and guidance through the experiences of successful business tycoons."
    },
    {
      question: "What is the purpose of Vishwapreneur?",
      answer: "The purpose of the summit is to provide a platform for budding entrepreneurs to seek motivation and guidance through the experiences of successful business tycoons."
    },
    {
      question: "Who will be the speakers this year?",
      answer: "The Vishwapreneur will feature successful entrepreneurs business leaders, experts in the field of entrepreneurship or anyone who has done something BIG in their life."
    },
    {
      question: "What are the dates and timings?",
      answer: "Dates are 1st and 2nd March and stay tuned for the timings."
    },
    {
      question: "Who will be the speakers this year?",
      answer: "The Vishwapreneur will feature successful entrepreneurs business leaders, experts in the field of entrepreneurship or anyone who has done something BIG in their life."
    },
  ];

  return (
    <div className="faq-wrapper">
      <div className="stars-background"></div>
      <div className="faq-content">
        <div className="faq-left">
          <h2 className="main-heading bg-gradient-to-r from-[#FF4669] to-[#CE1790] text-transparent bg-clip-text text-4xl font-bold text-center py-8 mb-5">Frequently asked questions</h2>
          <p className="faq-subtitle">
          If you have any questions or need further details about our programs, feel free to reach out to us through our official email or social media platforms. We're here to help!
          </p>
          <ContactButton />
        </div>
        <div className="faq-right">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ2;