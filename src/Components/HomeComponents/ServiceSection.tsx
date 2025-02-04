import React from 'react';
import ServiceSection from '../GenericComponents/ServiceCard';

const services= [
  {
    title: "Dental treatments",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam aliquet volutpat.",
    link: "#",
    img: "/HomeServiceSection/DentalTreatments.svg",
  },
  {
    title: "Bones treatments",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam aliquet volutpat.",
    link: "#",
    img: "/HomeServiceSection/BonesTreaments.svg",
  },
  {
    title: "Diagnosis",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam aliquet volutpat.",
    link: "#",
    img: "/HomeServiceSection/Diagnosis.svg",
  },
  {
    title: "Cardiology",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam aliquet volutpat.",
    link: "#",
    img: "/HomeServiceSection/Cardiology.svg",
  },
  {
    title: "Surgery",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam aliquet volutpat.",
    link: "#",
    img: "/HomeServiceSection/Surgery.svg",
  },
  {
    title: "Eye care",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam aliquet volutpat.",
    link: "#",
    img: "/HomeServiceSection/EyeCare.svg",
  },
];

const LearnMoreServices = () => (
  <ServiceSection
    services={services}
    title="Our Services"
  description="At Image Hospitals, we offer personalized healthcare services, from routine check-ups to specialized treatments. With our expert team and state-of-the-art facilities, your well-being is our priority."
    actionIcon = "learnMore"
  />
);

export default LearnMoreServices;
