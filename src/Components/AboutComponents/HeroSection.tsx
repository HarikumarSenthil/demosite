// about-us.tsx
import React from 'react';
import HeroBanner from '../GenericComponents/BannerCard1';

const HeroAboutUs: React.FC = () => {
  return (
    <>
    <HeroBanner
      imageUrl="/AboutPage/Nurse.svg"
      altText="Nurse"
      title="About Us"
      description="Welcome to Image Hospitals, where we are committed to providing exceptional healthcare services with a focus on compassion, innovation, and excellence."
    />
    </>
  );
};

export default HeroAboutUs;
