// about-us.tsx
import React from 'react';
import HeroBanner from '../GenericComponents/BannerCard1';

const HeroDoctors: React.FC = () => {
  return (
    <>
    <HeroBanner
      imageUrl="/HomeSubscribeSection/hero_img 1.svg"
      altText="NurseWelcome"
      title="Our Top Medical Experts"
      description="Welcome to Image Hospitals, where we are committed to providing 
                    exceptional healthcare services with a focus on compassion, innovation,
                    and excellence."
        />
    </>
  );
};

export default HeroDoctors;
