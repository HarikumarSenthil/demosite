'use client'
import React from "react";
import ServiceSection from "@/Components/GenericComponents/ServiceCard";
import Link from "next/link";
import Icon from "@/Icons/Icon";

const services= [
    {
      title: "Health camps",
      description: "Welcome to Image Hospitals, where we are committed to providing exceptional healthcare services with a focus on compassion, innovation, and excellence.",
      link: "#",
      img: "/HomeServiceSection/DentalTreatments.svg",
    },
    {
      title: "Health Surveys",
      description: "Welcome to Image Hospitals, where we are committed to providing exceptional healthcare services with a focus on compassion, innovation, and excellence.",
      link: "#",
      img: "/HomeServiceSection/BonesTreaments.svg",
    },
    {
      title: "Health Service",
      description: "Welcome to Image Hospitals, where we are committed to providing exceptional healthcare services with a focus on compassion, innovation, and excellence.",
      link: "#",
      img:"/HomeServiceSection/Diagnosis.svg",
    },
  ];


const MedicalNewsArticles : React.FC = ()=>{
    return (
        <>
        <ServiceSection
            services={services}
            title="Latest Articles"
            description="Welcome to Image Hospitals, where we are committed to providing exceptional healthcare services with a focus on compassion, innovation, and excellence."
            actionIcon="news"
        />
   <div className="flex items-center justify-center mt-0">
 <Link href = "/LookingFor/news/blogs"> <button className="px-6 py-2 bg-customBlue text-white rounded-md transition w-44 font-lato text-size-20 flex items-center justify-center gap-2">
    View All
    <Icon 
      type="arrow-icon" 
      height="25" 
      width="25" 
      className="inline-block"
    />
  </button>
  </Link>
</div>
</>
    )
}


export default MedicalNewsArticles