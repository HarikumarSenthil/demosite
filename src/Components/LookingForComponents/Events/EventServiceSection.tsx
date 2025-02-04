import React from 'react';
import ServiceSection from '../../GenericComponents/ServiceCard';
const services= [
  {
    title: "Health camps",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam aliquet volutpat.",
    link: "#",
    img: "/HomeServiceSection/DentalTreatments.svg",
  },
  {
    title: "Health Surveys",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam aliquet volutpat.",
    link: "#",
    img: "/HomeServiceSection/BonesTreaments.svg",
  },
  {
    title: "Health Service",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam aliquet volutpat.",
    link: "#",
    img: "/HomeServiceSection/Diagnosis.svg",
  },
];

const CommunityServices = () => (
  <div className='mt-0'>
  <ServiceSection
    services={services}
    title="Community Outreach Programs"
    description="Image Hospitals is dedicated to improving the health and wellness of our community through a variety of outreach programs. Our initiatives are designed to provide education, resources, and support to individuals and families in our area."
    actionIcon="download"
  />
  </div>
);

export default CommunityServices;
