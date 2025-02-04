'use client';

import React from 'react';
import ContactForm from '../Common/formSection';
import Image from 'next/image';
const FeedbackSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-between bg-white rounded-lg max-w-7xl mx-auto">
      {/* Left Section */}
      <div className="flex flex-col px-8 py-12 bg-white w-full lg:w-1/2">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold font-lato text-darkCustomBlue mb-4">Feedback Form</h2>

        {/* Description */}
        <p className="text-black mb-6 leading-relaxed font-lato">
          At Image Hospitals, Our Interventional Ca rdiology Unit Specializes In
          Minimally Invasive Procedures To Diagnose And Treat Heart Conditions
          With Precision And Efficiency. Led By Experienced Interventional
          Cardiologists, Our Team Offers Advanced Interventions Such As
          Angioplasty, Stenting, And Catheter-Based Treatments To Restore Heart
          Function And Improve Patient Outcomes. Trust Us To Provide
          Personalized Care And Innovative Solutions For Your Cardiac Needs.
        </p>

        {/* Image */}
        <Image
          src="/DoctorsPage/FeedBackForm.svg"
          alt="Doctor"
          className="w-80 h-80"
          width={80}
          height={80}
        />
      </div>

   
          <ContactForm />
        </div>
  );
};

export default FeedbackSection;
