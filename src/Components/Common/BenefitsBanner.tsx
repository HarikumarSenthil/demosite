import React from 'react';
import Icon from '@/Icons/Icon';

const BenefitsBanner: React.FC = () => {
  const benefits = [
    {
      text: '24/7 personalized assistance with dedicated support.',
    },
    {
      text: 'Top Notch clinical care & Quality control on 200+ parameters.',
    },
    {
      text: 'Complete cashless insurance and other financing options.',
    },
  ];

  return (
    <div className="bg-benefitsblue py-12 p-10 mb-5">
      <div className="container mx-auto flex justify-around items-center flex-nowrap gap-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center text-white space-x-2 md:text-left flex-shrink-0 max-w-[280px]"
          >
            <Icon type = "check-circle" height='15' width='15'/>
            <span className="text-base font-lato md:text-base text-left break-words leading-3">
              {benefit.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsBanner;
