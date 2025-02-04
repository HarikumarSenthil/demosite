// about-us.tsx
'use client'
import React from 'react';
import HeroBanner from '../GenericComponents/BannerCard1';

const HeroContactUs: React.FC = () => {
  return (
    <>
    <HeroBanner
      imageUrl="/ContactPage/Contact.svg"
      altText="NurseWelcome"
      title="Contact Us"
      description="Welcome to Image Hospitals, where we are committed to providing exceptional healthcare services with a focus on compassion, innovation, and excellence."
    />
    </>
  );
};

export default HeroContactUs;
