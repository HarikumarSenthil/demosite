import React from "react";
import ServiceSection from "@/Components/GenericComponents/ServiceCard";


const services= [
    {
      title: "Patient Care",
      description: "Welcome to Image Hospitals, where we are committed to providing exceptional healthcare services with a focus on compassion, innovation, and excellence.",
      link: "#",
      img: "/LookingFor/MedicalArticles/MedicalArticles.svg",
    },
    {
      title: "Medical Facilities",
      description: "Welcome to Image Hospitals, where we are committed to providing exceptional healthcare services with a focus on compassion, innovation, and excellence.",
      link: "#",
      img: "/LookingFor/MedicalArticles/MedicalArticles.svg",
    },
    {
      title: "Health Service",
      description: "Welcome to Image Hospitals, where we are committed to providing exceptional healthcare services with a focus on compassion, innovation, and excellence.",
      link: "#",
      img: "/LookingFor/MedicalArticles/MedicalArticles.svg",
    },
  ];

const ArticlesSection : React.FC = ()=>{
    return (
        
<>


<ServiceSection
    services={services}
    title="Community Outreach Programs"
    description="Image Hospitals is dedicated to improving the health and wellness of our community through a variety of outreach programs. Our initiatives are designed to provide education, resources, and support to individuals and families in our area."
    actionIcon="articles"
  />

</>
    )
}

export default ArticlesSection