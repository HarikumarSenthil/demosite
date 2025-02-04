"use client";

import React, { useState } from "react";
import Image from "next/image";
import Icon from "@/Icons/Icon"; // Assuming Icon component is correctly imported

const faqs = [
  { question: "What services does ProHealth offer?", answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui." },
  { question: "How do I schedule an appointment with ProHealth?", answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui." },
  {
    question: "Do you accept insurance?",
    answer:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
  },
  { question: "What should I bring to my appointment?", answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui." },
  { question: "How do I request a prescription refill?", answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui." },
];

const QuestionSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(2); // Default open item

  return (
    <section className="p-8 flex flex-col md:flex-row gap-6 bg-skyblue">
      {/* FAQ Section */}
      <div className="w-full md:w-2/3">
        <h2 className="text-3xl text-darkCustomBlue font-extrabold font-inter mb-8">
          Frequently Asked<br/> Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border border-skyblue overflow-hidden transition-all ${
                openIndex === index ? "shadow-md" : ""
              }`}
            >
              <button
                className={`w-full flex justify-between items-center p-4 text-lg font-medium border border-gray-300 transition-all focus:outline-none ${
                  openIndex === index
                    ? "text-darkCustomBlue font-inter"
                    : "text-darkCustomBlue bg-white hover:bg-gray-100 font-inter"
                }`}
                style={
                  openIndex === index
                    ? {
                        background:
                          "linear-gradient(92.76deg, #D2EAEF 17.16%, #86BBF1 89.78%)",
                      }
                    : {}
                }
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span>
                  {openIndex === index ? (
                    <Icon type="drop-up-icon" />
                  ) : (
                    <Icon type="drop-down-icon" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-darkCustomBlue font-poppins bg-white">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <Image
          src="/Specialities/EmergencyCare/question.svg"
          alt="Doctors with a patient"
          width={366}
          height={600}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default QuestionSection;
