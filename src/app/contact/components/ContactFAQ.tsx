"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './ContactFAQ.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How long does it take to complete a course?",
    answer: "Course duration varies depending on the program. Most courses range from 4-12 weeks, with flexible scheduling options available. You can learn at your own pace with our self-paced modules."
  },
  {
    id: 2,
    question: "Do you offer certificates upon completion?",
    answer: "Yes! All our courses come with industry-recognized certificates upon successful completion. These certificates can be shared on LinkedIn and added to your professional portfolio."
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, bank transfers, and offer flexible payment plans for longer programs. Contact our support team for custom payment arrangements."
  },
  {
    id: 4,
    question: "Can I get a refund if I'm not satisfied?",
    answer: "We offer a 30-day money-back guarantee for all courses. If you're not completely satisfied with your learning experience, we'll provide a full refund, no questions asked."
  },
  {
    id: 5,
    question: "Do you provide job placement assistance?",
    answer: "Yes! Our career services team provides resume reviews, interview preparation, job search guidance, and connects students with our network of industry partners and employers."
  },
  {
    id: 6,
    question: "Are there any prerequisites for your courses?",
    answer: "Most of our beginner courses have no prerequisites. For advanced courses, we clearly list any required knowledge or experience. We also offer preparatory courses to help you get ready."
  }
];

export default function ContactFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="contact-faq">
      <div className="container">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-description">
            Can&apos;t find what you&apos;re looking for? Check out our most common questions below, 
            or feel free to contact us directly.
          </p>
        </motion.div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.button
                className={`faq-question ${openItems.includes(item.id) ? 'open' : ''}`}
                onClick={() => toggleItem(item.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="question-text">{item.question}</span>
                <motion.div
                  className="question-icon"
                  animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6,9 12,15 18,9"/>
                  </svg>
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="answer-content">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="faq-footer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="faq-footer-text">
            Still have questions? We&apos;re here to help!
          </p>
          <motion.a
            href="#contact-form"
            className="faq-contact-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact Support</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13"/>
              <polygon points="22,2 15,22 11,13 2,9 22,2"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
