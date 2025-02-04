
'use client'
import React from 'react';
import HeroBanner from '@/Components/GenericComponents/BannerCard1';

const HealthCareBannerSection: React.FC = () => {
  return (
    <>
    <HeroBanner
      imageUrl="/LookingFor/healthCare.svg"
      altText="NurseWelcome"
      title="Health Hub"
      description="A Health Hub is a comprehensive healthcare center in hospitals, offering integrated medical services, from primary care to specialized treatments, ensuring streamlined, coordinated, and patient-focused care under one roof."
    />
    </>
  );
};

export default HealthCareBannerSection;
