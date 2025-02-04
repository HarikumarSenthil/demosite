import React from "react";
import ServiceSection from "@/Components/GenericComponents/ServiceCard";

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


const OtherServcices : React.FC = ()=>{
    return (
        <>

        <ServiceSection
        services={services}
        title="Other Services"
        description="Image Hospitals is dedicated to improving the health and wellness of our community through a variety of outreach programs. Our initiatives are designed to provide education, resources, and support to individuals and families in our area."
        actionIcon="others"
        />
        
        </>
    )
}

export default OtherServcices