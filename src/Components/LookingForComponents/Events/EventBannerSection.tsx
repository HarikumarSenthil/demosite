
'use client'
import React from 'react';
import HeroBanner from '@/Components/GenericComponents/BannerCard1';

const EventBannerSection: React.FC = () => {
  return (
    <>
    <HeroBanner
      imageUrl="/LookingFor/banner_img.png.svg"
      altText="NurseWelcome"
      title="Events"
      description="Welcome to Image Hospitals, where we are committed to providing exceptional healthcare services with a focus on compassion, innovation, and excellence."
    />
    </>
  );
};

export default EventBannerSection;
